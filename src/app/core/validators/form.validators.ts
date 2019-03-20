import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CoreConstants } from '@core/core.constants';
// import { UserService } from '@core/services/user.service';
import { Subscription } from 'rxjs';

export class FormValidator {
  constructor() {}
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

  static emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.pristine) {
        return null;
      }
      if (control.value && !CoreConstants.EMAIL_REGEXP.test(control.value)) {
        return { emailValid: true };
      } else {
        return null;
      }
    };
  }

  static fieldMatchValidator(otherControlName: string): ValidatorFn {
    return (currentControl: AbstractControl): { [key: string]: any } => {
      const otherControl: AbstractControl = currentControl.root.get(
        otherControlName
      );
      if (currentControl.pristine || otherControl.pristine) {
        return null;
      }
      if (otherControl) {
        const subscription: Subscription = otherControl.valueChanges.subscribe(
          () => {
            currentControl.updateValueAndValidity();
            subscription.unsubscribe();
          }
        );
      }
      if (
        currentControl.value &&
        otherControl.value &&
        currentControl.value !== otherControl.value
      ) {
        return { match: true };
      } else {
        return null;
      }
    };
  }
}
