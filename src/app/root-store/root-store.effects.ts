import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as rootStoreActions from '@app/root-store/root-store.actions';
import { Actions, Effect, ofType, OnInitEffects, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RootStoreEffects implements OnInitEffects {

  constructor(
    private actions$: Actions,
    private router: Router
  ) { }

  // On Logout navigate user to home screen and dispatch action to reducer to clear the store
  @Effect()
  logOutUserEffects$: Observable<Action> = this.actions$.pipe(
    ofType<rootStoreActions.LogoutToHome>(rootStoreActions.ActionTypes.LOG_OUT_TO_HOME),
    tap(() => { this.router.navigate(['home']); }),
    map(() => (new rootStoreActions.LogoutToClearStore()))
  );
/*
  ROOT_EFFECTS_INIT gets triggered before  APP_INITIALIZER complete its task.
  Here is the work around
  https://github.com/ngrx/platform/issues/931
*/
  @Effect({ dispatch: false })
  init$ = this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    tap(() => console.log('All the Root Effects has been added and registered'))
  );

  /*
  OnInitEffects gets invoked before ROOT_EFFECTS_INIT.
  */
  ngrxOnInitEffects(): Action {
    console.log('Root Effects has been Initialized');
    return { type: '[RootEffects]: Init' };
  }

}
