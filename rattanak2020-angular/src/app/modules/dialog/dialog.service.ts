import { Injectable } from "@angular/core";

// Components
import { DialogComponent } from "./dialog/dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Injectable({
  providedIn: "root",
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(data): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "30%",
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("close dialog result: ", result);
    });
  }
  open(): void {}

  close(): void {}
}
