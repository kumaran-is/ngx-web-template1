import { Inject, Injectable } from '@angular/core';
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
import { IDialog } from '@auth/models/dialog.interface';
import { AuthService } from '@auth/services/auth.service';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard
  implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthService,
    // service is injected via interface to overcome cyclic dependency
    @Inject('IDialog') private dialogService: IDialog
  ) {}

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

  /* private isUserLoggedIn(url: string): Promise<boolean> {
    return new Promise(resolve => {
      if (this.authService.isLoggedIn()) {
        console.log('>>>> User is already isLoggedIn <<<<<');
        resolve(true);
      } else {
        // Retain the attempted URL for redirection after successful login
        this.authService.setRedirectUrl(url);
        console.log('>>>> Redirect URL <<<<< ', url);
        // show login dialog
        return this.dialogService.popupDialog('login');
      }
    });
  } */

  private isUserLoggedIn(url: string): Observable<boolean> {
    return this.authService.currentUser$.pipe(
      take(1),
      map(user => {
        console.log('user: ', user);
        return !!user;
      }),
      tap((loggedIn: boolean) => {
        if (loggedIn) {
          console.log('>>>> User is already isLoggedIn <<<<<');
          return true;
        } else {
          // Retain the attempted URL for redirection after successful login
          this.authService.setRedirectUrl(url);
          console.log('>>>> Redirect URL <<<<< ', url);
          // show login dialog
          return this.dialogService.popupDialog('login');
        }
      })
    );
  }
}
