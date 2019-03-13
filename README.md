# SE WEB-UI library

The purpose of this project is to create a common UI Library that will assist any developer in quickly developing Schneider Electric design elements thanks to native [custom elements](https://developers.google.com/web/fundamentals/web-components/customelements). Custom elements can be used with any coding framework including pure JavaScript, jQuery, React, Vue or Angular.

Components developed in this way can be as complex as holding a full independent widget with routes, and thus they can be configured from the outside (parameter) and work in any already created application. Like in [this example](https://auth0.com/blog/creating-web-components-with-stencil/), the developer could integrate an authentication component that could be shared with other projects.

This project uses [StencilJS](https://stenciljs.com) to generate web components from the source code. StencilJS generates compact web-components that follow 100% of the web standards, taking care of the polyfills if the browser does not support them natively. StencilJS utilizes [TypeScript](https://www.typescriptlang.org/) to follow best coding practices.


You can test all of these components with this [Online Template Editor](https://pages.github.schneider-electric.com/IoT/web-template-editor/).

## List of Components

| Done | Component      | Info                                                                                                                       |
| ---- | -------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [x]  | App            | define a wrapper for the design/style/css variable and insure that the content of the app takes the full page              |
| [x]  | NavBar         | Called Tab bar in the guideline. Use or regular `nav` tag for nab item                                                     |
| [x]  | Header         | Header of an se app. does not include navigation.                                                                          |
| [x]  | container      | page container. Can be used to add a margin for better widget alignment. Default will make the use of the full flex space. |
| [x]  | divider        | used to add a line to divide element between each others.                                                                  |
| [x]  | widget         | Body of a widget. the widget itself should be defined as flex                                                              |
| [x]  | widget-header  | Top part of the widget.                                                                                                    |
| [x]  | widget-content | Middle par of the widget. should take the full space (flex:1)                                                              |
| [x]  | widget-footer  | Bottom part of a widget.                                                                                                   |
| [x]  | Checkbox       | checkbox to check or uncheck a value                                                                                       |
| [ ]  | Input          | Text input. Should also handle error?                                                                                      |
| [ ]  | Select         | Dropdown that takes the selected choice                                                                                    |
| [ ]  | Select-item    | Element of a select element                                                                                                |
| [x]  | Form-Field     | container for a submittable form.  Accepts checkboxes, input fields, and select dropdowns                                  |
| [x]  | Buttons        | known as split in guideline, Should bind the buttons together, nothing more                                                |
| [x]  | Button         | standard button                                                                                                            |
| [x]  | Radio-on-off   | toggle switch with text that can indicate "on" or "off", "active" or "inactive", etc.                                      |
| [x]  | Switch         | toggle switch without text that can indicate "on" or "off", "active" or "inactive", etc.                                   |
| [x]  | Chip           | "badge" icon that can be used as a notification component                                                                  |
| [x]  | Icon           | Give a wrapper of icons to simplify icon manipulation                                                                      |
| [x]  | Loading        | Create a loading element to be used with cards and widgets                                                                 |
| [x]  | Dropdown       | menu in guideline, a button with a list                                                                                    |
| [ ]  | Progressbar    |                                                                                                                            |
| [ ]  | Card           | design of a card. Can be selected, checked, with multiple layout possible                                                  |
| [ ]  | Card-header    |                                                                                                                            |
| [ ]  | Card-content   |                                                                                                                            |
| [x]  | Dialog         | design of the Modal, Does not include how to manipulate it (open, close)                                                   |
| [x]  | Dialog-header  |                                                                                                                            |
| [x]  | Dialog-content |                                                                                                                            |
| [x]  | Dialog-footer  |                                                                                                                            |
| [x]  | sidenav        | ( fly from left. should open at the `se-app` level with css animation                                                      |
| [x]  | sidenav-item   | selection of the left element with it's content (slot)                                                                     |
| [x]  | List           | classic                                                                                                                    |
| [x]  | List-group     | to display a collapsible list groups                                                                                       |
| [x]  | List-item      | list with slot (start/center/end)                                                                                          |
| [x]  | Label          | label to be displayed next to an input field or checkbox                                                                   |
| [x]  | Link           | anchor element that redirects a user to another web page                                                                   |
| [ ]  | Tab            |                                                                                                                            |
| [ ]  | Tab-item       |                                                                                                                            |
| [x]  | Brand          | Authentication page with a slot as content                                                                                 |
| [x]  | About          | About page that will be used in the menu section                                                                           |
| [x]  | Snackbar       | Design only. No info about how to show it from service yet                                                                 |
| [ ]  | Pagination     |                                                                                                                            |
| [ ]  | Datepicker     |                                                                                                                            |
| [ ]  | Tooltips       | Design only                                                                                                                |

## Testing in your App (in progress)

```shell
# With npm
npm install @se/web-ui

# with yarn
yarn add @se/web-ui
```

## Capabilities

List of design aspect of this implementation:

**CSS Variable**

Even if not accepted in most browser, it's easy to get a fallback to a regular css parameter. This works exceptionally well with Shadow DOM, which give us a powerful way to customize the style for the whole application from one css variable.

```scss
.se-button {
  color: $primary;
  color: var(--primary, $primary);
}
```

Changing `--primary` in one css element, will automatically update all the primary color in the application.

## Contribution

If you want to contribute to a project and make it better, your help is very welcome. Contributing is also a great way to learn more about social coding on Github, new technologies and and their ecosystems and how to make constructive, helpful bug reports, feature requests and the noblest of all contributions: a good, clean pull request.

Each demo has been built around real case, deployment ready, scenarios. This insures that the component library does not impact any performance or encountesr any issues regarding lazy loading modules and such.

### Set up your env

1. Install [NodeJs](https://nodejs.org/en/) if it's not already done.
2. Install [yarn](https://yarnpkg.com/en/) for better caching. `npm` can be used as well of course.
3. Run `yarn` to install dependencies of the project and each demo in this repository.

**Demo with NO Framework**

Open `www/index.html` in your browser.
This demo shows how the app can be used without any framework.

**Demo with REACT**

The React project built based React reference app.

```
yarn demo:react
```

This demo uses a `Widget` react component as a list to loop through the `se-widget` with different content.

**Demo with VUE**

The Vue project built based Vue reference app.

```
yarn demo:vue
```

This demo shows a simple interaction with vue framework.

**Demo with Angular**

Created using [Angular](https://angular.io) framework based on the generated architecture with [EcoStruxure App DSK](https://seappsdk.dev.struxurewarecloud.com) and trying to match with current implementation of the web-framework

```
yarn demo:vue
```

This demo shows a simple interaction with vue framework.

### How to make a clean pull request

Look for a project's contribution instructions. If there are any, follow them.

- Create a personal fork of the project on Github.
- Clone the fork on your local machine. Your remote repo on Github is called `origin`.
- Add the original repository as a remote called `upstream`.
- If you created your fork a while ago be sure to pull upstream changes into your local repository.
- Create a new branch to work on! Branch from `develop` if it exists, otherwise branch from `master`.
- Implement/fix your feature, comment your code.
- Follow the code style of the project, including indentation.
- If the project has tests run them!  (See the section "Writing Unit Tests for your Components" to learn more information.)
- Write or adapt tests as needed.
- Add or change the documentation as needed.
- Squash your commits into a single commit with git's [interactive rebase](https://help.github.com/articles/interactive-rebase). Create a new branch if necessary.
- Push your branch to your fork on Github, the remote `origin`.
- From your fork open a pull request in the correct branch. Target the project's `develop` branch if there is one, otherwise target the `master` branch!
- If the maintainer requests further changes just push them to your branch. The PR will be updated automatically.
- Once the pull request is approved and merged you can pull the changes from `upstream` to your local repo and delete
  your extra branch(es).

And last but not least: Always write your commit messages in the present tense. Your commit message should describe what the commit, when applied, does to the code – not what you did to the code.

### Writing Unit Tests for your Components

The purpose of unit tests are to validate individual portions of your source code to ensure that it is functioning correctly.  You will want to test the instantiation of your component, as well as its default property settings and its methods.

**Example Unit Test**

```typescript
import { MyComponent } from './my-component';

it('should build MyComponent', () => {
  const component = new MyComponent();
  expect(component).toBeTruthy();
});
```

To run the unit tests in your project, simply run the following command:

```shell
yarn test
```

This will run all `.spec` files in your project.  If there are specific tests that you don't want to run, add these files to the `testPathIgnorePatterns` parameter in the `stencil.config.ts` file.

### Writing End-to-End (E2E) Tests for your Components

The purpose of e2e tests are to validate the "full" end-to-end functionality of the various web components to ensure its proper rendering an behavior.  You will want to validate a component's inner HTML, as well as any attributes/classes added to the host element in its component's `hostData` function.

**Example E2E Test**

```typescript
import { newE2EPage } from '@stencil/core/testing';

it('renders', async () => {
  const page = await newE2EPage();
  await page.setContent('<my-component></my-component>');
  
  const element = await page.find('my-component');
  expect(element).toHaveClass('hydrated');
});
```

StencilJS adds the "hydrated" class to each generated component, so it is a good measure to ensure your component is rendering propertly.  To run the e2e tests in your project, simply run the following command:

```shell
yarn e2e
```

This will run all `.e2e.ts` files in your project.  If there are specific tests that you don't want to run, add these files to the `testPathIgnorePatterns` parameter in the `stencil.config.ts` file.
