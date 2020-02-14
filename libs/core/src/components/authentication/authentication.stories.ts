import { storiesOf } from '@storybook/html';
import { text, select } from '@storybook/addon-knobs';

const domainOption = ['ecostruxure', 'MySchneider'];
const copyrightText = 'This application is protected by copyright law and international treaties. © 2020 Schneider Electric Industries SAS. All Rights Reserved.';

storiesOf('Authentication', module)
  .add('Demo', () => {
    const title = text('app-title', "My app Advisor")
    const version = text('version', "1.2.3")
    const domain = select('domain', domainOption, 'ecostruxure')
    const copyright = text('copyright', copyrightText)

    return `
      <se-authentication
        app-title="${title}"
        version="${version}"
        domain="${domain}"
        copyright="${copyright}"
        image-url="url(https://www.nozominetworks.com/wp-content/uploads/2019/01/Nozomi-Networks-and-Schneider-Electric-Partner-Secure-Industrial-Infrastructure.jpg)">
        <form [formGroup]="loginForm" (submit)="login($event)" id="loginForm" fxFlex>
          <se-form-field label="Username" required="true" option="stacked">
            <input type="text">
          </se-form-field>
          <se-form-field label="Password" required="true" option="stacked">
            <input type="password">
          </se-form-field>
          <se-button option="login" type="submit">Login</se-button>
        </form>  
      </se-authentication>
    `;
  })