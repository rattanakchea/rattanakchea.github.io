import { Component, OnInit } from "@angular/core";
import { C19Service } from "../c19.service";

export interface I_C19_stat {
  confirmed: number;
  deaths: number;
  recovered: number;
}
@Component({
  selector: "app-c19-dashboard",
  templateUrl: "./c19-dashboard.component.html",
  styleUrls: ["./c19-dashboard.component.scss"]
})
export class C19DashboardComponent implements OnInit {
  constructor(private c19Service: C19Service) {}

  // lat = 40.73061;
  // lng = -73.935242;

  worldStat: I_C19_stat;
  markers = [];
  selectedCountryCode = "US";

  ngOnInit(): void {
    this.c19Service.getBrief().subscribe((data: I_C19_stat) => {
      this.worldStat = data;
    });

    this.c19Service.getLatest().subscribe(data => {
      this.markers = data;
    });

    this.c19Service
      .getTimeSeriesByCountry(this.selectedCountryCode)
      .subscribe(data => {
        console.log("time series: ", data);
      });
  }
}
