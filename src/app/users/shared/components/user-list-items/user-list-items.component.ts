import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-list-items',
  templateUrl: './user-list-items.component.html',
})
export class UserListItemsComponent implements OnInit {

  @Input() users: UserModel[];
  @Input() showLoading: boolean;

  constructor() {}

  ngOnInit() {}

}
