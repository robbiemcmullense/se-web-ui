import { FormFieldComponent } from '../form-field/form-field';
import { FiltrationComponent } from './filtration';

describe('FiltrationComponent', () => {
  let filtration;
  let searchFormField;

  beforeEach(() => {
    filtration = new FiltrationComponent();
    searchFormField = new FormFieldComponent();
  });

  it('should build', () => {
    expect(filtration).toBeTruthy();
  });
  it('should declare a property called item', () => {
    expect(filtration.item).toBeUndefined();
  });
  it('should have default properties', () => {
    expect(filtration.labelHint).toBeTruthy();
    expect(filtration.labelHint).toEqual('enter text');
    expect(filtration.collapsed === true).toBeTruthy();
    expect(filtration.shadow === false).toBeTruthy();
    expect(filtration.labelViewMore === 'View More').toBeTruthy();
    expect(filtration.labelViewLess === 'View Less').toBeTruthy();
    expect(filtration.labelSelectAll === 'Select All').toBeTruthy();
    expect(filtration.minItems === 5).toBeTruthy();
    expect(filtration.maxItems === 10).toBeTruthy();
  });
  it('should call setSearch when the user enters text to search', async () => {
    const event = { detail: { selected: true } };
    const eventSpy = jest.spyOn(searchFormField, 'handleEvent');
    searchFormField.inputSelectListenerHandler(event); // user changes value in input field
    expect(filtration.selectedValue).not.toBeNull();
    expect(eventSpy).toHaveBeenCalledTimes(1);
  });
});
