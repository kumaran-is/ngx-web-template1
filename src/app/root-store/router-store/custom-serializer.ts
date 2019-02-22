import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { RouterState } from '@app/root-store/router-store/router-state.interface';
import { RouterStateSerializer } from '@ngrx/router-store';

@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouterState> {
  serialize(routerStateSnapshot: RouterStateSnapshot): RouterState {
    let route = routerStateSnapshot.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams }
    } = routerStateSnapshot;
    const { params } = route;
    /* Only return an object including the URL, params and query params
    instead of the entire snapshot consists of URL, params, query paramas,
    paramMap, queryParamMap, outlet, data, routeConfig, queryParams to avoid
    performance issue
    */
    return { url, params, queryParams };
  }
}
