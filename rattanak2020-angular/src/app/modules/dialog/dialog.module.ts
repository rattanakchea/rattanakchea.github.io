import { NgModule } from "@angular/core";
import { DialogComponent } from "./dialog/dialog.component";
import { MatButtonModule } from "@angular/material/button";
import { MaterialModule } from "../material/material.module";
// dialog module that is reuseable

@NgModule({
  declarations: [DialogComponent],
  imports: [MatButtonModule],
  exports: [],
})
export class DialogModule {}
