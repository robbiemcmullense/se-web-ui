import { newE2EPage } from '@stencil/core/testing';

describe('FabComponent', () => {
  let page, element, miniFab;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-fab></se-fab>');
    element = await page.find('se-fab');
    miniFab = await page.find('se-fab >>> div.mini-action-button');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('has the "pos-bottom" class on the host element because it is bottom aligned by default', async () => {
    expect(element.shadowRoot.querySelector('.se-fab')).toHaveClass('pos-bottom');
  });

  it('renders a div element with the "mini-action-button" class because it has the "speeddial" option by default', async() => {
    expect(miniFab).toHaveClass('mini-action-button');
  });

  it('adds and remove a "show" class to a div element with class mini-action-button when toggled', async () => {
    await element.callMethod('toggleAction');
    await page.waitForChanges();
    expect(miniFab).toHaveClasses(['mini-action-button','show']);
    await element.callMethod('toggleAction');
    await page.waitForChanges();
    expect(miniFab).not.toHaveClass('show');
  });
});

describe('FabComponent Click Event', () => {
  let page, element, button;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-fab><se-button option="minifab" caption="my caption"></se-button></se-fab>');
    element = await page.find('se-fab');
    button = await page.find('se-fab se-button >>> button');
  });

  it('emits the se-button didClick event when clicking on a button in the fab dropdown', async () => {
    const eventSpy = await page.spyOnEvent('didClick');
    await element.callMethod('toggleAction');
    await page.waitForChanges();
    await button.click();
    expect(eventSpy).toHaveReceivedEvent();
    expect(eventSpy).toHaveReceivedEventDetail({value: 'my caption'});
  });
});

describe('Fab Screenshots', () => {
  let page;

  beforeEach(async() => {
    page = await newE2EPage();
  });

  it('should render in speeddial option by default', async() => {
    await page.setContent(`
      <se-fab icon="action_share">
        <se-button option='minifab' caption="New Task" icon="notebook_paper"></se-button>
        <se-button option='minifab' caption="New User" icon="task"></se-button>
      </se-fab>
    `);
    await page.compareScreenshot('Speeddial Fab', {fullPage: false});
  });

  it('should render in backtotop option', async() => {
    await page.setContent('<se-fab option="backtotop"></se-fab>');
    await page.compareScreenshot('Back to Top Fab', {fullPage: false});
  });
});