import { Action } from '@ngrx/store';
import { SharedActions, SharedActionTypes } from '../actions/shared.actions';

export interface State {
}

export const initialState: State = {
};

export function reducer(state = initialState, action: SharedActions): State {
  switch (action.type) {

    case SharedActionTypes.LoadShareds:
      return state;


    default:
      return state;
  }
}
