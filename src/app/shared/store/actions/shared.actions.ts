import { Action } from '@ngrx/store';

export enum SharedActionTypes {
  LoadShareds = '[Shared] Load Shareds'
}

export class Shared implements Action {
  readonly type = SharedActionTypes.LoadShareds;
}

export type SharedActions = Shared;
