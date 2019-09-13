
# reference mobile ngx

See [DEMO](https://pages.github.schneider-electric.com/IoT/reference-mobile-ngx/)

This project was generated with [ngX-Rocket](https://github.com/ngx-rocket/generator-ngx-rocket/)
version 4.0.0

# Getting started

1. Install [Yarn](https://yarnpkg.com/lang/en/docs/install/)

2. Go to project folder and install dependencies:
 ```sh
 yarn install
 ```
3. If doing local development of web-component (building and testing new web-component in the different demo). Need to be done only once.
  1.  Link  `@se/web-ui` to current folder. 
    - At the root of the generated `/core` folder, run `yarn link`
    - In the folder `/demo-angular`, run `yarn link @se/web-ui` 
  2. Link `@se/web-ui-angular` to current folder. 
    - At the root of the generated `/angular` folder, run `yarn link`
    - In the folder `/demo-angular`, run `yarn link @se/web-ui-angular` 
4. Launch development server, and open `localhost:4200` in your browser:
 ```sh
 yarn start
 ```

# Project structure

```
dist/                        web app production build
docs/                        project docs and coding guides
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- core/                  core module (singleton services and single-use components)
|  |- shared/                shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
reports/                     test and coverage reports
proxy.conf.js                backend proxy configuration
```

# Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

Task                            | Description
--------------------------------|--------------------------------------------------------------------------------------
`yarn start`                     | Run development server on `http://localhost:4200/`
`yarn serve:sw`              | Run test server on `http://localhost:4200/` with service worker enabled
`yarn build [-- --env=prod]` | Lint code and build web app for production (with [AOT](https://angular.io/guide/aot-compiler)) in `dist/` folder
`yarn test`                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode
`yarn test:ci`               | Lint code and run unit tests once for continuous integration
`yarn e2e`                   | Run e2e tests using [Protractor](http://www.protractortest.org)
`yarn lint`                  | Lint code
`yarn translations:extract`  | Extract strings from code and templates to `src/app/translations/template.json`
`yarn docs`                  | Display project documentation

When building the application, you can specify the target environment using the additional flag `--env <name>` (do not
forget to prepend `--` to pass arguments to npm scripts).

The default build environment is `prod`.

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

## Code scaffolding

Run `yarn generate -- component <name>` to generate a new component. You can also use
`yarn generate -- directive|pipe|service|class|module`.

If you have installed [angular-cli](https://github.com/angular/angular-cli) globally with `yarn install -g @angular/cli`,
you can also use the command `ng generate` directly.

## Additional tools

Tasks are mostly based on the `angular-cli` tool. Use `ng help` to get more help or go check out the
[Angular-CLI README](https://github.com/angular/angular-cli).

# What's in the box

The app template is based on [HTML5](http://whatwg.org/html), [TypeScript](http://www.typescriptlang.org) and
[Sass](http://sass-lang.com). The translation files use the common [JSON](http://www.json.org) format.

#### Tools

Development, build and quality processes are based on [angular-cli](https://github.com/angular/angular-cli) and
[NPM scripts](https://docs.npmjs.com/misc/scripts), which includes:

- Optimized build and bundling process with [Webpack](https://webpack.github.io)
- [Development server](https://webpack.github.io/docs/webpack-dev-server.html) with backend proxy and live reload
- Cross-browser CSS with [autoprefixer](https://github.com/postcss/autoprefixer) and
  [browserslist](https://github.com/ai/browserslist)
- Asset revisioning for [better cache management](https://webpack.github.io/docs/long-term-caching.html)
- Unit tests using [Jasmine](http://jasmine.github.io) and [Karma](https://karma-runner.github.io)
- End-to-end tests using [Protractor](https://github.com/angular/protractor)
- Static code analysis: [TSLint](https://github.com/palantir/tslint), [Codelyzer](https://github.com/mgechev/codelyzer),
  [Stylelint](http://stylelint.io) and [HTMLHint](http://htmlhint.com/)
- Local knowledgebase server using [Hads](https://github.com/sinedied/hads)

#### Libraries

- [Angular](https://angular.io)
- [Ionic](http://ionicframework.com)
- [Ionic Native](https://ionicframework.com/docs/native/)
- [RxJS](http://reactivex.io/rxjs)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Lodash](https://lodash.com)

#### Coding guides

- [Angular](docs/coding-guides/angular.md)
- [TypeScript](docs/coding-guides/typescript.md)
- [Sass](docs/coding-guides/sass.md)
- [HTML](docs/coding-guides/html.md)
- [Unit tests](docs/coding-guides/unit-tests.md)
- [End-to-end tests](docs/coding-guides/e2e-tests.md)

#### Other documentation

- [I18n guide](docs/i18n.md)
- [Working behind a corporate proxy](docs/corporate-proxy.md)
- [Updating dependencies and tools](docs/updating.md)
- [Using a backend proxy for development](docs/backend-proxy.md)
- [Browser routing](docs/routing.md)

### Build your application

Update `.angular-cli` do build in the dist folder :
```json
"apps": [
    {
      "root": "src",
      "outDir": "dist",
      "baseHref": "/",
      ...
    }
]
```

Build your app:
```
yarn build
```

### working with cordova

add folowing dependenties in your `package.json` file:
```json
"dependencies": {
    "@ionic-native/core": "^4.1.0",
    "@ionic-native/splash-screen": "^4.1.0",
    "@ionic-native/status-bar": "^4.1.0",
    "@ngx-translate/core": "^9.1.1",
    "cordova-android": "^6.2.3",
    "cordova-ios": "^4.4.0",
    "cordova-plugin-console": "^1.0.5",
    "cordova-plugin-device": "^1.1.6",
    "cordova-plugin-globalization": "^1.0.7",
    "cordova-plugin-splashscreen": "^4.0.3",
    "cordova-plugin-statusbar": "^2.2.3",
    "cordova-plugin-whitelist": "^1.3.2"
},
"cordova": {
    "platforms": [
      "android",
      "ios"
    ],
    "plugins": {
      "cordova-plugin-device": {},
      "cordova-plugin-globalization": {},
      "cordova-plugin-splashscreen": {},
      "cordova-plugin-statusbar": {},
      "cordova-plugin-whitelist": {},
      "cordova-plugin-console": {},
      "ionic-plugin-keyboard": {}
    }
  }
```
