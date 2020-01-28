import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../core/models/user.model';

export const fetchUsers = createAction('[Users - User List] Fetch Users');
export const fetchUsersSuccess = createAction('[Users - User List] Fetch Users Success', props<{ users: UserModel[] }>());
export const fetchUsersError = createAction('[Users - User List] Fetch Users Error');

export const updateFilter = createAction('[Users - User List] Update Filter', props<{ filter: string }>());
export const updateSelectedPageSize = createAction('[Users - User List] Update Selected Page Size', props<{ selectedPageSize: number }>());
