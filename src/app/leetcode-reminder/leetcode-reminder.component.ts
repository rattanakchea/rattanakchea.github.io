import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-leetcode-reminder",
  templateUrl: "./leetcode-reminder.component.html",
  styleUrls: ["./leetcode-reminder.component.scss"]
})
export class LeetcodeReminderComponent implements OnInit {
  email: string = "rattanak22@gmail.com";
  result: string = "";

  constructor(private http: HttpClient) {}

  projectUrl = "assets/json/projects.json";

  ngOnInit(): void {}

  onSubmit() {
    console.log("You submitted: ", this.email);
    const subscribeURI =
      environment.rootUrl +
      environment.emailAPI.basePath +
      environment.emailAPI.subscribe;

    console.log("subscribeURI", subscribeURI);

    // Todo replace with my end-point to accept email, timestamp
    // Test loading spinner with interceptor
    return this.http
      .post(subscribeURI, { email: this.email })
      .subscribe((data: any) => {
        this.result = data.status;
        this.email = "";
      });
  }
}
