import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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
}
