import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users-pagination',
  templateUrl: './users-pagination.component.html',
})
export class UsersPaginationComponent implements OnInit {

  @Input() selectedPageSize: number;
  @Input() pageSizes: number[];

  @Output() pageSizeChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onPageSizeChange(pageSize: number) {
    this.pageSizeChange.emit(pageSize);
  }

}
