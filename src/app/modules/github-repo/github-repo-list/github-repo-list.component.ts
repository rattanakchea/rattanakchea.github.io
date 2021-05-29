import { Component, Input, OnInit } from '@angular/core';
import { IGithubRepoState } from '../github-facade.service';

@Component({
  selector: 'app-github-repo-list',
  templateUrl: './github-repo-list.component.html',
  styleUrls: ['./github-repo-list.component.scss'],
})
export class GithubRepoListComponent implements OnInit {
  @Input() data: IGithubRepoState | null = null;

  constructor() {}

  ngOnInit(): void {}
}
