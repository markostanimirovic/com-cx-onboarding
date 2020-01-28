import { UserModel } from '../../core/models/user.model';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { UsersResource } from '../../core/resources/users.resource';

export interface UsersWithFacadeState {
  filter: string;
  users: UserModel[];
  showLoading: boolean;
  selectedPageSize: number;
  pageSizes: number[];
}

const initialState: UsersWithFacadeState = {
  filter: '',
  users: [],
  showLoading: true,
  selectedPageSize: 1,
  pageSizes: [1, 3, 5, 10],
};

@Injectable()
export class UserListRxjsFacade {

  private store = new BehaviorSubject<UsersWithFacadeState>(initialState);

  private selectedPageSize$ = this.store.pipe(
    map(({ selectedPageSize }) => selectedPageSize),
    distinctUntilChanged(),
  );
  private filter$ = this.store.pipe(
    map(({ filter }) => filter),
    distinctUntilChanged(),
  );

  viewModel$ = this.store.asObservable();

  constructor(private usersResource: UsersResource) {
    combineLatest(this.filter$, this.selectedPageSize$).pipe(
      switchMap(([filter, selectedPageSize]) => this.usersResource.getUsers(filter, selectedPageSize)),
    ).subscribe(
      users => this.patchState({ users, showLoading: false }),
      () => this.patchState({ users: [], showLoading: false }),
    );
  }

  updateFilter(filter: string) {
    this.patchState({ filter, showLoading: true });
  }

  updateSelectedPageSize(selectedPageSize: number) {
    this.patchState({ selectedPageSize, showLoading: true });
  }

  private patchState(state: Partial<UsersWithFacadeState>) {
    this.store.next({
      ...this.store.value,
      ...state,
    });
  }

}
