import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserListSandbox } from '../../core/sandboxes/user-list.sandbox';

import * as fromUsers from '..';
import * as UserListActions from '../actions/user-list.actions';

@Injectable()
export class UserListEffects {

  fetchUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserListActions.fetchUsers),
    withLatestFrom(this.store.select(fromUsers.selectUserList)),
    switchMap(([, { filter, selectedPageSize }]) =>
      this.sandbox.getUsers(filter, selectedPageSize).pipe(
        map(users => UserListActions.fetchUsersSuccess({ users })),
        catchError(() => of(UserListActions.fetchUsersError())),
      ),
    ),
  ));

  invokeFetchUsers$ = createEffect(() => this.actions$.pipe(
    ofType(
      UserListActions.updateFilter,
      UserListActions.updateSelectedPageSize,
    ),
    map(() => UserListActions.fetchUsers()),
  ));

  constructor(private store: Store<fromUsers.State>, private actions$: Actions, private sandbox: UserListSandbox) {}

}
