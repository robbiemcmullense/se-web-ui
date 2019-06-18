import { newE2EPage } from '@stencil/core/testing';

describe('FabComponent', () => {
  let page, element, fabContainer, miniFab;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-fab></se-fab>');
    element = await page.find('se-fab');
    miniFab = await page.find('se-fab >>> div.mini-action-button');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
  });

  it('has the "pos-bottom" class on the host element because it is bottom aligned by default', async () => {
    expect(element).toHaveClasses(['pos-bottom', 'hydrated']);
    
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