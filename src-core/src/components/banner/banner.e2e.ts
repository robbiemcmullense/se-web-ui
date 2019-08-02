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

  it('should render two anchor elements, one with the previous indicator class and one with the next indicator class', async() => {
    page = await renderComponent();
    element = await page.find('se-banner');
    let anchorElements = element.shadowRoot.querySelectorAll('a');
    expect(anchorElements.length).toEqual(2);
    expect(anchorElements[0]).toHaveClass('previous-indicator');
    expect(anchorElements[1]).toHaveClass('next-indicator');
  });

  //research rendering of li components, then revisit this test
  xit('should render two list item elements when there are two se-banner-item elements', async() => {
    page = await renderComponent('<se-banner-item></se-banner-item><se-banner-item></se-banner-item>');
    const listItems = await page.findAll('se-banner >>> li');
    expect(listItems.length).toEqual(2);
  });
});