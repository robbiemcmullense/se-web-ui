import { newE2EPage } from '@stencil/core/testing';

describe('FabComponent', () => {
  let page, element, fabContainer, miniFab;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-fab></se-fab>');
    element = await page.find('se-fab');
    fabContainer = await page.find('se-fab >>> div.fab-container');
    miniFab = await page.find('se-fab >>> div.mini-action-button');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
  });

  it('has the "botom" class because it is bottom aligned by default', async () => {
    expect(fabContainer).toHaveClasses(['fab-container', 'bottom']);
    expect(miniFab).toHaveClasses(['mini-action-button']);
    expect(element).toHaveClasses(['hydrated']);
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