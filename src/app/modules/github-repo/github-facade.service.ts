import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface IGithubRepoState {
  repoList: any[];
  repoListLoading: boolean;
  repoDetail: Object;
}

const initialState: IGithubRepoState = {
  repoList: [],
  repoListLoading: false,
  repoDetail: {},
};

interface IActionState {
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
  private actionState$: BehaviorSubject<IActionState> =
    new BehaviorSubject<IActionState>(initialActionState);

  constructor() {}

  protected get state() {
    return this.actionState$.getValue();
  }

  protected setState(newState: Partial<IActionState>) {
    this.actionState$.next({
      ...this.state,
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
