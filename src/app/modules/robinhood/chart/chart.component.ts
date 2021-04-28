import { Component, OnInit, Input } from "@angular/core";

// SVG chart
@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {

  // default config, class name
  @Input() config = "green";

  constructor() {}

  ngOnInit(): void {}
}
