import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

const BASE_URL = "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/";
const API_BASE_URL = BASE_URL + "jhu-edu";

const API_ENDPOINTS = {
  brief: `${API_BASE_URL}/brief`,
  latest: `${API_BASE_URL}/latest`,
  timeSeries: `${API_BASE_URL}/timeseries`
};

@Injectable({
  providedIn: "root"
})
export class C19Service {
  constructor(private httpClient: HttpClient) {}

  getBrief() {
    return this.httpClient.get(API_ENDPOINTS.brief);
  }

  getLatest() {
    // transform data
    return this.httpClient.get(API_ENDPOINTS.latest).pipe(
      map((response: any[]) => {
        return response
          .filter(item => item.confirmed > 10)
          .map(item => {
            return {
              location: item.location,
              country: item.countryregion,
              provincestate: item.provincestate,
              confirmed: item.confirmed + ""
            };
          });
      })
    );
  }

  getTimeSeriesByCountry(countryCode = "US") {
    return this.httpClient.get(
      API_ENDPOINTS.timeSeries + "?onlyCountries=true&iso2=" + countryCode
    );
  }
}
