import { Injectable } from '@angular/core';
import { ConfigService } from '@core/services/config.service';
import {
  Actions,
  Effect,
  EffectNotification,
  ofType,
  OnRunEffects
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  mergeMap,
  switchMap,
  takeUntil
} from 'rxjs/operators';
import * as appConfigActions from './app-config.actions';

@Injectable()
export class AppConfigEffects implements OnRunEffects {
  constructor(
    private configService: ConfigService,
    private actions$: Actions
  ) {}

  @Effect()
  loadAppConfigEffects$: Observable<Action> = this.actions$.pipe(
    ofType<appConfigActions.AppConfigLoadRequest>(
      appConfigActions.ActionTypes.APP_CONFIG_LOAD_REQUEST
    ),
    switchMap(() =>
      this.configService.loadAppConfig().pipe(
        /* Use aggregator pattern:  maps an array of actions and dispatches
        actions in sequence */
        mergeMap((config: any[]) => {
          return [
            new appConfigActions.AppConfigLoadSuccess(config),
            new appConfigActions.AppInitEnd()
          ];
        }),
        catchError((error: string) =>
          of(new appConfigActions.AppConfigLoadFailure(error))
        )
      )
    )
  );

  /*
  Enable or disable this effects using `ngrxOnRunEffects` life cycle hook, here
  enable the effect by dispatching the action `APP_INIT_START`, load
  app config and finally disable the effect by dispatching the action `APP_INIT_END`
  */
  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>) {
    return this.actions$.pipe(
      ofType(appConfigActions.ActionTypes.APP_INIT_START),
      exhaustMap(() =>
        resolvedEffects$.pipe(
          takeUntil(
            this.actions$.pipe(
              ofType(appConfigActions.ActionTypes.APP_INIT_END)
            )
          )
        )
      )
    );
  }
}
