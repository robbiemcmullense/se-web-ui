/* eslint-disable import/prefer-default-export */

// Does not work as expected with Dash...
// import { defineCustomElements, applyPolyfills } from "@se/web-ui/loader";
// applyPolyfills().then(() => {
  // defineCustomElements(window);
// });

{{#each this}}import {{name}} from "./components/{{name}}.react";
{{/each}}

export { {{#each this}}{{name}}, {{/each}} };
