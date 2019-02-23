# Schneider-Electric icons library

This small library let you import all SE icons as font to make them easier to manipulate in your application like:

- Increase/decrease size
- Add color
- Add css animation ...

## Overview

The list of the icons can be find here.

Only the `SASS` and `CSS` version is currently available. If `LESS` support is needed, please create an Issue or a pull request if you want to contribute.

## Getting started

### Use it on your desktop

Schneider-electric icons can be used on the desktop. Add icons to your design mockups, presentations, and elsewhere.
We’ve tried to make it super easy with our new ligature-based font files. And for the times where you need more, we’ve included polished vector SVG versions of each icon separately.

**What to download**
Our Desktop-focused download contains the following directories and files:

| Folders & files      | What They Are                                                                   |
| -------------------- | ------------------------------------------------------------------------------- |
| `/fonts/se-icon.ttf` | Font file compatible with every operating system                                |
| `/svg/`              | Individual optimized .svg vector files for each icon in SE (separated by style) |

You can use SE Font Icons by typing the name of your icon as a plain text, then changing the familly font to "se-icon". You can read more about it in the following post: [fontawesome ligature](https://fontawesome.com/how-to-use/on-the-desktop/referencing-icons/using-ligatures).

**Not sure how to install fonts?**
Check out these [PC](https://www.fontspring.com/support/installing/how-do-i-install-fonts-on-my-windows-pc) and [Mac](https://www.fontspring.com/support/installing/how-do-i-install-fonts-on-my-mac) help articles for more details and guidance.


### Use it as a web developer

To make this library available in your `npm` project:

**Connect NPM to SE Nexus**
If it's not already done, you have to configure npm to connect to the SE nexus that will let you access to all library we developed.

```
npm config set email dst-appservices@schneider-electric.com
npm config set _auth YXBwLnNlcnZpY2VzLmRldi51c2VyOjhMOHNxeGtDI1RKUGRuaEw=
npm login --registry="https://nexus.tools.struxurewarecloud.com/repository/npm-internal/ --scope=@se"
```

**PS:** `scope=@se` mean that only repository starting with `@se` will be downloaded from our nexus. any other repos will be downloaded from `npmjs.com`.

**Install dependencies:**

```
npm install --save @se/icons
```

- Using `SCSS`
  **Add references in your own `theme.scss` file:**

  ```scss
  $se-icon-folder: "~@se/icons/fonts";
  @import "~@se/icons/scss/styles.scss";

  ```
  **Customize your own classes**

  access material variable with Sass mixins:

  ```scss
  .my-face {
    @include se-icon('man');
  }
  # or
  .my-face:before {
    content: se-icons-content('man');
  }
  ```

- Using `CSS`
  **Add references in your own `styles.css` file:**

  You can download the latest `css/` folder and `fonts/` folder from this repository, then reference is in your HTML. 

  ```html
  <head>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
  </head>
  ```

## Usage

As class (will be deprecated soon, prefer using ligature):
```html
<i class="se-icon-name"></i>
```
As ligature:
```html
<i class="se-icon">name</i>
```
**PS :** If you only use ligature in your app, add `$se-generate-font-class: "false"` in your `them-variables.scss` file. This will save up to 70Kb of unused classes.

## Working with Ionic

If you want to use any of the icon in the the tab bar of ionic, you will need to add ionic class extension. To reduce the size of the css font bundle, we decided to remove it by default. When using the scss form, you can simply re-activate it by updating your `theme-variables.scss` file:

```scss
$se-generate-ionic-font-class: "true";
```
## Making Request

As as user of the SE icon library, you can create issue to request different things. Please follow the template so we can organize the work better.

* [Request a new icon](https://github.schneider-electric.com/IoT/se-icons/issues/new?title=Icon%20request:%20icon-name&template=icon-request.md)
* [Request a new feature](https://github.schneider-electric.com/IoT/se-icons/issues/new??title=Feature%20request:feature-name&template=feature-request.md)
* [Submit a bug report](https://github.schneider-electric.com/IoT/se-icons/issues/new?template=bug-report.md)

## Contribution

Please read through our [contributing guidelines](./CONTRIBUTION.md). Included are directions for opening issues and get started with a building the library locally.

