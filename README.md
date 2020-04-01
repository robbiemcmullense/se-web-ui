# @se/web-ui

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this repository.

    .
    ├── apps
    │  ├── angular-demo        // Angular specific app
    │  ├── angular-demo-e2e    // Cypress related to the angular-demo app
    │  ├── react-demo        
    │  ├── react-demo-e2e    
    ├── libs                  // All libs shared and deployed
    │  ├── base                // core web-ui library
    │  │  ├── core                // @se/web-ui  (StencilJs)
    │  │  ├── angular             // @se/web-ui-angular
    │  │  ├── react               // @se/web-ui-react 
    │  ├── widget              // core web-ui library
    │  │  ├── core                // @se/web-ui-widget  (StencilJs)
    │  │  ├── angular             // @se/web-ui-widget-angular
    │  │  ├── react               // @se/web-ui-widget-react
    │  ├── utils
    ├── package.json          // Centralized package.json
    ├── LICENSE
    ├── workspace.json        // Defined all nx apps and libraries
    └── README.md

**PS :** To start, the StencilJs (`core`) library needs to be compile to generate the codes in `react` and `angular`. 

## Environment setup

1. Configure your [proxy configuration](https://pages.github.schneider-electric.com/iot/design-system/framework/framework-integration/setup) as needed
2. Install [yarn](https://yarnpkg.com/). This facilitate caching and workspace.
3. Run `yarn install` from the root directory.


## Demo application

Run any demo application: 
```
yarn <nx_script> <application>
```

For example:
```
# React demo
yarn start react-demo               
yarn start react-demo-e2e

#  Angular demo
yarn start angular-demo
yarn start angular-demo-e2e

# Vanilla JS (pure web-component with no framework)
yarn start web-demo      
yarn start web-demo-e2e

# Base Core library (web-component with stencilJs)
yarn start core
yarn build core

# Storybook (In the core folder)
yarn Storybook
```

**PS :** All library and app depends on the core lib being built first. make sure you run `yarn build core` before starting to run any apps or storybook

## Storybook

```
yarn nx run core:storybook
```

To build the storybook
```
yarn nx run core:build-storybook
```

## Core library (web-ui components)

Since the core folder is based on StencilJs which is for now not supported by `nx` workspace, we need to run the different commands based on the core script. 

```
yarn core <Script>
```

To develope on the web-component library, you then simply need to run:
```
yarn core watch
```
Any change on the web-component will automatically update the angular and react code that will automatically relaunch the demo app you are working on.


## Test or build the libraries 

The `react` an `angular` library follows the same nx workspace convention:
```sh
# Test
yarn test angular
yarn test react

# Build
yarn build angular
yarn build react
```

To build and test the StencilJs library (core folder), you need to run:

```sh
# Test
yarn core test

# Build
yarn core build
```

All library will build in the `dist/libs` folder as everything else in the nx workspace.

**Note :** Except the core library (web-ui), libraries do not need to be built to work with the demo application. 

## Connect to your project locally

To connect your project with any library locally: 
1. Build each libraries (previous section),
1. Create a global link with yarn
    ```
    yarn link:core              // to create @se/web-ui locally
    yarn link:angular           // to create @se/web-ui-angular locally
    yarn link:react             // to create @se/web-ui-react locally
    ```
2. In your project folder:
    ```
    yarn link @se/web-ui @se/web-ui-angular @se/web-ui-react
    ```


# Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:


- [React](https://reactjs.org)
  - `yarn add -D @nrwl/react`
- Web (no framework frontends)
  - `yarn add -D @nrwl/web`
- [Angular](https://angular.io)
  - `yarn add -D @nrwl/angular`
- [Nest](https://nestjs.com)
  - `yarn add -D @nrwl/nest`
- [Express](https://expressjs.com)
  - `yarn add -D @nrwl/express`
- [Node](https://nodejs.org)
  - `yarn add -D @nrwl/node`

## Generate an application

Run `yarn nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `yarn nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@se/mylib`.

## Development server

Run `yarn nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `yarn nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `yarn nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `yarn nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `yarn nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `yarn ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `yarn nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `yarn nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
