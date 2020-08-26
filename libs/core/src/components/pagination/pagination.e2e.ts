import { newE2EPage } from '@stencil/core/testing';

describe('PaginationComponent', () => {
  let page, hostElement, childElement;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-pagination total="10" value="3"></se-pagination>');
    hostElement = await page.find('se-pagination');
  });

  it('renders', async() => {
    expect(hostElement).toBeTruthy();
    expect(hostElement).toHaveClass('hydrated');
  });


  it('should render 10 pages and have selected page 3', async() => {
    const item = await page.find('se-pagination >>> .pagination select');
    const value = await item.getProperty('value');
    expect(value).toBe('3');
  });

  it('should have all icon not disabled', async() => {
    const pageSizeSection = await page.find('se-pagination >>> .pageSize');
    const disabledIcons = await page.find('se-pagination >>> se-icon[disabled]');
    expect(disabledIcons).toBeNull();
    expect(pageSizeSection).toBeNull();

  });

  it('should update the selected value if value changed', async() => {
    hostElement.setProperty('value', '6');
    await page.waitForChanges();
    const item = await page.find('se-pagination >>> .pagination select');
    const value = await item.getProperty('value');
    expect(value).toBe('6');
  });

  it('should update the selected value if value changed', async() => {
    hostElement.setProperty('perPage', '33');
    hostElement.setProperty('perPageList', '22;33;44;55');
    await page.waitForChanges();
    const item = await page.find('se-pagination >>> .pageSize select');
    const value = await item.getProperty('value');
    expect(value).toBe('33');
  });
});

describe('PaginationComponent Screenshots', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
  });

  it('renders without a close icon by default', async() => {
    await page.setContent('<se-pagination total="10"></se-pagination>');
    element = await page.find('se-pagination');
    expect(element).toBeTruthy();
    await page.compareScreenshot('Default Pagination', {fullPage: false});
  });

  // it('renders with a close icon when specified', async() => {
  //   await page.setContent('<se-pagination can-close="true" value="Chip can Close"></se-pagination>');
  //   element = await page.find('se-pagination');
  //   expect(element).toBeTruthy();
  //   await page.compareScreenshot('Default Chip', {fullPage: false});
  // });
});
