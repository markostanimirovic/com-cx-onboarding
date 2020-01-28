import { Component, OnInit } from '@angular/core';
import { UsersResource } from '../../core/resources/users.resource';
import { UserModel } from '../../core/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {

  filter = '';
  users: UserModel[] = [];
  showLoading = false;
  selectedPageSize = 1;
  pageSizes = [1, 3, 5, 10];

  constructor(private usersResource: UsersResource) {}

  ngOnInit() {
    this.getUsers();
  }

  onFilterChange(filter: string) {
    this.filter = filter;
    this.getUsers();
  }

  onPageSizeChange(pageSize: number) {
    this.selectedPageSize = pageSize;
    this.getUsers();
  }

  private getUsers() {
    this.showLoading = true;

    this.usersResource.getUsers(this.filter, this.selectedPageSize).subscribe(
      users => this.users = users,
      () => this.users = [],
      () => this.showLoading = false,
    );
  }

}
