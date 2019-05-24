export const environment = {
  production: true,
  webAPIUrl: 'https://mydomain.com/api/v1',
  // version is automatically updated during build from package.json
  version: '0.0.10',
  configFilePath: 'assets/config/prod.config.json',
  envName: 'prod',
  firestore: {
    apiKey: 'AIzaSyDiRtJO3vLAn_I7tVdZMjddeh8Dyz-_vmY',
    authDomain: 'halls-diary.firebaseapp.com',
    databaseURL: 'https://halls-diary.firebaseio.com',
    projectId: 'halls-diary',
    storageBucket: 'halls-diary.appspot.com',
    messagingSenderId: '670696523764'
  }
};
