import { Component, OnInit, Input } from "@angular/core";

export interface INavData {
  appName: string;
}
@Component({
  selector: "app-dynamic-nav",
  templateUrl: "./dynamic-nav.component.html",
  styleUrls: ["./dynamic-nav.component.scss"]
})
export class DynamicNavComponent implements OnInit {
  @Input() data: INavData;

  constructor() {}

  ngOnInit(): void {}
}
