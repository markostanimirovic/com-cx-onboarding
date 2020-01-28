import { NgModule } from '@angular/core';
import { UsersFilterComponent } from './shared/components/users-filter/users-filter.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersPaginationComponent } from './shared/components/users-pagination/users-pagination.component';
import { UsersShellComponent } from './shared/components/users-shell/users-shell.component';
import { UsersFakeResource } from './core/resources/users-fake.resource';
import { UsersResource } from './core/resources/users.resource';
import { UserListItemsComponent } from './shared/components/user-list-items/user-list-items.component';
import { UserListComponent } from './containers/user-list/user-list.component';
import { UserListRxjsComponent } from './containers/user-list-rxjs/user-list-rxjs.component';
import { UserListNgrxComponent } from './containers/user-list-ngrx/user-list-ngrx.component';

@NgModule({
  declarations: [
    UsersFilterComponent,
    UserListItemsComponent,
    UsersPaginationComponent,
    UsersShellComponent,
    UserListComponent,
    UserListRxjsComponent,
    UserListNgrxComponent,
  ],
  imports: [
    SharedModule,
    UsersRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: UsersResource, useClass: UsersFakeResource },
  ],
})
export class UsersModule {}
