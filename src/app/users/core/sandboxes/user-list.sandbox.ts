import { Injectable } from '@angular/core';
import { UsersResource } from '../resources/users.resource';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserListSandbox {

  constructor(private usersResource: UsersResource) {}

  getUsers(filter: string, pageSize: number): Observable<UserModel[]> {
    return this.usersResource.getUsers(filter, pageSize);
  }

}
