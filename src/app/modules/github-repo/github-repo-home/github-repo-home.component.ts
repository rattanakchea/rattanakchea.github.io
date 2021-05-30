import { Component, OnInit } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
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

      const userInfo$ = this.GithubApiService.getUserInfo(state.searchQuery);
      const userRepo$ = this.GithubApiService.getReposInfo(state.searchQuery);

      combineLatest([userInfo$, userRepo$]).subscribe(
        ([userInfo, userRepo]) => {
          console.log(userInfo);
          console.log(userRepo);

          const { name, followers, following, avatar_url, html_url } = userInfo;

          this.GithubFacadeService.setState2({
            userInfo: { name, avatar_url, followers, following, html_url },
            repoList: userRepo,
          });
        }
      );

      // this.GithubApiService.getUserInfo(state.searchQuery).subscribe(
      //   (result: any) => {
      //     console.log('user info', result);

      //     if (result) {
      //       const { name, followers, following, avatar_url, html_url } = result;
      //       console.log(followers);

      //       this.GithubFacadeService.setState2({
      //         userInfo: { name, avatar_url, followers, following, html_url },
      //       });
      //     }
      //   }
      // );
    });
  }

  // can be removed, by using GithubFacadeService.setState(state) directly in the template
  onSubmit(state: IActionState) {
    console.log('state: ', state);

    this.GithubFacadeService.setState(state);
  }
}
