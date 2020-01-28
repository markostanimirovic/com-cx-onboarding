import { UsersResource } from './users.resource';
import { UserModel } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export class UsersFakeResource extends UsersResource {

  private fakeUsers: UserModel[] = [
    { firstName: 'Denisha', lastName: 'Farrand' },
    { firstName: 'Isa', lastName: 'Bogle' },
    { firstName: 'Flora', lastName: 'Bufford' },
    { firstName: 'Barbra', lastName: 'Knobel' },
    { firstName: 'Darron', lastName: 'Santistevan' },
    { firstName: 'Bibi', lastName: 'Bojorquez' },
    { firstName: 'Cindy', lastName: 'Krupa' },
    { firstName: 'Augustus', lastName: 'Klick' },
    { firstName: 'Taylor', lastName: 'Irwin' },
    { firstName: 'Jerold', lastName: 'Shemwell' },
  ];

  getUsers(filter: string, pageSize: number): Observable<UserModel[]> {
    const lowerCaseFilter = filter.toLowerCase().trim();

    return of(this.fakeUsers).pipe(
      map(users => users.filter(user => this.isUserMatchFilter(user, lowerCaseFilter))),
      map(users => users.splice(0, pageSize)),
      delay(500),
    );
  }

  private isUserMatchFilter(user: UserModel, lowerCaseFilter: string) {
    return `${user.firstName} ${user.lastName}`.toLowerCase().indexOf(lowerCaseFilter) > -1;
  }

}
