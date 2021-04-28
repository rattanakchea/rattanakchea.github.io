import { NgModule } from "@angular/core";

// material modules
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatSortModule } from "@angular/material/sort";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCheckboxModule } from "@angular/material/checkbox";

const materialModules = [
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatInputModule,
  MatSortModule,
  MatSelectModule,
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatSelectModule,
];

@NgModule({
  declarations: [],
  imports: [...materialModules],
  exports: [...materialModules],
})
export class MaterialModule {}
