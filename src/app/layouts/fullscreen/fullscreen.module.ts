import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FullscreenComponent } from "./fullscreen.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "src/app/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: FullscreenComponent,
    children: [
      {
        path: "",
        component: FullscreenComponent
      },
      {
        path: "covid19-dashboard",
        component: HomeComponent
      }
    ]
  }
];
@NgModule({
  declarations: [FullscreenComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class FullscreenModule {}
