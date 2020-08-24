import { PaginationComponent } from './pagination';
import { newSpecPage } from '@stencil/core/testing';
import {ChipComponent} from "../chip/chip";

describe('PaginationComponent', () => {
  let pagination;

  beforeEach(() => {
    pagination = new PaginationComponent();
  });

  it('should create a pagination component', () => {
    expect(pagination).toBeTruthy();
  });

  it('should have a standard color by default', () => {
    expect(pagination.color).toEqual('standard');
  });

  it('should not be disabled by default', () => {
    expect(pagination.disabled).toBeFalsy();
  });

  it('should not render when there are not enough items', async() => {
    const page = await newSpecPage({
      components: [PaginationComponent],
      html: `<se-pagination totalItems="1"></se-pagination>`,
    });
    expect(page.root.shadowRoot.querySelector('.se-pagination')).toBeFalsy();
  });

  it('should render with a se-pagination class', async() => {
    const page = await newSpecPage({
      components: [PaginationComponent],
      html: `<se-pagination totalItems="100"></se-pagination>`,
    });
    expect(page.root.shadowRoot.querySelector('.se-chip')).toBeTruthy();
  });

  it('should emit the didClose event when the closeChip function is called', () => {
    const eventSpy = jest.spyOn(pagination.didClose, 'emit');
    pagination.closeChip();
    expect(eventSpy).toHaveBeenCalled();
  });
})

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
