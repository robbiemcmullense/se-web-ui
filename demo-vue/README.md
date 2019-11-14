#  Vue App

This is an example app to illustrate the use of web-component Elements (`web-ui` library) in a VUE app. This file is created with vue-cli.


## Steps


### Getting started

1. Install [Yarn](https://yarnpkg.com/lang/en/docs/install/)

2. Go to project folder and install dependencies:
 ```sh
 yarn install
 ```

### If doing local development of web-component 

When building and testing new web-component in the different demo.

Link  `@se/web-ui` to current folder. 
    - At the root of the generated `/core` folder, run `yarn link` (if not already done)
    - In the folder `/demo-vue`, run `yarn link @se/web-ui` 

**PS :** Need to be done only once.

### Start the server

```sh
yarn start
```
