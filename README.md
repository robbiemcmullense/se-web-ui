# SE UI Web Components Library

This project is to create a common ui library that will help any developer to quickly design Schneider electric design element thanks to native [custom element](https://developers.google.com/web/fundamentals/web-components/customelements). Custom element can be used with any framework and library like pure javascript, jquery, React, Vue or angular.

Component realized in this way can be as complex as holding a full independent widget with route and such that can be configure from the outside (parameter) and work in any application already created. Like in [this example](https://auth0.com/blog/creating-web-components-with-stencil/), the developer could integrate an authentication component that could be shared with other project.

This project uses [StencilJs](https://stenciljs.com) to generate web component from the code. StencilJs generate compact web-components that that follow 100% of the web standards and takes care of the polyfills if the browser does not support them natively. StencilJs utilize [TypeScript](https://www.typescriptlang.org/) to follow best coding practices.

## list of components

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
| [ ]  | Input          | Text input. Should also handle error?                                                                                      |
| [ ]  | Select         | Dropdown that takes the selected choice                                                                                    |
| [ ]  | Select-item    | Element of a select element                                                                                                |
| [x]  | Buttons        | known as split in guideline, Should bind the buttons together, nothing more                                                |
| [x]  | Button         | standard button                                                                                                            |
| [x]  | Radio-on-off   | toggle switch that can indicate "on" or "off", "active" or "inactive", etc.                                                |
| [x]  | Switch         |                                                                                                                            |
| [x]  | Checkbox       | checkbox to check or uncheck a value                                                                                       |
| [x]  | Chip           | "badge" icon that can be used as a notification component                                                                  |
| [x]  | Icon           | Give a wrapper of icons to simplify icon manipulation                                                                      |
| [ ]  | Loading        | Create a loading element to be used with cards and widgets                                                                 |
| [ ]  | Dropdown       | menu in guideline, a button with a list                                                                                    |
| [ ]  | Dropdown-item  | menu in guideline, a button with a list                                                                                    |
| [ ]  | Progressbar    |                                                                                                                            |
| [ ]  | Card           | design of a card. Can be selected, checked, with multiple layout possible                                                  |
| [ ]  | Card-header    |                                                                                                                            |
| [ ]  | Card-content   |                                                                                                                            |
| [ ]  | Dialog         | design of the Modal, Does not include how to manipulate it (open, close)                                                   |
| [ ]  | Dialog-header  |                                                                                                                            |
| [ ]  | Dialog-content |                                                                                                                            |
| [ ]  | Dialog-footer  |                                                                                                                            |
| [x]  | sidenav        | ( fly from left. should open at the `se-app` level with css animation                                                      |
| [x]  | sidenav-item   | selection of the left element with it's content (slot)                                                                     |
| [x]  | List           | classic                                                                                                                    |
| [x]  | List-group     | to display a collapsible list groups                                                                                       |
| [x]  | List-item      | list with slot (start/center/end)                                                                                          |
| [x]  | Label          | label to be displayed next to an input field or checkbox                                                                   |
| [x]  | Link           | anchor element that redirects a user to another web page                                                                   |
| [ ]  | Tab            |                                                                                                                            |
| [ ]  | Tab-item       |                                                                                                                            |
| [ ]  | Brand          | Authentication page with a slot as content                                                                                 |
| [ ]  | About          | About page that will be used in the menu section                                                                           |
| [ ]  | Snackbar       | Design only. No info about how to show it from service yet                                                                 |
| [ ]  | Pagination     |                                                                                                                            |
| [ ]  | Datepicker     |                                                                                                                            |
| [ ]  | Tooltips       | Design only                                                                                                                |

## Test it in your app (in progress)

```shell
# With npm
npm install @se/ui-web-components

# with yarn
yarn add @se/ui-web-components
```

## Capabilities

List of design aspect of this implementation:

**CSS Variable**

Even if not accepted in most browser, it's easy to get a fallback to a regular css parameter. This works exceptionally well with Shadow DOM which give us a powerful way to customize the style for the whole application from one css variable.

```scss
.se-button {
  color: $primary;
  color: var(--primary, $primary);
}
```

Changing `--primary` in one css element, will automatically update all the primary color in the application.

## Contribution

If you want to contribute to a project and make it better, your help is very welcome. Contributing is also a great way to learn more about social coding on Github, new technologies and and their ecosystems and how to make constructive, helpful bug reports, feature requests and the noblest of all contributions: a good, clean pull request.

Each demo has been built around real case, deployment ready, senario. This insure that the component library does not impact any performance or encounter any issue regarding to leazy loading module and such.

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
- Create a new branch to work on! Branch from `develop` if it exists, else from `master`.
- Implement/fix your feature, comment your code.
- Follow the code style of the project, including indentation.
- If the project has tests run them!
- Write or adapt tests as needed.
- Add or change the documentation as needed.
- Squash your commits into a single commit with git's [interactive rebase](https://help.github.com/articles/interactive-rebase). Create a new branch if necessary.
- Push your branch to your fork on Github, the remote `origin`.
- From your fork open a pull request in the correct branch. Target the project's `develop` branch if there is one, else go for `master`!
- …
- If the maintainer requests further changes just push them to your branch. The PR will be updated automatically.
- Once the pull request is approved and merged you can pull the changes from `upstream` to your local repo and delete
  your extra branch(es).

And last but not least: Always write your commit messages in the present tense. Your commit message should describe what the commit, when applied, does to the code – not what you did to the code.
