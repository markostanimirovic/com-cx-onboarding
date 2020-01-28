import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-users-filter',
  templateUrl: './users-filter.component.html',
})
export class UsersFilterComponent implements OnInit, OnDestroy {

  private destroy = new Subject();
  filterControl = new FormControl();

  @Input()
  set filter(filter: string) {
    this.filterControl.setValue(filter, { onlySelf: true, emitEvent: false });
  }

  @Output() filterChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.filterControl.valueChanges.pipe(
      debounceTime(500),
      takeUntil(this.destroy),
    ).subscribe(filter => this.filterChange.next(filter));
  }

  ngOnDestroy() {
    this.destroy.next();
  }

}
