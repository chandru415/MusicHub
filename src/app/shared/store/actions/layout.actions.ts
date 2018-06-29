import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  LoadLayouts = '[Layout] Load Layouts',
  OpenSidenav = '[Layout] Open Sidenav',
  CloseSidenav = '[Layout] Close Sidenav',
  INCREMENT = '[Layout] INCREMENT',
  DECREMENT = ' [Layout] DECREMENT',
  RESET = ' [Layout] RESET'
}

export class Layout implements Action {
  readonly type = LayoutActionTypes.LoadLayouts;
}

export class OpenSidenav implements Action {
  readonly type = LayoutActionTypes.OpenSidenav;
}

export class CloseSidenav implements Action {
  readonly type = LayoutActionTypes.CloseSidenav;
}

export class INCREMENT implements Action {
  readonly type = LayoutActionTypes.INCREMENT;
}

export class DECREMENT implements Action {
  readonly type = LayoutActionTypes.DECREMENT;
}

export class RESET implements Action {
  readonly type = LayoutActionTypes.RESET;
}

export type LayoutActions = Layout | OpenSidenav | CloseSidenav | INCREMENT | DECREMENT | RESET;
