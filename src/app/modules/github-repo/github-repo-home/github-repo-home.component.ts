import { Component, OnInit } from '@angular/core';
import { combineLatest, Subject, Subscription } from 'rxjs';
import { filter, skip } from 'rxjs/operators';
import { indicate } from 'src/app/shared/operators';
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
  loading$ = new Subject<boolean>();

  vm$ = this.GithubFacadeService.vm$;

  constructor(
    private GithubFacadeService: GithubFacadeService,
    private GithubApiService: GithubApiService
  ) {
    this.actionState = this.GithubFacadeService.actionState;
  }

  ngOnInit(): void {
    this.GithubFacadeService.actionState$.subscribe((state) => {
      console.log('subscribed state: ', state);

      const userInfo$ = this.GithubApiService.getUserInfo(
        state.searchQuery
      ).pipe(filter((data) => data != null));

      const userRepo$ = this.GithubApiService.getReposInfo(
        state.searchQuery
      ).pipe(filter((data) => data != null));

      console.log('ever here');

      combineLatest([userInfo$, userRepo$])
        .pipe(indicate(this.loading$))
        .subscribe(([userInfo, userRepo]) => {
          console.log(userInfo);
          console.log(userRepo);

          // Todo avoid null automatically
          if (userInfo && userRepo) {
            const { name, followers, following, avatar_url, html_url } =
              userInfo;

            // set the GithubSubject VM state
            this.GithubFacadeService.setState2({
              userInfo: { name, avatar_url, followers, following, html_url },
              repoList: userRepo,
              selectedRepo: userRepo.length > 0 ? userRepo[0] : {},
            });
          }
        });

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
