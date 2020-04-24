# Component convention


## Using style

### Styles

The style of the app is owned by the `se-app` component. this insure that we can add new capability to the `se-app` component if needed and simplify the use of the library without having to import a an external css in the html page. 


### CSS variables

CSS variables will let any developer update programmatically control the theme of the app after the app has been built. It's important that each component created follow and use the same variable convention

- `--standard` : default: $se-ultra-light-grey-1. The default action and background of the app
- `--standard-contrast` : default: $se-black. To contrast the standard color
- `--alternative` : default: $se-white. In contrast of the background
- `--alternative-contrast` : default: $se-black. To contrast the alternative color
- `--primary` : default: $se-life-green. The main action and smart color of the app
- `--primary-contrast` : default: $se-white. To contrast the primary color
- `--critical` : default: $se-red. To alert the user on critical action
- `--critical-contrast` : default: $se-white. To contrast the critical color


to simplify the use of css variable, you can use the following `scss` mixin like:
```scss
@import "../../theme/theme-variables";
// $standard: $se-ultra-light-grey-1 !default;
// $alternative: white !default;
// $primary: $se-life-green !default;
// $critical: $se-red !default;

// $standard-contrast: $se-black !default;
// $alternative-contrast: $se-black !default;
// $primary-contrast: $se-white !default;
// $critical-contrast: $se-white !default;

:host {
  .myElement {
    @include background-color($standard, 'standard');
    @include color($standard-contrast, 'standard-contrast');
  }
}

```

The mixin used will use css variable capability on browser that support it, and default to the selected color if the browser don't support it (like in IE10/11, CSS variable is not supported so theme won't work..)

## Create a component

Any component should have a default behavior and a default state if no input are configured. The default state should be aligned with the design lab.

It's important to understand ho shadow dom works and where to use it. A rule of thumb would be: Any dead-end component like `button`, `chip`... should be `shadow: true` by default.

Any other component should be tested to insure that theme can be applied from outside without complication.

### Input

Each component should follow the same input convention as much as possible and try to reuse the same input to insure consistencies between component. 
So far element uses:
- `option`: define the option od the component like `fill` to fill the content, `rounded` for a checkbox...
- `color`: define potential color of an element linked to a css variable. prefer using the full set `primary`, `accent`, `warn`, and `error`
- `block`: to be used if the component needs to take the full space (such a `se-button` or `se-block`)


### Event
Events in components shold follow 2 rules:
- Should start with `did` to insure that it's an event that we created
- Should use a present verb that relate to the actual property it actually represent. `change` -> `didChange`. 

### Style

Each component that use the `Host` as root element should be carefull with any classes they us at this level since those classes could be modified by the external css classes. Use very specific classes if needed (.block-full-width)  

### Stories

The `.stories.ts` file in each component folder follow are used by the `storybook` library that can be started by `yarn storybook`.
Each stories should represent each properties available that could be modified by a developer and provide different use case of it.
On case of multiple linked component, only the parent component should have a `.stories.ts` file. Ex: `se-list` component will have all the stories for `se-list-group` and `se-list-item`.

### Specs

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

### End-to-End (E2E)

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

#### Screenshot

Running the `yarn e2e` will also run the screenshot compare tool.
To open the `/src-core/screenshot/compare.html` file, you have to use firefox in an insecure mode:
- Open firefox
- Type in the search bar `about:config`
- In the search config, enter `security.fileuri.strict_origin_policy`
- Change the value to `false`

**PS:** This action will set your Firefox browser to insecure mode. Make sure you only use firefox for developement and only on trusted sources. Put the security back the config to `true` otherwise.
 
**PS**: will run before every PR
