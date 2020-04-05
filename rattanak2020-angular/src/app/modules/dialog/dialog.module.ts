import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DialogComponent } from "./dialog/dialog.component";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";

// dialog module that is reuseable

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, FormsModule, MatDialogModule],
})
export class DialogModule {}
