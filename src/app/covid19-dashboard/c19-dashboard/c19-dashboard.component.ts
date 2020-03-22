import { Component, OnInit } from "@angular/core";
import { C19Service } from "../c19.service";

@Component({
  selector: "app-c19-dashboard",
  templateUrl: "./c19-dashboard.component.html",
  styleUrls: ["./c19-dashboard.component.scss"]
})
export class C19DashboardComponent implements OnInit {
  constructor(private c19Service: C19Service) {}

  lat = 40.73061;
  lng = -73.935242;

  markers = [];
  selectedCountryCode = "US";

  ngOnInit(): void {
    this.c19Service.getBrief().subscribe(data => {
      console.log("data", data);
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
