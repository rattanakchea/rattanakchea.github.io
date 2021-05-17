import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects.component';
import { StocksTrackerComponent } from './stocks-tracker/stocks-tracker.component';
import { ProjectsListPageComponent } from './projects-list-page/projects-list-page.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: '',
        component: ProjectsListPageComponent,
      },
      {
        path: 'stock-tracker',
        component: StocksTrackerComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsListPageComponent,
    StocksTrackerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
})
export class ProjectsModule {}
