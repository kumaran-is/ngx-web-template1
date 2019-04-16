import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard
  implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('In canActivate: ' + state.url);
    return this.isUserLoggedIn(state.url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('In canActivateChild: ' + state.url);
    return this.isUserLoggedIn(state.url);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('In canLoad: ' + route.path);
    return this.isUserLoggedIn(route.path);
  }

  private isUserLoggedIn(url: string): Promise<boolean> {
    return new Promise(resolve => {
      if (1 === 1) {
        resolve(true);
      } else {
        // Retain the attempted URL for redirection after successful login
        // this.authService.setRedirectUrl(url);
        // redirect to login page
        // this.dialogService.popupDialog('signin');
        resolve(false);
      }
    });
  }
}
