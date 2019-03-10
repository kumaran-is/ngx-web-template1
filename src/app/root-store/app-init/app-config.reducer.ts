import { AppConfigState, initialState } from './app-config-state.interface';
import { ActionTypes, Union } from './app-config.actions';

export function appConfigReducer(
  state: AppConfigState = initialState,
  action: Union
): AppConfigState {
  switch (action.type) {
    case ActionTypes.APP_INIT_START:
      return {
        ...state,
        isLoading: true,
        config: [],
        error: null
      };

    case ActionTypes.APP_CONFIG_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        config: action.payload,
        error: null
      };

    case ActionTypes.APP_CONFIG_LOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        config: [],
        error: action.payload
      };

    default:
      return state;
  }
}
