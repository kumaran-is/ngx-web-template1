import { State } from '@app/root-store/root-store-state.interface';
import { ActionReducer } from '@ngrx/store';

// console.log all actions
export function logStoreMetaReducer(
  reducer: ActionReducer<State>
): ActionReducer<State> {
  return (state: State, action: any): any => {
    const nextState = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
    console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
    console.log(
      `%c action payload`,
      `color: #03A9F4; font-weight: bold`,
      action.payload
    );
    console.log(
      `%c next state`,
      `color: #4CAF50; font-weight: bold`,
      nextState
    );
    console.groupEnd();
    return nextState;
  };
}
