import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FullscreenComponent } from "./fullscreen.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { C19DashboardComponent } from "src/app/covid19-dashboard/c19-dashboard/c19-dashboard.component";
import { FullscreenHomeComponent } from "./fullscreen-home/fullscreen-home.component";
import { CaseTableComponent } from "src/app/covid19-dashboard/case-table/case-table.component";
import { CaseStatisticComponent } from "src/app/covid19-dashboard/case-statistic/case-statistic.component";

import { AgmCoreModule } from "@agm/core";

// material modules
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatSortModule } from "@angular/material/sort";
import { MatSelectModule } from "@angular/material/select";

const routes: Routes = [
  {
    path: "",
    component: FullscreenComponent,
    children: [
      {
        path: "",
        component: FullscreenHomeComponent
      },
      {
        path: "covid19-dashboard",
        component: C19DashboardComponent
      },
      {
        path: "covid19-countries-table",
        component: CaseTableComponent
      }
    ]
  }
];
@NgModule({
  declarations: [
    FullscreenComponent,
    FullscreenHomeComponent,
    C19DashboardComponent,
    CaseStatisticComponent,
    CaseTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBNkw4zgUHLhcmXbSPKcoWBIRRCc4nzLuc"
    })
  ]
})
export class FullscreenModule {}
