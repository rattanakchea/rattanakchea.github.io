import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IGithubRepoState {
  userInfo: {
    name: string;
    avatar_url: string;
    html_url: string;
    followers: number;
    following: number;
  };
  repoList: any[];
  repoListLoading: boolean;
  repoDetail: Object;
}

const initialState: IGithubRepoState = {
  userInfo: {
    name: '',
    avatar_url: '',
    html_url: '',
    followers: 0,
    following: 0,
  },
  repoList: [],
  repoListLoading: false,
  repoDetail: {},
};

export interface IActionState {
  searchQuery: string;
  selectedRepo: string;
  sort: string;
  pagination: {
    page: number;
    pageSize: number;
    pageSizeOptions: number[];
    total: number;
  };
}

const initialActionState: IActionState = {
  searchQuery: '',
  selectedRepo: '',
  sort: '',
  pagination: {
    page: 1,
    pageSize: 10,
    pageSizeOptions: [5, 10, 20, 30, 50],
    total: 0,
  },
};

@Injectable({
  providedIn: 'root',
})
export class GithubFacadeService {
  private _actionSubject: BehaviorSubject<IActionState> =
    new BehaviorSubject<IActionState>(initialActionState);
  actionState$ = this._actionSubject.asObservable();

  // App state for UI
  private _githubSubject: BehaviorSubject<IGithubRepoState> =
    new BehaviorSubject<IGithubRepoState>(initialState);

  vm$ = this._githubSubject.asObservable();

  constructor() {}

  get actionState() {
    return this._actionSubject.getValue();
  }

  resetState() {
    this.setState(initialActionState);
  }

  setState(newState: Partial<IActionState>) {
    this._actionSubject.next({
      ...this.actionState,
      ...newState,
    });
  }

  setState2(newState: Partial<IGithubRepoState>) {
    this._githubSubject.next({
      ...this._githubSubject.getValue(),
      ...newState,
    });
  }

  // protected select<K>(mapFn: (state: T) => K): Observable<K> {
  //   return this.state$.asObservable().pipe(
  //     map((state: T) => mapFn(state)),
  //     distinctUntilChanged()
  //   );
  // }
}
