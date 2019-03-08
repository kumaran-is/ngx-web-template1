import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreConstants {
  // default headers set for Http Calls
  public readonly HTTP_HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };
}
