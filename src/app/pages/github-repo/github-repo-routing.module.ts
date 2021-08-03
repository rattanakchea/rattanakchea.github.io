import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubRepoHomeComponent } from './github-repo-home/github-repo-home.component';

const routes: Routes = [
  {
    path: '',
    component: GithubRepoHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubRepoRoutingModule {}
