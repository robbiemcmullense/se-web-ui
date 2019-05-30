import { newE2EPage } from '@stencil/core/testing';

 describe('IconLifeisonComponent', () => {
  it('renders with an inherited class to indicate an inherited color', async() => {
    const page = await newE2EPage();
    await page.setContent('<se-icon-lifeison></se-icon-lifeison>');
    const element = await page.find('se-icon-lifeison >>> div');
    expect(element).toHaveClass('inherited');
  });
});
