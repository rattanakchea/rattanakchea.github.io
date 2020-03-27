import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// material modules
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatSortModule } from "@angular/material/sort";
import { MatSelectModule } from "@angular/material/select";

const materialModules = [
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatInputModule,
  MatSortModule,
  MatSelectModule
];

@NgModule({
  declarations: [...materialModules],
  imports: [CommonModule],
  exports: [...materialModules]
})
export class MaterialModule {}
