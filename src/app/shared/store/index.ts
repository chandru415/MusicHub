import * as fromLayout from '../store/reducers/layout.reducer';

import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    combineReducers
  } from '@ngrx/store';

  export interface SharedModuleState {
    layout: fromLayout.State;
  }

  export const reducers: ActionReducerMap<SharedModuleState> = {
    layout: fromLayout.reducer
  };

  export const reducercombine = combineReducers(reducers);
  export const getSharedModuleState = createFeatureSelector<SharedModuleState>('shared');
  export const selectLayoutState = createSelector( getSharedModuleState, (state: SharedModuleState) => state.layout);
  export const selectCounter = createSelector(selectLayoutState, fromLayout.getCounter);
  export const getShowSidenav = createSelector(selectLayoutState, fromLayout.getShowSidenav);
