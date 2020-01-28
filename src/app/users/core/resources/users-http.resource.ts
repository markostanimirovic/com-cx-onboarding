import { UsersResource } from './users.resource';
import { Observable, of } from 'rxjs';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersHttpResource extends UsersResource {

  constructor(private http: HttpClient) {
    super();
  }

  getUsers(filter: string, pageSize: number): Observable<UserModel[]> {
    // fetch users from the server return this.http.get(...);
    return of([]);
  }

}
