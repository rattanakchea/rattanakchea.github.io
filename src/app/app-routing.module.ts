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
      import('./pages/robinhood/robinhood.module').then(
        (m) => m.RobinhoodLibModule
      ),
  },
  {
    path: 'bootstrap-ui',
    loadChildren: () =>
      import('./pages/bootstrap-ui/bootstrap-ui.module').then(
        (m) => m.BootstrapUIModule
      ),
  },
  {
    path: 'github-repo',
    loadChildren: () =>
      import('./pages/github-repo/github-repo.module').then(
        (m) => m.GithubRepoModule
      ),
  },
  {
    path: 'playground',
    loadChildren: () =>
      import('./pages/playground/playground.module').then(
        (m) => m.PlaygroundModule
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
