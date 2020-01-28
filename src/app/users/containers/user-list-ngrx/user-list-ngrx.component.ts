import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromUsers from '../../store';
import * as UserListActions from '../../store/actions/user-list.actions';

@Component({
  selector: 'app-user-list-ngrx',
  templateUrl: './user-list-ngrx.component.html',
})
export class UserListNgrxComponent implements OnInit {

  viewModel$ = this.store.select(fromUsers.selectUserList);

  constructor(private store: Store<fromUsers.State>) {}

  ngOnInit() {
    this.store.dispatch(UserListActions.fetchUsers());
  }

  onFilterChange(filter: string) {
    this.store.dispatch(UserListActions.updateFilter({ filter }));
  }

  onPageSizeChange(selectedPageSize: number) {
    this.store.dispatch(UserListActions.updateSelectedPageSize({ selectedPageSize }));
  }

}
