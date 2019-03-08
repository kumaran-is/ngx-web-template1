import { Injectable } from '@angular/core';
import { State } from '@app/root-store/root-store-state.interface';
import { Store } from '@ngrx/store';
import * as AppConfigActions from './app-config.actions';

@Injectable({
  providedIn: 'root'
})
export class AppInitStoreFacade {
  constructor(private store$: Store<State>) {}

  public loadAppConfig(): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(`initializeApp:: inside promise`);
      this.store$.dispatch(new AppConfigActions.AppInitStart());
      this.store$.dispatch(new AppConfigActions.AppConfigLoadRequest());
      resolve(true);
    });
  }
}

export function initApplication(
  appInitStoreFacade: AppInitStoreFacade
): () => Promise<any> {
  return (): Promise<any> => appInitStoreFacade.loadAppConfig();
}
