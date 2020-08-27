import { PaginationComponent } from './pagination';
import { newSpecPage } from '@stencil/core/testing';

describe('PaginationComponent', () => {
  let pagination;

  beforeEach(() => {
    pagination = new PaginationComponent();
  });

  it('should create a pagination component', () => {
    expect(pagination).toBeTruthy();
  });

  it('should not be disabled by default', () => {
    expect(pagination.disabled).toBeFalsy();
  });

  it('should not render when there are not enough items', async () => {
    const page = await newSpecPage({
      components: [PaginationComponent],
      html: `<se-pagination total="1"></se-pagination>`,
    });
    expect(page.root.shadowRoot.querySelector('.se-pagination')).toBeFalsy();
  });

  it('should render with a se-pagination class', async () => {
    const page = await newSpecPage({
      components: [PaginationComponent],
      html: `<se-pagination total="100"></se-pagination>`,
    });
    expect(page.root.shadowRoot.querySelector('.pagination')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.pageSize')).toBeFalsy();
  });

  it('should render the page size select with 3 option and the navigation with 100 option in it', async () => {
    const page = await newSpecPage({
      components: [PaginationComponent],
      html: `<se-pagination total="100" per-page-list="10;20;30"></se-pagination>`,
    });
    expect(
      page.root.shadowRoot.querySelectorAll('.pageSize select option').length
    ).toBe(3);
    expect(
      page.root.shadowRoot.querySelectorAll('.pagination select option').length
    ).toBe(100);
  });
});

// assumes first page
// assumes default perpage
// interprets perpage
// interprets total page number
// interprets current page
// interprets showFirstAndLast + with markup true/false
// doesn't break when no perpage is provided
// throws error when wrong perpage format is provided
// emits event on page change
// emits event on perpage change
// hides message by default
// sets message by parameter
// sets message as innerhtml
// parses symbols in message
