import { Component, OnInit } from "@angular/core";
import { INavData } from "src/app/shared/dynamic-nav/dynamic-nav.component";

@Component({
  selector: "app-fullscreen",
  templateUrl: "./fullscreen.component.html",
  styleUrls: ["./fullscreen.component.scss"]
})
export class FullscreenComponent implements OnInit {
  data: INavData = {
    appName: "Covid-19 Dashboard"
  };

  constructor() {}

  ngOnInit(): void {}
}
