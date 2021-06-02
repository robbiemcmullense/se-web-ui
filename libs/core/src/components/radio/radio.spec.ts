import { RadioComponent } from './radio';
import { newSpecPage } from '@stencil/core/testing';

describe('RadioComponent', () => {
  let radio;

  beforeEach(() => {
    radio = new RadioComponent();
  });

  it('should not be required by default in a form field', () => {
    expect(radio.required).toBeFalsy();
  });

  it('should set required to true when the setRequired method is called', () => {
    radio.setRequired();
    expect(radio.required).toBeTruthy();
  });

  it('should render, with an button', async () => {
    const page = await newSpecPage({
      components: [RadioComponent],
      html: `<se-radio></se-radio>`,
    });
    expect(page.root.shadowRoot.querySelector('button')).toBeTruthy();
  });

  it('should emit the didCheck event when a radio button is clicked', () => {
    const eventSpy = jest.spyOn(radio.didCheck, 'emit');
    radio.handleClick(); // user clicks on radio button
    expect(eventSpy).toHaveBeenCalled();
  });
});
