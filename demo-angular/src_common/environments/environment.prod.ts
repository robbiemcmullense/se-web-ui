// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: true,
  version: env.npm_package_version,
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ],
  title: 'Cool Advisor',
  icon: 'se-icon-cloud',
  productDomain: 'EcoStruxure',
  logo: 'assets/schneider_LIO_Life-Green_RGB.png',
  image: 'assets/woman.jpg',
  copyright: `This application is protected by copyright law and international treaties.
    © 2017 Schneider Electric Industries SAS. All Rights Reserved.`
};
