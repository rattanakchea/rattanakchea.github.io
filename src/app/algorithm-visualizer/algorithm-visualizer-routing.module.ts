import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AvHomeComponent } from "./av-home/av-home.component";

const routes: Routes = [{ path: "", component: AvHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlgorithmVisualizerRoutingModule {}
