# SE Custom Element Library

This project is a POC to create HTML [custom element](https://developers.google.com/web/fundamentals/web-components/customelements) that can be used with any framework like jquery, React, Vue or even no framework at all.

Component realized in this way can be as complex as holding a full independent widget with route and such that can be configure from the outside (parameter) and work in any application already created. Like in [this example](https://scotch.io/tutorials/build-a-reusable-component-with-angular-elements), the developer could integrate an authentication component that could be shared with other project.

This project uses [StencilJs](https://stenciljs.com) to generate web component from the code. Stencil generate compact web-components that are compatible across browser. Stencil authomatically takes care of the polyfills if the browser requires is and is based on web-component standard that make it future proof.

## Getting started with the demo

1. Install [NodeJs](https://nodejs.org/en/) if it's not already done.
2. Install [yarn](https://yarnpkg.com/en/) for better caching.
3. Run `yarn` to install dependencies of the project and each demo in this repository.


### Demo with NO Framework

Open `www/index.html` in your browser.

This demo shows how the app can be used without any framework.


### Demo with REACT

```
yarn demo:react
```

This demo uses a `Widget` react component as a list to loop through the `se-widget` with different content.


### Demo with VUE

```
yarn demo:vue
```

This demo shows a simple interacting with vue framework.



## Findings and limitations 

My current recommendation would be to create only pure design element. Then for each framework, add a set of services like modal and popup that cannot be generalized as web components

A list of element that can be done :

- Navigation 
- Tab bar
- Header
- Button
- Input
- Notification
- Snackbar
- Checkbox
- Radio button 
- Date picker
- Dropdown
- Authentication page

More complex elements like tabs can be done as well without issue.

**CSS Variable**

Even if not accepted in most browser, it's easy to get a fallback to a regular css parameter. This works exceptionally well with Shadow DOM which give us a powerful way to customize the style for the whole application from one css variable.

```scss
.se-button{
  color: $primary;
  color: var(--primary, $primary);
}
```
Changing `--primary` in one css element, will automatically update all the primary color in the application.


## Contribution

If you want to contribute to a project and make it better, your help is very welcome. Contributing is also a great way to learn more about social coding on Github, new technologies and and their ecosystems and how to make constructive, helpful bug reports, feature requests and the noblest of all contributions: a good, clean pull request.

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
