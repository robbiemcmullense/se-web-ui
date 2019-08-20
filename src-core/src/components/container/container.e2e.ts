import { newE2EPage } from '@stencil/core/testing';

describe('ContainerComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-container></se-container>');
    element = await page.find('se-container');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
  });

  it('renders the "fill-content", "flex-display", "relative", and "row-dir" classes based on default properties', async() => {		
    expect(element).toHaveClasses(['fill-content', 'flex-display', 'relative', 'hydrated', 'row-dir']);	
  });

  it('renders the "block-display" and "absolute" classes when the component has these properties for option and position', async() => {	
    await page.$eval('se-container', (elm: any) => {
      elm.display = 'block';
      elm.position = 'absolute';
    });
    await page.waitForChanges();	
    expect(element).toHaveClass('block-display');
    expect(element).toHaveClass('absolute');
  });

  it('renders the "column-dir" and "alternative" classes when the component has these properties for direction and color', async() => {	
    await page.$eval('se-container', (elm: any) => {
      elm.direction = 'column';
      elm.color = 'alternative';
    });
    await page.waitForChanges();	
    expect(element).toHaveClass('alternative');
    expect(element).toHaveClass('column-dir');
  });

  it('renders a div element with class wrapper-center when the option is set to centered', async() => {
    await page.$eval('se-container', (elm: any) => {
      elm.option = 'centered';
    });
    await page.waitForChanges();	
    let divElm = await page.find('se-container >>> div.wrapper-center');
    expect(element).toHaveClass('centered-content');
    expect(divElm).toBeTruthy();
  });
});

describe('Container Screenshots', () => {
  let page;

  beforeEach(async() => {
    page = await newE2EPage();
  });
  
  it('should render a block in its default fill option with no spacing', async() => {
    await page.setContent(`
      <se-container>
        <se-block>
          My Basic Fill Container
        </se-block>
      </se-container>
    `);
    await page.compareScreenshot('Fill Container', {fullPage: false});
  });

  it('should render a block in widget option with spacing', async() => {
    await page.setContent(`
      <se-container option="widget">
        <se-block>
          My Widget Container
        </se-block>
      </se-container>
    `);
    await page.compareScreenshot('Widget Container', {fullPage: false});
  });

  it('should render a block in card option', async() => {
    await page.setContent(`
      <se-container option="card">
        <se-block>
          My Card Container
        </se-block>
      </se-container>
    `);
    await page.compareScreenshot('Card Container', {fullPage: false});
  });

  it('should render a block in centered option', async() => {
    await page.setContent(`
      <se-container option="centered">
        <se-block>
          My Centered Container
        </se-block>
      </se-container>
    `);
    await page.compareScreenshot('Centered Container', {fullPage: false});
  });
});
