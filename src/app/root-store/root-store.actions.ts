import { isActionNameUnique } from '@app/root-store/action-unique';
import { Action } from '@ngrx/store';

export enum ActionTypes {
  LOG_OUT_TO_CLEAR_STORE = '[ Application ] Logout to Clear Application Store',
  LOG_OUT_TO_HOME = '[ Application ] Logout to Redirect User to Home Page'
}

isActionNameUnique(ActionTypes);
export class LogoutToClearStore implements Action {
  readonly type = ActionTypes.LOG_OUT_TO_CLEAR_STORE;
  constructor() {}
}

export class LogoutToHome implements Action {
  readonly type = ActionTypes.LOG_OUT_TO_HOME;
  constructor() {}
}

export type Union = LogoutToClearStore | LogoutToHome;
