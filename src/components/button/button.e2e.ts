import { newE2EPage } from '@stencil/core/testing';

describe('ButtonComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-button></se-button>');
    element = await page.find('se-button');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with a flat mode and an icon', async() => {
    const renderedHTML = '<button data-mode="flat"><se-icon class="hydrated small">close</se-icon><slot></slot></button>'
    await page.$eval('se-button', (elm: any) => {
      elm.icon = 'close';
    });
    await page.waitForChanges();
    expect(element).toHaveClass('hasIcon');
    expect(element.shadowRoot).toEqualHtml(renderedHTML);
  });

  it('renders with an active class when selected', async() => {
    await element.click();
    expect(element).toHaveClass('active');
  });
});

describe('Button with Preset Text', () => {
  it('renders with a flat mode and text equal to My Button', async() => {
    const page = await newE2EPage();
    const renderedHTML = '<button data-mode="flat"><slot></slot></button>'
    await page.setContent('<se-button>My Button</se-button>');

    const element = await page.find('se-button');
    expect(element.innerText).toEqual('My Button');
    expect(element.shadowRoot).toEqualHtml(renderedHTML);
  });
});