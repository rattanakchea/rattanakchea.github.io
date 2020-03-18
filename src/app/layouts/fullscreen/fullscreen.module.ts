import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FullscreenComponent } from "./fullscreen.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [FullscreenComponent],
  imports: [CommonModule, RouterModule, SharedModule]
})
export class FullscreenModule {}
