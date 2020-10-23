import { newE2EPage } from '@stencil/core/testing';

describe('IconFileComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-icon-file value="TEXT"></se-icon-file>');
    const element = await page.find('se-icon-file');
    expect(element).toHaveClass('hydrated');
  });
});

describe('Icon Screenshots', () => {
  it('renders 2 icon file properly', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <se-icon-file value="PDF"></se-icon-file>
      <se-icon-file value="DOCX"></se-icon-file>
    `);
    await page.compareScreenshot('Custom icon file ', {
      fullPage: false,
    });
  });
});
