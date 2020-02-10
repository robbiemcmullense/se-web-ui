import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';


storiesOf('Header', module)
  .add('Simple', () => {

    const title = text('app-title', "My cool advisor")
    const project = text('project', "Project awesome")

    return `
      <se-header app-title="${title}" project="${project}"></se-header>
    `;
  })
  .add('Header with side menu', () => {
    const title = text('app-title', "My cool advisor");
    const project = text('project', "Project awesome")

    return `
      <se-header app-title="${title}" project="${project}">
      <se-sidemenu id="main-sidemenu" link="www.se.com/en/partners">
          <se-sidemenu-item item="About" id="side-about">
            <se-about app-title="Test Advisor" version="1.2.3"
              image-url="url('https://schneider-electric.box.com/shared/static/7hp8f04wj8lclpxn8jonti616lvim3zl.jpg')">
            </se-about>
          </se-sidemenu-item>
          </se-sidemenu>
          </se-header>
      `;
      // <se-sidemenu-item id="sidemenu-item" item="Close" id="side-close"></se-sidemenu-item>
  });
