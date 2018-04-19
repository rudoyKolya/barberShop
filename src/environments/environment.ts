// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDA6pr-2QQZZMYA8cV4ojkcNSW4iXMC518',
    authDomain: 'barberangularproject.firebaseapp.com',
    databaseURL: 'https://barberangularproject.firebaseio.com',
    projectId: 'barberangularproject',
    storageBucket: 'barberangularproject.appspot.com',
    messagingSenderId: '909616477992'
  }
};
