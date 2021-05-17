import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './core/components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'projects', //lazy load route
    loadChildren: () =>
      import('./modules/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'robinhood', //lazy load route
    loadChildren: () =>
      import('./modules/robinhood/robinhood.module').then(
        (m) => m.RobinhoodLibModule
      ),
  },
  {
    path: 'bootstrap-ui',
    loadChildren: () =>
      import('./modules/bootstrap-ui/bootstrap-ui.module').then(
        (m) => m.BootstrapUIModule
      ),
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
