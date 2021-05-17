import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-stocks-tracker",
  templateUrl: "./stocks-tracker.component.html",
  styleUrls: ["./stocks-tracker.component.scss"],
})
export class StocksTrackerComponent implements OnInit {
  optionForm = new FormGroup({
    ticker: new FormControl(""),
    strikePrice: new FormControl(""),
    expirationDate: new FormControl(""),
    optionType: new FormControl("C"),
  });

  constructor() {}

  ngOnInit(): void {}

  useSampleData() {
    this.optionForm.setValue({
      ticker: "AAPL",
      strikePrice: 145,
      expirationDate: "2021-05-28",
      optionType: "C",
    });
  }

  buildOptionQuote(optionValue: any) {
    let quote = "";

    quote += optionValue.ticker;

    let formattedExpirationDate = "";
    if (optionValue.expirationDate) {
      let arr = optionValue.expirationDate.split("-");
      arr[0] = arr[0].substring(2);

      formattedExpirationDate = arr.join("");

      console.log(formattedExpirationDate);
    }

    quote += formattedExpirationDate;
    quote += optionValue.optionType;

    quote += `00${optionValue.strikePrice}000`;

    return quote;
  }
}
