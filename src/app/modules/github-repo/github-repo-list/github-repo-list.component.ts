import { Component, Input, OnInit } from '@angular/core';
import {
  GithubFacadeService,
  IGithubRepoState,
} from '../github-facade.service';

@Component({
  selector: 'app-github-repo-list',
  templateUrl: './github-repo-list.component.html',
  styleUrls: ['./github-repo-list.component.scss'],
})
export class GithubRepoListComponent implements OnInit {
  @Input() data: IGithubRepoState | null = null;

  constructor(private GithubFacadeService: GithubFacadeService) {}

  ngOnInit(): void {}

  selectRepo(repo: any) {
    console.log(repo);
    this.GithubFacadeService.setState2({
      selectedRepo: repo,
    });
  }
}
