/* eslint-disable import/prefer-default-export */

import { defineCustomElements as defineSeComponent } from "@se/web-ui/loader";
// Add custom element definition to the windows
defineSeComponent(window);

import App from "./components/App.react";
import Header from "./components/Header.react";

export { Header, App };
