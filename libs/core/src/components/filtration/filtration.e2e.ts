import { newE2EPage } from '@stencil/core/testing';

describe('filtration', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage();
  });
  it('renders', async () => {
    await page.setContent('<se-filtration></se-filtration>');
    const element = await page.find('se-filtration');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('show "view more" when list-item more than min-items = 5 + 2', async () => {
    await page.setContent(
      `<se-filtration>
        <se-list-item item="test"></se-list-item>
        <se-list-item item="test"></se-list-item>
        <se-list-item item="test"></se-list-item>
        <se-list-item item="test"></se-list-item>
        <se-list-item item="test"></se-list-item>
        <se-list-item item="test"></se-list-item>
        <se-list-item item="test"></se-list-item>
        <se-list-item item="test"></se-list-item>
      </se-filtration>`
    );
    const element = await page.find('se-filtration >>> .view-more');
    expect(element).toBeTruthy();
  });

  // TODO : This should work!!
  // it('show "view more" when list-item more than min-items = 2 + 2', async () => {
  //   await page.setContent(
  //     `<se-filtration min-items="2">
  //       <se-list-item item="test"></se-list-item>
  //       <se-list-item item="test"></se-list-item>
  //       <se-list-item item="test"></se-list-item>
  //       <se-list-item item="test"></se-list-item>
  //     </se-filtration>`
  //   );
  //   const element = await page.find('se-filtration >>> .view-more');
  //   expect(element).toBeTruthy();
  // });

  it('show "view more" when list-item more than min-items + 2 and se-list-item are not a direct child of se-filtration', async () => {
    await page.setContent(
      `<se-filtration>
        <div><se-list-item item="test"></se-list-item></div>
        <div><se-list-item item="test"></se-list-item></div>
        <div><se-list-item item="test"></se-list-item></div>
        <div><se-list-item item="test"></se-list-item></div>
        <div><se-list-item item="test"></se-list-item></div>
        <div><se-list-item item="test"></se-list-item></div>
        <div><se-list-item item="test"></se-list-item></div>
        <div><se-list-item item="test"></se-list-item></div>
      </se-filtration>`
    );
    const element = await page.find('se-filtration >>> .view-more');
    expect(element).toBeTruthy();
  });

  it('do not show "view more" when list-item is less than min-items + 2', async () => {
    await page.setContent(
      `<se-filtration min-items="2">
        <se-list-item item="test"></se-list-item>
        <se-list-item item="test"></se-list-item>
        <se-list-item item="test"></se-list-item>
      </se-filtration>`
    );
    const element = await page.find('se-filtration >>> .view-more');
    expect(element).toBeFalsy();
  });

  // Should not reder the content if collapse icon is clicked

  // click on select-all, event should be emited

  // search box has a value, select all should display the number of item in the list

  // should not display "view-more" if there is a dropdown with more se-list-item than min-items + 2

  // should
});
