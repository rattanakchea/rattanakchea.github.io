import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-leetcode-reminder",
  templateUrl: "./leetcode-reminder.component.html",
  styleUrls: ["./leetcode-reminder.component.scss"]
})
export class LeetcodeReminderComponent implements OnInit {
  email: string = "rattanak22@gmail.com";

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log("You submitted: ", this.email);
  }
}
