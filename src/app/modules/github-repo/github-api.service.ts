import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { IGithubRepoState } from './github-facade.service';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  BASE_URI = 'https://api.github.com/users';

  URLs = {
    user_url: '',
    repos_url: () => this.BASE_URI,
  };

  constructor(private httpClient: HttpClient) {}

  getUserInfo(username: string): Observable<any> {
    if (!username) {
      console.log('a username must be provided');
      return of(null);
    }

    let URL = `${this.BASE_URI}/${username}`;

    // let service handle all data transform, filter
    return this.httpClient.get(URL).pipe(
      filter((data) => data != null),
      map((userInfo: any) => {
        const { name, login, followers, following, avatar_url, html_url } =
          userInfo;
        return { name, login, followers, following, avatar_url, html_url };
      }),
      catchError(this.handleError)
    );
  }

  getReposInfo(username: string): Observable<any> {
    if (!username) {
      console.log('a username must be provided');
      return of(null);
    }

    let URL = `${this.BASE_URI}/${username}/repos?sort=updated`;
    return this.httpClient.get(URL).pipe(catchError(this.handleError));
  }

  // Generic error handling
  private handleError(error: HttpErrorResponse): Observable<string> {
    let errorMsg = '';
    switch (error.status) {
      case 404: {
        errorMsg = `Not Found: ${error.message}`;
        break;
      }
      case 403: {
        errorMsg = `Access Denied: ${error.message}`;
        break;
      }
      case 500: {
        errorMsg = `Internal Server Error: ${error.message}`;
        break;
      }
      default: {
        errorMsg = `Unknown Server Error: ${error.message}`;
      }
    }

    return throwError(errorMsg);
  }
}
