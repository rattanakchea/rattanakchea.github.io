import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  projectUrl = "assets/json/projects.json";
  projects: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProjects().subscribe(projects => {
      console.log("ProjectsComponent -> ngOnInit -> projects", projects);
      this.projects = projects;
    });
  }

  getProjects() {
    return this.http.get(this.projectUrl);
  }
}
