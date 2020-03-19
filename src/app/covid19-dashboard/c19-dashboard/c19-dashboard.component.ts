import { Component, OnInit } from "@angular/core";
import { C19Service } from "../c19.service";

@Component({
  selector: "app-c19-dashboard",
  templateUrl: "./c19-dashboard.component.html",
  styleUrls: ["./c19-dashboard.component.scss"]
})
export class C19DashboardComponent implements OnInit {
  constructor(private c19Service: C19Service) {}

  ngOnInit(): void {
    this.c19Service.getBrief().subscribe(data => {
      console.log("data", data);
    });
  }
}
