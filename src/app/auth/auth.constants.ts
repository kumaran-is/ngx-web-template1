import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthConstants {
  constructor() {}

  // UI field validation regular expressions
  // tslint:disable-next-line:max-line-length
  public readonly EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  public readonly PHONENO_REGEXP = `^[0-9]{10,10}$`;
  public readonly NUMERIC_REGEXP = `'[0-9]*`;
  public readonly PINCODE_REGEXP = `[0-9]{6}`;
  public readonly USERNAME_REGEXP = `'[a-zA-Z ]*`;
  public readonly VERIFICATIONCODE_REGEXP = `'[0-9]{4}`;
}
