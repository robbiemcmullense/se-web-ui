import Home from './views/pages/Home';
import Dashboard from './views/pages/Dashboard';
import Error404 from './views/pages/Error404';
import Icons from './views/pages/Icons';

import Navbar from './views/components/Navbar';

import Utils from './services/Utils';

// import './app/app.element.ts';
import { applyPolyfills, defineCustomElements } from '@se/web-ui/loader';

applyPolyfills().then(() => {
  return defineCustomElements(window);
});

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
  '/': Home,
  '/dashboard': Dashboard,
  '/icons': Icons,
};

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {
  // Lazy load view element:
  const header = null || document.getElementById('header_container');
  const content = null || document.getElementById('page_container');

  // Render the Header and footer of the page
  header.innerHTML = await Navbar.render();

  // Get the parsed URl from the addressbar
  const request = Utils.parseRequestURL();

  // Parse the URL and if it has an id part, change it with the string ":id"
  const parsedURL =
    (request.resource ? '/' + request.resource : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? '/' + request.verb : '');

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  const page = routes[parsedURL] ? routes[parsedURL] : Error404;
  content.innerHTML = await page.render();
  await page.after_render();
};

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
