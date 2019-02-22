
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { AppConfigState } from './app-config-state.interface';

// Selector functions
const selectAppConfigState: MemoizedSelector<object, AppConfigState>
  = createFeatureSelector<AppConfigState>('config');

export const selectConfig: MemoizedSelector<object, any[]> = createSelector(
  selectAppConfigState,
  (state: AppConfigState): any[] => state.config
);

export const selectError: MemoizedSelector<object, string> = createSelector(
  selectAppConfigState,
  (state: AppConfigState): string => state.error
);

export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectAppConfigState,
  (state: AppConfigState): boolean => state.isLoading
);
