import { ChipComponent } from './chip';
import { newSpecPage } from '@stencil/core/testing';

describe('ChipComponent', () => {
  let chip;

  beforeEach(() => {
    chip = new ChipComponent();
  });

  it('should create a chip component', () => {
    expect(chip).toBeTruthy();
  });

  it('should have a standard color by default', () => {
    expect(chip.color).toEqual('standard');
  });

  it('should not be selected by default', () => {
    expect(chip.selected).toBeFalsy();
  });

  it('should not be disabled by default', () => {
    expect(chip.disabled).toBeFalsy();
  });

  it('should not be in block mode', () => {
    expect(chip.block).toBeUndefined();
  });

  it('should have an undefined value initially', () => {
    expect(chip.value).toBeUndefined();
  });

  it('should not have the ability to be closed by default', () => {
    expect(chip.canClose).toBeFalsy();
  });

  it('should render with a se-chip class', async () => {
    const page = await newSpecPage({
      components: [ChipComponent],
      html: `<se-chip value="my chip value"></se-chip>`,
    });
    expect(page.root.shadowRoot.querySelector('.se-chip')).toBeTruthy();
  });

  it('should render with a close icon when canClose is set to true', async () => {
    const page = await newSpecPage({
      components: [ChipComponent],
      html: `<se-chip value="my chip value" can-close="true"></se-chip>`,
    });
    const icon = page.root.shadowRoot.querySelector('se-icon');
    expect(icon).toBeTruthy();
  });

  it('should render with a selected class when the selected property is true', async () => {
    const page = await newSpecPage({
      components: [ChipComponent],
      html: `<se-chip value="my chip value" selected="true"></se-chip>`,
    });
    expect(page.root.shadowRoot.querySelector('.selected')).toBeTruthy();
  });

  it('should render with a display-block class when the block property is true', async () => {
    const page = await newSpecPage({
      components: [ChipComponent],
      html: `<se-chip value="my chip value" block="true"></se-chip>`,
    });
    expect(page.root.shadowRoot.querySelector('.display-block')).toBeTruthy();
  });

  it('should emit the didClose event when the closeChip function is called', () => {
    const eventSpy = jest.spyOn(chip.didClose, 'emit');
    chip.closeChip();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should not emit the didClose event when the chip is disabled', () => {
    const eventSpy = jest.spyOn(chip.didClose, 'emit');
    chip.disabled = true;
    chip.closeChip();
    expect(eventSpy).not.toHaveBeenCalled();
  });
});
