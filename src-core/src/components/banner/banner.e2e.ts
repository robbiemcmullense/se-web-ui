import { newE2EPage } from '@stencil/core/testing';

describe('BannerComponent', () => {
  let page, element;

  const renderComponent = async(items = '<se-banner-item></se-banner-item>') => {
    page = await newE2EPage();
    await page.setContent(`
      <se-banner>
        ${items}
      </se-banner>
    `);
    return page;
  };

  it('renders', async() => {
    page = await renderComponent();
    element = await page.find('se-banner');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should render two indicator elements with arrow2_left and arrow2_right text', async() => {
    page = await renderComponent('<se-banner-item></se-banner-item><se-banner-item></se-banner-item>');
    element = await page.find('se-banner');
    const prevIndicator = element.shadowRoot.querySelector('.previous-indicator');
    const nextIndicator = element.shadowRoot.querySelector('.next-indicator');
    expect(prevIndicator.innerText).toEqual('arrow2_left');
    expect(nextIndicator.innerText).toEqual('arrow2_right');
  });

  it('should render two list item elements when there are two se-banner-item elements', async() => {
    page = await renderComponent('<se-banner-item></se-banner-item><se-banner-item></se-banner-item>');
    const listItems = await page.findAll('se-banner >>> li');
    expect(listItems.length).toEqual(2);
  });

  it('should set the first banner item as active by default', async() => {
    page = await renderComponent(`<se-banner-item></se-banner-item><se-banner-item></se-banner-item>`);
    await page.waitForChanges();
    const bannerItems = await page.findAll('se-banner-item');
    expect(bannerItems[0]).toHaveClass('active');
    expect(bannerItems[1]).not.toHaveClass('active');
  });
});