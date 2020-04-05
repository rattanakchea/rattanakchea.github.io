import { Component, OnInit, Input } from "@angular/core";
import { I_C19_stat } from "../c19-dashboard/c19-dashboard.component";

@Component({
  selector: "c19-case-statistic",
  templateUrl: "./case-statistic.component.html",
  styleUrls: ["./case-statistic.component.scss"]
})
export class CaseStatisticComponent implements OnInit {
  @Input() stat: I_C19_stat;

  constructor() {}

  ngOnInit(): void {}
}
