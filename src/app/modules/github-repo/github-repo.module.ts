import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRepoRoutingModule } from './github-repo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { GithubRepoHomeComponent } from './github-repo-home/github-repo-home.component';
import { GithubRepoListComponent } from './github-repo-list/github-repo-list.component';

@NgModule({
  declarations: [
    GithubRepoHomeComponent,
    GithubRepoListComponent
  ],
  imports: [CommonModule, GithubRepoRoutingModule, FormsModule, SharedModule],
})
export class GithubRepoModule {}
