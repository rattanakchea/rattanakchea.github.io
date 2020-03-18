import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./navigation/navigation.component";
import { RouterModule } from "@angular/router";
import { Page404Component } from "./page404/page404.component";

@NgModule({
  declarations: [NavigationComponent, Page404Component],
  imports: [CommonModule, RouterModule],
  exports: [RouterModule, NavigationComponent, Page404Component]
})
export class SharedModule {}
