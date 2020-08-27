import { SnackbarComponent } from './snackbar';
import { newSpecPage } from '@stencil/core/testing';

describe('SnackbarComponent', () => {
  let snackbar;

  beforeEach(() => {
    snackbar = new SnackbarComponent();
  });

  it('should build', () => {
    expect(snackbar).toBeTruthy();
  });

  it('should have a type of information by default', () => {
    expect(snackbar.type).toEqual('information');
  });

  it('should not be open by default', () => {
    expect(snackbar.open).toBe(false);
  });

  it('should not be closeable by default', () => {
    expect(snackbar.canClose).toBe(false);
  });

  it('should have a default duration of 5000 ms', () => {
    expect(snackbar.duration).toEqual(5000);
  });

  it('should render with the information class and an information circle as that is the default option and icon', async () => {
    const page = await newSpecPage({
      components: [SnackbarComponent],
      html: `<se-snackbar></se-snackbar>`,
    });
    expect(page.root.shadowRoot.querySelector('.information')).toBeTruthy();
  });

  it('should render with a span element with the close class when the canClose property is true', async () => {
    const page = await newSpecPage({
      components: [SnackbarComponent],
      html: `<se-snackbar can-close="true"></se-snackbar>`,
    });
    expect(page.root.shadowRoot.querySelector('.close')).toBeTruthy();
  });

  it('should render with a span element with the action class when there is action text', async () => {
    const page = await newSpecPage({
      components: [SnackbarComponent],
      html: `<se-snackbar action-text="text"></se-snackbar>`,
    });
    expect(page.root.shadowRoot.querySelector('.action')).toBeTruthy();
  });

  it('should call the openDidChange function when the component loads', () => {
    const eventSpy = jest.spyOn(snackbar, 'openDidChange');
    snackbar.componentDidLoad();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should not have the show-snackbar class by default on the host element, as the open property is false by default', () => {
    snackbar.openDidChange(); // snackbar is closed
    expect(snackbar.el).not.toHaveClass('show-snackbar');
  });

  it('should not have the show-snackbar class by default on the host element, as the open property is false by default', () => {
    snackbar.open = true;
    snackbar.openDidChange(); // snackbar is opened
    expect(snackbar.el).toHaveClass('show-snackbar');
  });

  it('should set the open property to false when the closeSnackbar function is called, and emit the didClose event', () => {
    snackbar.open = true;
    const eventSpy = jest.spyOn(snackbar.didClose, 'emit');
    snackbar.closeSnackbar(); // close button is clicked
    expect(snackbar.open).toBeFalsy();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should emit the actionClicked event when submitData is called', () => {
    const eventSpy = jest.spyOn(snackbar.actionClicked, 'emit');
    snackbar.submitData(); // close button is clicked
    expect(eventSpy).toHaveBeenCalled();
  });
});
