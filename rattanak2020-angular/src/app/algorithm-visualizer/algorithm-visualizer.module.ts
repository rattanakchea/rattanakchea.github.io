import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlgorithmVisualizerRoutingModule } from './algorithm-visualizer-routing.module';
import { AvHomeComponent } from './av-home/av-home.component';


@NgModule({
  declarations: [AvHomeComponent],
  imports: [
    CommonModule,
    AlgorithmVisualizerRoutingModule
  ]
})
export class AlgorithmVisualizerModule { }
