/**
 * Each reducer is like a table in a database. Here `BasicState` is a feature-level
 * state interface and is just a map of keys to inner state types. It composes
 * 2 inner state `MessageState` and `SwitchState`
 */
export interface AppConfigState {
  config?: any[] | [];
  isLoading: boolean;
  error?: string | null;
}

export const initialState: AppConfigState = {
  config: [],
  isLoading: false,
  error: null
};
