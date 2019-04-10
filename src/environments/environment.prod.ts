export const environment = {
  production: true,
  webAPIUrl: 'https://mydomain.com/api/v1',
  // version is automatically updated during build from package.json
  version: '0.0.5',
  configFilePath: 'assets/config/prod.config.json',
  envName: 'PROD',
  firestore: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
