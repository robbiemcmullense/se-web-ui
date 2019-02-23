# Component convention


## Using style

### Styles

The style of the app is owned by the `se-app` component. this insure that we can add new capability to the `se-app` component if needed and simplify the use of the library without having to import a an external css in the html page. 


### CSS variables

CSS variables will let any developer update programmatically control the theme of the app after the app has been built. It's important that each component created follow and use the same variable convention

- `--primary` : default: $primary, the main color of the app (green)
- `--primary-contrast` : default: $primary-contrast, the contrast color of the main color (white), if the `--primary` color is to light, then a darker color need to be used a contrast.
- `--accent` : default: $accent, the accent color of the app (blue)
- `--accent-contrast` : default: $accent-contrast, contrast color of the `--accent` color
- `--warn` : default: $warn, the warning color (orange)
- `--warn-contrast` : default: $warn-contrast, contrast color of the `--accent` color
- `--error` : default: $error, the error color (red)
- `--error-contrast` : default: $error-contrast, contrast color of the `--accent` color


to simplify the use of css variable, you can use the following `scss` mixin like:
```scss
@import "../../theme/theme-variables";

:host {
  .myElement {
    @include background-color-property($primary, 'primary');
    @include color-property($primary-contrast, 'primary-contrast');
  }
}

```

The mixin used will use css variable capability on browser that support it, and default to the selected color if the browser don't support it (like in IE10/11, CSS variable is not supported so theme won't work..)

## Create a component

Any component should have a default behavior and a default state if no input are configured. The default state should be aligned with the design lab.

It's important to understand ho shadow dom works and where to use it. A rule of thumb would be: Any dead-end component like `button`, `chip`... should be `shadow: true` by default.

Any other component should be tested to insure that theme can be applied from outside without complication.

### Input

Each component should follow the same input convention as much as possible. So far element uses:
- `mode`: define the option od the component like `fill` to fill the content, `rounded` for a checkbox...
- `color`: define potential color of an element linked to a css variable. prefer using the full set `primary`, `accent`, `warn`, and `error`



### Event
TODO: Define common best practice of events

### Style

Each element should be under `:host{}` to insure that only the 

### Specs
TODO: Define common best practice of creating a `.spec.ts` file


### E2E
TODO: Define common best practice of creating a `.e2e.ts` file
