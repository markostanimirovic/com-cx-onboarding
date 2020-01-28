import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromApp from '../../store';
import * as fromUserList from './reducers/user-list.reducer';

interface UsersState {
  userList: fromUserList.State;
}

export interface State extends fromApp.State {
  users: UsersState;
}

export const reducers: ActionReducerMap<UsersState> = {
  userList: fromUserList.reducer,
};

export const selectUsersModule = createFeatureSelector<State, UsersState>('users');
export const selectUserList = createSelector(
  selectUsersModule,
  (state: UsersState) => state.userList,
);
