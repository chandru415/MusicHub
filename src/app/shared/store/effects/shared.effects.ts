import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { SharedActions, SharedActionTypes } from '../actions/shared.actions';

@Injectable()
export class SharedEffects {

  @Effect()
  effect$ = this.actions$.ofType(SharedActionTypes.LoadShareds);

  constructor(private actions$: Actions) {}
}
