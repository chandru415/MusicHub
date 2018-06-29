import { Action } from '@ngrx/store';
import { LayoutActionTypes, LayoutActions } from '../actions/layout.actions';


export interface State {
  counter: number;
  showSidenav: boolean;
}

export const initialState: State = {
  counter: 0,
  showSidenav: false
};


export function reducer(state = initialState, action: LayoutActions): State {
  switch (action.type) {

    case LayoutActionTypes.INCREMENT: return { ...state, counter: 1 } ;
    case LayoutActionTypes.DECREMENT: return {  ...state, counter: -1};
    case LayoutActionTypes.RESET: return {  ...state, counter: 0};
    case LayoutActionTypes.CloseSidenav: return {...state, showSidenav: false};
    case LayoutActionTypes.OpenSidenav: return {...state, showSidenav: true};
    default:
      return state;
  }
}

 export const getCounter = (state: State) => state.counter;
 export const getShowSidenav = (state: State) => state.showSidenav;
