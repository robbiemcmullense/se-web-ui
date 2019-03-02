// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  version: '(dev)',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ],
  title: 'Angular Advisor',
  icon: 'se-icon-cloud',
  productDomain: 'EcoStruxure',
  logo: 'assets/schneider_LIO_Life-Green_RGB.png',
  image: 'assets/woman.jpg',
  copyright: `This application is protected by copyright law and international treaties.
    © 2017 Schneider Electric Industries SAS. All Rights Reserved.`
};
