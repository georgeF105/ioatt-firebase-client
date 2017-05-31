// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBuVD5OXCSQiHmhB_MENyY-en2YVrm9mbc',
    authDomain: 'angle-control.firebaseapp.com',
    databaseURL: 'https://angle-control.firebaseio.com',
    projectId: 'angle-control',
    storageBucket: 'angle-control.appspot.com',
    messagingSenderId: '991417158966'
  }
};
