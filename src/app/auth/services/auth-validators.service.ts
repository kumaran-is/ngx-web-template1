import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { AuthConstants } from '@app/auth/auth.constants';
import { AuthService } from '@app/auth/services/auth.service';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthValidatorsService {
  constructor(
    private authConstants: AuthConstants,
    private authService: AuthService
  ) {}

  public matchingPasswordValidator(
    passwordKey: string,
    confirmPasswordKey: string
  ) {
    return (formGroup: FormGroup): void => {
      const passwordInput = formGroup.get(passwordKey);
      const confirmPasswordInput = formGroup.get(confirmPasswordKey);
      if (passwordInput.value !== confirmPasswordInput.value) {
        return confirmPasswordInput.setErrors({ mismatchedPasswords: true });
      } else {
        return confirmPasswordInput.setErrors(null);
      }
    };
  }

  /* public usernameTakenValidator(control: AbstractControl)
: Promise<{[key: string]: boolean} | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'kumaran.isk@gmail.com') {
          resolve({'usernameTaken': true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
} */

  /* public usernameTakenValidator(emailKey: string) {
    return (formGroup: FormGroup): Promise<void> => {
      const emailInput = formGroup.get(emailKey);
      console.log('emailInput >>>>> ', emailInput);
      if(emailInput) {
        return this.authService.isUserAccountTaken(emailInput.value)
        .then((isUserNameTaken) => {
          if (isUserNameTaken) {
            return emailInput.setErrors({usernameTaken: true});
          } else {
            return emailInput.setErrors(null);
          }
        });
      }

    };
  }  */

  /*
  static emailTakenAsyncValidator(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return userService.isEmailUnique(control.value)
      .pipe(
        map(res => res ? null : { emailTaken: true } )
      );
    };
  }
  */

  public usernameTakenValidator(
    control: AbstractControl
  ): Observable<{ [key: string]: boolean } | null> {
    return this.checkUser(control, 'email');
  }

  private checkUser(
    control: AbstractControl,
    source: string
  ): Observable<{ [key: string]: boolean } | null> {
    return new Observable((observable: any) => {
      control.valueChanges
        .pipe(
          map((userName: string) => userName && userName.trim()),
          filter((userName: string) => userName.length > 6),
          debounceTime(500),
          distinctUntilChanged(),
          switchMap(
            (userName: string): Observable<boolean> => {
              return this.authService.isUserAccountTaken(userName, source);
            }
          )
        )
        .subscribe(
          response => {
            response
              ? observable.next({ usernameTaken: true })
              : observable.next(null);
            observable.complete();
          },
          error => {
            observable.complete();
            console.error('Error while validating User Name taken', error);
          }
        );
    });
  }
}
