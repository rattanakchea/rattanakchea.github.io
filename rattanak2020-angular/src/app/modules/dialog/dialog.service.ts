import { Injectable } from "@angular/core";

// Components
import { DialogComponent } from "./dialog/dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Injectable({
  providedIn: "root",
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "30%",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("close dialog result: ", result);
    });
  }
  open(): void {}

  close(): void {}
}
