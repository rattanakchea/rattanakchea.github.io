import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";

// default layout for Portfolio site
@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, RouterModule, SharedModule]
})
export class DefaultModule {}
