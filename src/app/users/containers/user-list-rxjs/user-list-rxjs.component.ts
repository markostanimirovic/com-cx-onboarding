import { Component, OnInit } from '@angular/core';
import { UserListRxjsFacade } from './user-list-rxjs.facade';

@Component({
  selector: 'app-user-list-rxjs',
  templateUrl: './user-list-rxjs.component.html',
  viewProviders: [UserListRxjsFacade],
})
export class UserListRxjsComponent implements OnInit {

  viewModel$ = this.facade.viewModel$;

  constructor(private facade: UserListRxjsFacade) {}

  ngOnInit() {}

  onFilterChange(filter: string) {
    this.facade.updateFilter(filter);
  }

  onPageSizeChange(pageSize: number) {
    this.facade.updateSelectedPageSize(pageSize);
  }

}
