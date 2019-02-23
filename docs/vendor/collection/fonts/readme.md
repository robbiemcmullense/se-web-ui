# Schneider-Electric Fonts 

This small library let you import all SE Fonts to create an application.

- Ecostruxure application => Nunito font
- se.com application => Arial rounded font (Cannot be use unless you have a licence)

## Overview

As defined by the se design lab, every application should for now use a special font. Any use of other fonts need to be validated first.


## Getting started with Node / NPM

**Connect NPM to SE Nexus**

If it's not already done, you have to configure npm to connect to the SE nexus that will let you access to all library we developed.

```
npm config set email dst-appservices@schneider-electric.com
npm config set _auth YXBwLnNlcnZpY2VzLmRldi51c2VyOjhMOHNxeGtDI1RKUGRuaEw=
npm login --registry="https://nexus.tools.struxurewarecloud.com/repository/npm-internal/ --scope=@se"
```

**Add dependencies**

At the root of your project run:

```shell
# With NPM
npm install @se/fonts

# With Yarn
yarn add @se/fonts
```

**Using the library**

Including the style, will also automatically configure the `body` element with the SE font. We also provide a `.se-font` class to let you configure other element in your application if needed.

- Using `SCSS`
  **Add references in your own `theme.scss` file:**

  ```scss
  $se-icon-folder: "~@se/fonts/fonts";
  @import "~@se/fonts/scss/styles.scss";

  ```
  
- Using `CSS`
  **Add references in your own `styles.css` file:**

  You can download the latest `css/` folder and `fonts/` folder from this repository, then reference is in your HTML. 

  ```html
  <head>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
  </head>
  ```

There is for now no C


## Getting started with CDN

Our group does not support CDN for now. To use the font in your app, you will have to use google CDN:

```html
<link href="https://fonts.googleapis.com/css?family=Nunito:300,400" rel="stylesheet">
<style>
    body, .se-font {
        font-family: 'Nunito', sans-serif;
    }
</style>
```