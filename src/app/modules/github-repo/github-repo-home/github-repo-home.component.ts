import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GithubApiService } from '../github-api.service';
import { IActionState, GithubFacadeService } from '../github-facade.service';

@Component({
  selector: 'app-github-repo-home',
  templateUrl: './github-repo-home.component.html',
  styleUrls: ['./github-repo-home.component.scss'],
})
export class GithubRepoHomeComponent implements OnInit {
  sub: Subscription | null = null;
  actionState: IActionState;
  vm$ = this.GithubFacadeService.vm$;

  constructor(
    private GithubFacadeService: GithubFacadeService,
    private GithubApiService: GithubApiService
  ) {
    this.actionState = this.GithubFacadeService.actionState;
  }

  ngOnInit(): void {
    // subscription to

    this.GithubFacadeService.actionState$.subscribe((state) => {
      console.log('subscribed state: ', state);

      this.GithubApiService.getUserInfo(state.searchQuery).subscribe(
        (result: any) => {
          console.log('user info', result);

          if (result) {
            const { followers, following } = result;
            console.log(followers);

            this.GithubFacadeService.setState2({ followers, following });
          }
        }
      );
      // with the state provided, call Github API
    });
  }

  // can be removed, by using GithubFacadeService.setState(state) directly in the template
  onSubmit(state: IActionState) {
    console.log('state: ', state);

    this.GithubFacadeService.setState(state);
  }
}
