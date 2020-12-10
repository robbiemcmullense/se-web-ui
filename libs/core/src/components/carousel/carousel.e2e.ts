import { newE2EPage } from '@stencil/core/testing';

describe('se-carousel', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('renders', async () => {
    await page.setContent('<se-carousel></se-carousel>');
    const element = await page.find('se-carousel');
    expect(element).toHaveClass('hydrated');
  });

  // it('Should have an arrow right since more item than with width of the se-carousel', async () => {
  //   await page.setContent(`
  //     <se-carousel style="width: 400px">
  //       <se-carousel-item>1</se-carousel-item>
  //       <se-carousel-item>2</se-carousel-item>
  //       <se-carousel-item>3</se-carousel-item>
  //     </se-carousel>`);
  //   const element = await page.find('se-carousel >>> se-icon.right');
  //   expect(element).toBeTruthy();
  // });

  // it('Should not display arrow right if less item than width', async () => {
  //   await page.setContent(`
  //     <se-carousel style="width: 800px">
  //       <se-carousel-item>1</se-carousel-item>
  //       <se-carousel-item>2</se-carousel-item>
  //     </se-carousel>`);
  //   const element = await page.find('se-carousel >>> se-icon.right');
  //   expect(element).toBeFalsy();
  // });

  // it('Should click an arrow right and scroll the content. arrow left should display', async () => {
  //   page = await newE2EPage();

  //   await page.setContent(`
  //     <se-carousel style="width: 400px">
  //       <se-carousel-item>1</se-carousel-item>
  //       <se-carousel-item>2</se-carousel-item>
  //       <se-carousel-item>3</se-carousel-item>
  //     </se-carousel>`);
  //   const rightArrow = await page.find('se-carousel >>> se-icon.right');
  //   await rightArrow.click();
  //   const element = await page.find('se-carousel >>> se-icon.left');
  //   expect(element).toBeTruthy();
  // });
});
