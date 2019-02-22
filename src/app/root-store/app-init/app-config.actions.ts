import { Action } from '@ngrx/store';
import { isActionNameUnique } from './../action-unique';

export enum ActionTypes {
  APP_INIT_START = '[Application Config] Start App Initializer',
  APP_INIT_END = '[Application Config] End App Initializer',
  APP_CONFIG_LOAD_REQUEST = '[Application Config] Load APP Config Request',
  APP_CONFIG_LOAD_SUCCESS = '[Application Config] Load APP Config Success',
  APP_CONFIG_LOAD_FAILURE = '[Application Config] Load APP Config Failure'
}

// To ensure NgRX actions have unique names across the application.
// This prevents any duplicate actions being dispatched.
isActionNameUnique(ActionTypes);

export class AppInitStart implements Action {
  readonly type = ActionTypes.APP_INIT_START;
  constructor() {}
}

export class AppInitEnd implements Action {
  readonly type = ActionTypes.APP_INIT_END;
  constructor() {}
}

export class AppConfigLoadRequest implements Action {
  readonly type = ActionTypes.APP_CONFIG_LOAD_REQUEST;
  constructor() {}
}

export class AppConfigLoadSuccess implements Action {
  readonly type = ActionTypes.APP_CONFIG_LOAD_SUCCESS;
  constructor(public payload: any[]) {}
}

export class AppConfigLoadFailure implements Action {
  readonly type = ActionTypes.APP_CONFIG_LOAD_FAILURE;
  constructor(public payload: string) {}
}

export type Union
= AppInitStart
| AppInitEnd
| AppConfigLoadRequest
| AppConfigLoadSuccess
| AppConfigLoadFailure;
