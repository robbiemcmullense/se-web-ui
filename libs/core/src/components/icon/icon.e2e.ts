import { newE2EPage } from '@stencil/core/testing';

 describe('IconComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-icon></se-icon>');
    element = await page.find('se-icon');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders classes based on the provided size, color, and option', async() => {
    element.setProperty('size', 'small');
    element.setProperty('color', 'warn');
    await page.waitForChanges();
    expect(element).toHaveClass('icon-small');
    expect(element.shadowRoot.querySelector('.se-icon-wrapper')).toHaveClasses(['warn']);
  });
});

describe('Icon Screenshots', () => {
  it('tests multiple versions of the icons', async() => {
    const page = await newE2EPage();
    await page.setContent(`
      <se-icon option="nano" color="standard">icon</se-icon>
      <se-icon option="small" color="alternative">icon</se-icon>
      <se-icon option="medium" color="primary">icon</se-icon>
      <se-icon option="medium" color="secondary">icon</se-icon>
      <se-icon option="medium" color="success">icon</se-icon>
      <se-icon option="large" color="warning">icon</se-icon>
      <se-icon option="xlarge" color="error">icon</se-icon>`
    );
    await page.compareScreenshot('multiple icons', {fullPage: false});
  });
});
