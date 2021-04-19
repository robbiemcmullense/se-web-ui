import { newE2EPage } from '@stencil/core/testing';

describe('ToooltipComponent', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-tooltip></se-tooltip>');
    element = await page.find('se-tooltip');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('adds a "show" class to a div element with class tooltip when open is set to true', async () => {
    await element.callMethod('open');
    await page.waitForChanges();
    const tooltip = await page.find('se-tooltip >>> div.tooltip');
    expect(tooltip).toHaveClasses(['tooltip', 'show']);
  });

  it('removes the "show" class to the div element with class tooltip when open is set to false', async () => {
    await element.callMethod('close');
    const tooltip = await page.find('se-tooltip >>> div.tooltip');
    expect(tooltip).not.toHaveClass('show');
  });
});

describe('Tooltip Screenshots', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('renders a tooltip below the button', async () => {
    await page.setContent(`
      <se-tooltip action="click">
        <se-button option="raised" color="primary" slot="tooltip">My Example Tooltip</se-button>
        My Example Tooltip
      </se-tooltip>
    `);
    element = await page.find('se-tooltip');
    await element.callMethod('open');
    await page.compareScreenshot('tooltip bottom positioned', {
      fullPage: false,
    });
  });

  it('renders a tooltip to the right the button, with a header, body, and footer', async () => {
    await page.setContent(`
      <div style="position: relative; top: 50px;">
        <se-tooltip action="click" position="right">
          <se-button option="raised" color="primary" slot="tooltip">My Example Tooltip</se-button>
          <se-tooltip-header>Tooltip Header</se-tooltip-header>
          <se-tooltip-content>This is my tooltip body.  It can have a detailed description.</se-tooltip-content>
          <se-tooltip-footer>
            <se-button option="outline" color="alternative">Dismiss</se-button>
          </se-tooltip-footer>
        </se-tootlip>
      </div>
    `);
    element = await page.find('se-tooltip');
    await element.callMethod('open');
    await page.compareScreenshot(
      'tooltip right positioned with header, body, and footer',
      { fullPage: false }
    );
  });
});
