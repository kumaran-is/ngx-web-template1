import { Params } from '@angular/router';
import { AppState } from '@app/root-store/root-store-state.interface';
import { RouterState } from '@app/root-store/router-store/router-state.interface';
import { RouterReducerState } from '@ngrx/router-store';
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

export const selectRouterReducerState: MemoizedSelector<
  object,
  RouterReducerState<RouterState>
> = createFeatureSelector<AppState, RouterReducerState<RouterState>>('router');

export const selectRouteParameters: MemoizedSelector<
  object,
  Params
> = createSelector(
  selectRouterReducerState,
  (routerReducerState: RouterReducerState<RouterState>): Params =>
    routerReducerState.state.params
);

export const selectRouteQueryParams: MemoizedSelector<
  object,
  Params
> = createSelector(
  selectRouterReducerState,
  (routerReducerState: RouterReducerState<RouterState>): Params =>
    routerReducerState.state.queryParams
);

export const selectRouteURL: MemoizedSelector<object, string> = createSelector(
  selectRouterReducerState,
  (routerReducerState: RouterReducerState<RouterState>): string =>
    routerReducerState.state.url
);
