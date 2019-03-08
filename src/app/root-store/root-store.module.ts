import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppConfigEffects } from '@app/root-store/app-init/app-config.effects';
import {
  metaReducers,
  reducers
} from '@app/root-store/root-store-state.interface';
import { RootStoreEffects } from '@app/root-store/root-store.effects';
import { CustomSerializer } from '@app/root-store/router-store/custom-serializer';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CommonModule,
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application. GenerallyIt forRoot is register with Global level reducer to
     * manage global state like authorization, analytics etc.
     * routerReducer is out of the box reducer provided by '@ngrx/router-store'
     * to manage latest router's state in store. Router state consists of route params,
     * query params, url, outlet, routeConfig, data
     */
    StoreModule.forRoot(reducers, { metaReducers }),
    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     */
    EffectsModule.forRoot([AppConfigEffects, RootStoreEffects]),
    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging. To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox. Note that you must instrument after importing StoreModule
     * StoreDev Tool should be enabled only for non-production environments
     */
    // Connects RouterModule with StoreModule
    StoreRouterConnectingModule.forRoot({}),

    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: 'RA NGRX Demo',
          maxAge: 30 // retains last 30 states/actions
        })
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }]
})
export class RootStoreModule {}
