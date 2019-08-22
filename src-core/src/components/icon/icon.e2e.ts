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
    await page.$eval('se-icon', (elm: any) => {
      elm.size = 'small';
      elm.color = 'warn';
    });
    await page.waitForChanges();	
    expect(element.shadowRoot.querySelector('.se-icon-wrapper')).toHaveClasses(['icon-small', 'warn', 'icon-undefined']);	
  });
});

describe('Icon Screenshots', () => {
  it('tests multiple versions of the icons', async() => {
    let page = await newE2EPage();
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