import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-case-table",
  templateUrl: "./case-table.component.html",
  styleUrls: ["./case-table.component.scss"]
})
export class CaseTableComponent implements OnInit {
  lastUpdatedAt: Date;

  constructor() {}

  ngOnInit(): void {}
}
