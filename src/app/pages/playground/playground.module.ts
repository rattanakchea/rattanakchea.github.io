import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './playground.component';

const routes: Routes = [
  {
    path: '',
    component: PlaygroundComponent,
  },
];

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class PlaygroundModule {}
