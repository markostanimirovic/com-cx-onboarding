import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersShellComponent } from './shared/components/users-shell/users-shell.component';
import { UserListComponent } from './containers/user-list/user-list.component';
import { UserListRxjsComponent } from './containers/user-list-rxjs/user-list-rxjs.component';
import { UserListNgrxComponent } from './containers/user-list-ngrx/user-list-ngrx.component';

const routes: Routes = [
  {
    path: '', component: UsersShellComponent, children: [
      { path: '', component: UserListComponent },
      { path: 'rxjs', component: UserListRxjsComponent },
      { path: 'ngrx', component: UserListNgrxComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
