# @se/web-ui

This project uses the [Nx](https://nx.dev) monorepo.

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## A web-component library based StencilJs

This whole monorepo relies on the [stencilJs](https://stenciljs.com/) web-component compiler to create a core library (`@se/web-ui` located in `libs/core` folder), and use some automatic bundler to create web-component wrapper for angular (`@se/web-ui-angular` located in `libs/angular` folder) and react (`@se/web-ui-react` located in `libs/react` folder).
The angular and react wrapper are updated every time the core library is being built. 

Each application in the `apps` folder relies on the the local build of the different library (core, angular or rect library) and are simple demo application to insure each build works as expected before any deployment. 

To help out on the testing, we also used [https://storybook.js.org/](https://storybook.js.org/). Each main component in the `libs/core` folder will have a `.storie.ts` file that will show possible options of those component to help testing and developers to use each components.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this repository.


    .
    ├── apps
    │  ├── angular-demo        // Angular specific app
    │  ├── angular-demo-e2e    // Cypress related to the angular-demo app
    │  ├── react-demo        
    │  ├── react-demo-e2e    
    ├── libs                  // All libs shared and deployed
    │  ├── core                // core web-ui library
    │  │  ├── core                // @se/web-ui  (StencilJs)
    │  │  ├── angular             // @se/web-ui-angular
    │  │  ├── react               // @se/web-ui-react 
    │  ├── product              // product / technical library
    │  │  ├── core                // @se/web-ui-product  (StencilJs)
    │  │  ├── angular             // @se/web-ui-product-angular
    │  │  ├── react               // @se/web-ui-product-react
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


## Develop

In the `nx.dev` ecosystem, anything run based on the same convention:
```sh
yarn <nx_script> <application|library>
```

All information about those script can be find in the `workspace.json` file.


### Demo application

A set of application test has been created to help debugging and testing each implementation. Make sure that they all have e2e and unit testing passing.

For example:
```sh
# Start a demo
yarn start react-demo               
yarn start angular-demo
yarn start web-demo      

#  Run the `apps/<demo>-e2e` project
yarn e2e react-demo-e2e
yarn e2e angular-demo-e2e
yarn e2e web-demo-e2e
```

### Develop in the core library

There is different way to develop a component in the core folder (StencilJs).
1. Run a quick env to debug/quick fix. The application test is the `core/src/index.html` file and allow fast reload capability.
    ```sh 
    yarn start core
    ```
2. Run with another demo/storybook. Open a new terminal and let the script running.
    ```sh
    yarn watch
    ```
    Then run the application
    ```sh
    yarn storybook
    yarn start react-demo
    #...
    ```

### Update the storybook

The `core` folder also have a [storybook](https://storybook.js.org/) capability to insure that each component can be tested with all the different use case and properties. This will help for development and for QA to insure consistent behavior between version.

To work with the storybook, first run `yarn build core` (or `watch` if actively developing a web-component), then run `yarn storybook`


### Test or build the libraries 

The `core`, `react` and `angular` library follows the same nx workspace convention:
```sh
# Test
yarn test core
yarn test angular
yarn test react

# Build
yarn build core
yarn build angular
yarn build react
```

The core library need to be run first since it will also automatically generate the proxy for each `react` and `angular` application to work. To have more info, take a look at `core/stencil.conf.ts` file.

All library will build in the `dist/libs` folder as everything else in the nx workspace.

**Note :** Except the core library (web-ui), libraries do not need to be built to work with the demo application, they can all be references by:
- `@se/web-ui-react` point to `libs/react`
- `@se/web-ui-angular` point to `libs/angular`

All type links are defined in `./tsconfig.json` file.

### Connect to your project locally

To connect your project with any library locally: 
1. Build each libraries (previous section),
1. Create a global link with yarn
    ```sh
    yarn link:core              // to create @se/web-ui locally
    yarn link:angular           // to create @se/web-ui-angular locally
    yarn link:react             // to create @se/web-ui-react locally
    ```
2. In your project folder:
    ```sh
    yarn link @se/web-ui @se/web-ui-angular @se/web-ui-react
    ```

**PS:** When in an angular project, you may have an issue of linking yarn locally because of references. To fix it, you need to update your `tsconfig.json` file with:
  ```js
  "paths": {
      // When using yarn link
      "@angular/*": ["../node_modules/@angular/*"],
      "@se/*": ["../node_modules/@se/*"],
      // ... any other path you may already have
    }
  ```

# Contribute

Each component in the core library are common to any SE application such as technical or customer facing app (DCX). This is important to keep in mind when contributing to the library when fixing a bug or creating a new feature.

Each creation of a new feature should follow the same process:
- Look if the issue does not exist in [github](https://github.schneider-electric.com/IoT/web-ui/issues) yet,
- Create a new [feature/bug issue](https://github.schneider-electric.com/IoT/web-ui/issues/new/choose) that will be approved by the development team or the design team to insure consistencies with patterns,
- Fork the latest and greatest `develop` branch,
- Create a feature/bugfix branch that relate to your development,
- Follow the [convention guideline](./libs/core/readme.md) to improve/fix/create the component,
- Do your duty in unit test, specs and e2e testing for each component,
- Upate/make a new story for the [stroybook](https://pages.github.schneider-electric.com/IoT/web-ui/) to help testing the different use case of the components,
- Test the component in any demo app and insure that there is no breaking changes,
- Make a PR back to the `develop`,
- Wait and see your PR being accepted and deployed to the next release!



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


## Running end-to-end tests

Run `yarn e2e my-app-e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `yarn affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `yarn dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
