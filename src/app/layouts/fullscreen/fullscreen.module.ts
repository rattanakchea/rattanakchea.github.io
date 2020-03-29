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
import { MaterialModule } from "src/app/modules/material/material.module";

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
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: ""
    })
  ]
})
export class FullscreenModule {}
