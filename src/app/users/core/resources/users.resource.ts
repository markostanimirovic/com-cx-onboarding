import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';

export abstract class UsersResource {

  abstract getUsers(filter: string, pageSize: number): Observable<UserModel[]>;

}
