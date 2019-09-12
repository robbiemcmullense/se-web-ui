import { newE2EPage } from '@stencil/core/testing';

describe('BlockComponent', () => {
  let page, hostElement, blockElement;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-block></se-block>');
    hostElement = await page.find('se-block');
    blockElement = await page.find('se-block >>> .block-body');
  });

  it('renders', async() => {
    expect(hostElement).toBeTruthy();
    expect(hostElement).toHaveClass('hydrated');
  });

  it('renders with flex class due to no specified display', async() => {
    expect(hostElement).toHaveClass('flex');
  });

  it('should have the basic and alternative classes since that is the default option and color', async() => {
    expect(blockElement).toHaveClass('basic');
    expect(blockElement).toHaveClass('alternative');
  });

  

  it('renders a standard class when the color property is set to standard', async() => {
    hostElement.setProperty('color', 'standard');
    await page.waitForChanges();
    expect(blockElement).toHaveClass('standard');
  });

  it('renders a loading element when the loading property is true', async() => {
    hostElement.setProperty('loading', true);
    await page.waitForChanges();

    const loader = await page.find('se-block >>> se-loading')
    expect(loader).toBeTruthy();
  });
});

describe('BlockComponent with Container parents set to widget option', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-container option="widget"><se-block></se-block><se-container>');
    element = await page.find('se-block >>> .block-body');
  });

  it('should have the widget class, inherited from its container parent', async() => {
    expect(element).toHaveClass('widget');
  });
});

describe('BlockComponent with Container parents set to card option', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-container option="card"><se-block></se-block><se-container>');
    element = await page.find('se-block >>> .block-body');
  });

  it('should have the card class, inherited from its container parent', async() => {
    expect(element).toHaveClass('card');
  });
});

describe('Block Screenshots', () => {
  let page;

  beforeEach(async() => {
    page = await newE2EPage();
  });

  it('renders in basic mode with a header, content and footer', async() => {
    await page.setContent(`<se-block>
    <se-block-header>Basic Header</se-block-header>
    <se-block-content>Basic Content</se-block-content>
    <se-block-footer>Basic Footer</se-block-footer>
    </se-block>`); 
    await page.compareScreenshot('Basic Block', {fullPage: false});
  });

  it('renders in widget mode with a header, content and footer', async() => {
    await page.setContent(`<se-block option="widget">
    <se-block-header>Widget Header</se-block-header>
    <se-block-content>Widget Content</se-block-content>
    <se-block-footer>Widget Footer</se-block-footer>
    </se-block>`); 
    await page.compareScreenshot('Widget Block', {fullPage: false});
  });

  it('renders in widget mode with a header, content and footer', async() => {
    await page.setContent(`<se-block option="card">
    <se-block-header>Card Header</se-block-header>
    <se-block-content>Card Content</se-block-content>
    <se-block-footer>Card Footer</se-block-footer>
    </se-block>`); 
    await page.compareScreenshot('Card Block', {fullPage: false});
  });
});