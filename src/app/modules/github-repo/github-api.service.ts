import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

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
    return this.httpClient.get(URL);
  }

  getReposInfo(username: string): Observable<any> {
    if (!username) {
      console.log('a username must be provided');
      return of(null);
    }

    let URL = `${this.BASE_URI}/${username}/repos?sort=updated`;
    return this.httpClient.get(URL);
  }
}
