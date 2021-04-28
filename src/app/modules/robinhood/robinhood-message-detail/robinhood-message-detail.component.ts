import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-robinhood-message-detail",
  templateUrl: "./robinhood-message-detail.component.html",
  styleUrls: ["./robinhood-message-detail.component.scss"],
})
export class RobinhoodMessageDetailComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Scroll to the bottom
    document.querySelector("#bottom").scrollIntoView({
      behavior: "smooth",
    });
  }
}
