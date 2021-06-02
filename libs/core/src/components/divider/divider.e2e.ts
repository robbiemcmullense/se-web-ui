import { newE2EPage } from '@stencil/core/testing';

describe('DividerComponent', () => {
  let page, hostElement, dividerElement;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-divider></se-divider>');
    hostElement = await page.find('se-divider');
    dividerElement = await page.find('se-divider >>> div');
  });

  it('renders', async () => {
    expect(hostElement).toBeTruthy();
    expect(hostElement).toHaveClass('hydrated');
  });

  it('should render horizontal and standard classes on the divider div element to reflect the default option and color', async () => {
    expect(dividerElement).toHaveClasses(['horizontal', 'standard']);
  });

  it('should change the classes to vertical and alternative when those properties are set', async () => {
    hostElement.setProperty('option', 'vertical');
    hostElement.setProperty('color', 'alternative');
    await page.waitForChanges();
    expect(dividerElement).toHaveClasses(['vertical', 'alternative']);
  });
});

describe('Divider Screenshots', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('renders the divider in horizontal mode by default', async () => {
    await page.setContent(`
      <se-container direction="column">
        <div style="width: 100%; height: 100%;>Top Content</div>
        <se-divider></se-divider>
        <div style="width: 100%; height: 100%;">Bottom Content</div>
      </se-container>
    `);
    await page.compareScreenshot('Horizontal Divider', { fullPage: false });
  });

  it('renders the divider in vertical mode', async () => {
    await page.setContent(`
      <se-container>
        <div style="width: 100%; height: 100%;">Left Content</div>
        <se-divider option="vertical"></se-divider>
        <div style="width: 100%; height: 100%;">Right Content</div>
      </se-container>
    `);
    await page.compareScreenshot('Vertical Divider', { fullPage: false });
  });
});
