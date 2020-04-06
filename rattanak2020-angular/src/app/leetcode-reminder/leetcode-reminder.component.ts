import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { DialogService } from "../modules/dialog/dialog.service";

@Component({
  selector: "app-leetcode-reminder",
  templateUrl: "./leetcode-reminder.component.html",
  styleUrls: ["./leetcode-reminder.component.scss"],
})
export class LeetcodeReminderComponent implements OnInit {
  email: string = "rattanak22@gmail.com";
  result: string = "";

  constructor(private http: HttpClient, private dialogService: DialogService) {}

  projectUrl = "assets/json/projects.json";

  ngOnInit(): void {}

  onSubmit() {
    console.log("You submitted: ", this.email);
    const subscribeURI =
      environment.rootUrl +
      environment.emailAPI.basePath +
      environment.emailAPI.subscribe;

    return this.http.post(subscribeURI, { email: this.email }).subscribe(
      (data: any) => {
        this.result = data.status;
        this.email = "";
      },
      (error) => {
        const data = {
          title: "Server Error",
          text:
            "We apology we were unable add your email to subscription at this time.",
        };
        this.dialogService.openDialog(data);

        // TODO use an toast might be better option
      }
    );
  }
}
