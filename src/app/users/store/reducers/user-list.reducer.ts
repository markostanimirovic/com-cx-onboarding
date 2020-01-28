import { UserModel } from '../../core/models/user.model';
import { createReducer, on } from '@ngrx/store';

import * as UserListActions from '../actions/user-list.actions';

export interface State {
  filter: string;
  users: UserModel[];
  showLoading: boolean;
  selectedPageSize: number;
  pageSizes: number[];
}

const initialState: State = {
  filter: '',
  users: [],
  showLoading: false,
  selectedPageSize: 1,
  pageSizes: [1, 3, 5, 10],
};

export const reducer = createReducer(
  initialState,
  on(UserListActions.fetchUsers, (state): State => ({ ...state, showLoading: true })),
  on(UserListActions.fetchUsersSuccess, (state, { users }): State => ({
    ...state,
    users,
    showLoading: false,
  })),
  on(UserListActions.fetchUsersError, (state): State => ({
    ...state,
    users: [],
    showLoading: false,
  })),
  on(UserListActions.updateFilter, (state, { filter }): State => ({ ...state, filter })),
  on(UserListActions.updateSelectedPageSize, (state, { selectedPageSize }): State => ({ ...state, selectedPageSize })),
);
