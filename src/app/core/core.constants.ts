export class CoreConstants {
  // default headers set for Http Calls
  public static readonly HTTP_HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };

  // Client Side Validations
  // tslint:disable-next-line:max-line-length
  public static readonly EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  public static readonly PHONENO_REGEXP = `^[0-9]{10,10}$`;
  public static readonly NUMERIC_REGEXP = `'[0-9]*`;
  public static readonly ZIPCODE_REGEXP = `[0-9]{5}`;
  public static readonly NAME_REGEXP = /^[a-zA-Z\-]+$/;
}
