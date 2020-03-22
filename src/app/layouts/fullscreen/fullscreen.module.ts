import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FullscreenComponent } from "./fullscreen.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { C19DashboardComponent } from "src/app/covid19-dashboard/c19-dashboard/c19-dashboard.component";
import { FullscreenHomeComponent } from "./fullscreen-home/fullscreen-home.component";
import { AgmCoreModule } from "@agm/core";

const routes: Routes = [
  {
    path: "",
    component: FullscreenComponent,
    children: [
      {
        path: "",
        component: FullscreenHomeComponent
      },
      {
        path: "covid19-dashboard",
        component: C19DashboardComponent
      }
    ]
  }
];
@NgModule({
  declarations: [FullscreenComponent, FullscreenHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class FullscreenModule {}
