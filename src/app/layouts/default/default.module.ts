import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { ProjectsComponent } from "src/app/projects/projects.component";
import { HomeComponent } from "src/app/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "projects",
        component: ProjectsComponent
      }
    ]
  }
];

// default layout for Portfolio site
@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class DefaultModule {}
