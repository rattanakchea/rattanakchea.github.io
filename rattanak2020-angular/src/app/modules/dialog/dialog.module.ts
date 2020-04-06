import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DialogComponent } from "./dialog/dialog.component";
import { MatDialogModule } from "@angular/material/dialog";

// dialog module that is reuseable

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, MatDialogModule],
})
export class DialogModule {}
