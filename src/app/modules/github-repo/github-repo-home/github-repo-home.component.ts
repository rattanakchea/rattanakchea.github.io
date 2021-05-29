import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IActionState, GithubFacadeService } from '../github-facade.service';

@Component({
  selector: 'app-github-repo-home',
  templateUrl: './github-repo-home.component.html',
  styleUrls: ['./github-repo-home.component.scss'],
})
export class GithubRepoHomeComponent implements OnInit {
  sub: Subscription | null = null;
  actionState: IActionState;
  constructor(private GithubFacadeService: GithubFacadeService) {
    this.actionState = this.GithubFacadeService.actionState;
  }

  ngOnInit(): void {
    // subscription to

    this.GithubFacadeService.actionState$.subscribe((state) => {
      console.log('subscribed state: ', state);

      // with the state provided, call Github API
    });
  }

  // can be removed, by using GithubFacadeService.setState(state) directly in the template
  onSubmit(state: IActionState) {
    console.log('state: ', state);

    this.GithubFacadeService.setState(state);
  }
}
