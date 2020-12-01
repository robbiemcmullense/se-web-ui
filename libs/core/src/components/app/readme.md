# se-app



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                                                                                                                                                                                       | Type                                | Default       |
| ------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------- |
| `option`     | `option`      | Define the type of application. updating the option will impact the font used. - `technical`: For technical application (i.e. EcoStuxure), the font used will be `Nunito`. - `website` or `dcx`: For `se.com` application, the font used will be `Arial Rounded`. | `"dcx" \| "technical" \| "website"` | `'technical'` |
| `pageScroll` | `page-scroll` | Define if the content of the page should scroll with the header (usefull on website context). The header can then have the style sticky to stay in the top of the page if needed.                                                                                 | `boolean`                           | `undefined`   |
| `theme`      | `theme`       | Define the them of application. Update the `--se-` css variables of the application. - `light`: light mode of the design. - `dark`: dark mode of the application. - `auto`: Will match the OS configuration                                                       | `"auto" \| "dark" \| "light"`       | `'light'`     |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `themeChanged` |             | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
