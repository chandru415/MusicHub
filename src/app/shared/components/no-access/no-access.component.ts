import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as layoutAction from '../../store/actions/layout.actions';
import * as fromshared from '../../store';

@Component({
  selector: 'app-no-access',
  templateUrl: './no-access.component.html',
  styleUrls: ['./no-access.component.scss']
})
export class NoAccessComponent implements OnInit {

  count$:  Observable<number>;

  constructor(private store: Store<fromshared.SharedModuleState>) {
     this.count$ = store.pipe(select(fromshared.selectCounter));
  }

  increment() {
    this.store.dispatch(new layoutAction.INCREMENT());
  }

  decrement() {
    this.store.dispatch(new layoutAction.DECREMENT());
  }

  reset() {
    this.store.dispatch(new layoutAction.RESET());
  }

  ngOnInit() {
  }

}
