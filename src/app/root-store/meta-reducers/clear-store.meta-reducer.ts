import { State } from '@app/root-store/root-store-state.interface';
import { ActionTypes, Union } from '@app/root-store/root-store.actions';
import { ActionReducer } from '@ngrx/store';


// reset meta-reduce :  clear the store after the LOG_OUT action.
// If the action type is LOG_OUT we will return an undefined state and
// therefore all of the reducers will return the initial value as they are supposed to.
export function clearStoreMetaReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: Union): any => {
    if ( action.type === ActionTypes.LOG_OUT_TO_CLEAR_STORE ) {
      state = undefined;
    }
    const nextState = reducer(state, action);
    return nextState;
  };
}
