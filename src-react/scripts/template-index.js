/* eslint-disable import/prefer-default-export */

import { defineCustomElements, applyPolyfills } from "@se/web-ui/loader";
// Add custom element definition to the windows

applyPolyfills().then(() => {
  defineCustomElements(window);
});

{{#each this}}import {{name}} from "./components/{{name}}.react";
{{/each}}

export { {{#each this}}{{name}}, {{/each}} };