import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('BlockContentComponent', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-block-content></se-block-content>');
    element = await page.find('se-block-content');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with the fill-content class whenever the option is set to fill', async () => {
    element.setProperty('option', 'fill');
    await page.waitForChanges();
    expect(element.shadowRoot.querySelector('.se-block-content')).toHaveClass(
      'option-fill'
    );
  });
});

describe('BlockContentComponent with Block parents set to card option', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(
      '<se-block option="card"><se-block-content></se-block-content><se-block>'
    );
    element = await page.find('se-block-content >>> .se-block-content');
  });

  it('should have the card-content class, inherited from its block parent', async () => {
    expect(element).toHaveClass('option-card');
  });
});

describe('BlockContentComponent ability to scroll', () => {
  let page: E2EPage;
  let componentRoot: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(
      '<se-block-content max-height="200"><div style="height: 600px" /></se-block-content>'
    );
    componentRoot = await page.find('se-block-content >>> .se-block-content');
  });

  it('should have overlay only in the bottom if the block is in the default position', async () => {
    expect(componentRoot).toHaveClasses(['scrollable', 'has-overlay-bottom']);
    expect(componentRoot).not.toHaveClass('has-overlay-top');
  });

  it('should have overlay both in the bottom and in the top if the block have been scrolled', async () => {
    await page.evaluate(() => {
      document
        .querySelector('se-block-content')
        .shadowRoot.querySelector('.se-block-content-body')
        .scrollBy(0, 100);
    });

    await page.waitForChanges();

    expect(componentRoot).toHaveClasses([
      'scrollable',
      'has-overlay-bottom',
      'has-overlay-top',
    ]);
  });

  it('should have overlay only in the top if the block have been scrolled all the way down', async () => {
    await page.evaluate(() => {
      document
        .querySelector('se-block-content')
        .shadowRoot.querySelector('.se-block-content-body')
        .scrollBy(0, 700);
    });

    await page.waitForChanges();

    expect(componentRoot).toHaveClasses(['scrollable', 'has-overlay-top']);
    expect(componentRoot).not.toHaveClass('has-overlay-bottom');
  });
});
