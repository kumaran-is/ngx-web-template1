// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  webAPIUrl: 'http://localhost:8000/api/v1',
  // version is automatically updated during build from package.json
  version: '0.0.13',
  configFilePath: 'assets/config/stage.config.json',
  envName: 'stage',
  firestore: {
    apiKey: 'AIzaSyDiRtJO3vLAn_I7tVdZMjddeh8Dyz-_vmY',
    authDomain: 'halls-diary.firebaseapp.com',
    databaseURL: 'https://halls-diary.firebaseio.com',
    projectId: 'halls-diary',
    storageBucket: 'halls-diary.appspot.com',
    messagingSenderId: '670696523764'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
