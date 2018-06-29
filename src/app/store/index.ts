import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  combineReducers
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromRouter from '@ngrx/router-store';
// import * as fromShared from '../shared/store';

// export const reducercombine = combineReducers(fromShared.reducers);

export interface State {
  router: fromRouter.RouterReducerState;
  // layout:  fromShared.SharedModuleState;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  // layout: reducercombine
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];

// logger,


export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

