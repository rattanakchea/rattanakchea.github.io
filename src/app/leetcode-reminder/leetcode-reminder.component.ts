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

  constructor(private http: HttpClient) {}

  projectUrl = "assets/json/projects.json";

  ngOnInit(): void {}

  onSubmit() {
    console.log("You submitted: ", this.email);
    const subscribeURI =
      environment.API.rootUrl +
      environment.API.emailAPI.basePath +
      environment.API.emailAPI.subscribe;

    console.log("subscribeURI", subscribeURI);

    // Todo replace with my end-point to accept email, timestamp
    // Test loading spinner with interceptor
    return this.http
      .post(subscribeURI, { email: this.email })
      .pipe(delay(3000))
      .subscribe(result => {
        console.log({ result });
      });
  }
}
