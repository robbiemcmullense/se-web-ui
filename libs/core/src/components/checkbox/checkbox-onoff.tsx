import { FunctionalComponent, h } from '@stencil/core';
import { CommonProps } from './types';

interface Props extends CommonProps {
  id: string;
  textOn: string;
  textOff: string;
  onOnClick: (e: Event) => void;
  onOffClick: (e: Event) => void;
}

export const CheckboxOnOff: FunctionalComponent<Props> = props => {
  const {
    id,
    option,
    label,
    labelPos,
    labelSuffix,
    required,
    disabled,
    selected,
    header,
    padding,
    size,
    textOn,
    textOff,
    onOnClick,
    onOffClick,
  } = props;

  return (
    <label
      class={{
        [`label-${labelPos}`]: !!labelPos,
        disabled,
        wrapper: true,
        [`opt-${option}`]: true,
        [`p-${padding}`]: !!padding,
        header: !!header,
        [`size-${size}`]: true,
      }}
    >
      {label && (
        <span class="label-wrap">
          {label}
          {labelSuffix && (
            <span class="label-suffix">&nbsp;({labelSuffix})</span>
          )}
          {required && <i class="required">*</i>}
        </span>
      )}
      <div class="on-off-wrapper">
        <button
          disabled={disabled}
          class={{
            disabled,
            button: true,
            active: true,
            selected,
          }}
          onClick={onOnClick}
          id={id ? `wc-${id}-active` : ''}
        >
          {textOn}
        </button>
        <button
          disabled={disabled}
          class={{
            disabled,
            button: true,
            inactive: true,
            selected: !selected,
          }}
          onClick={onOffClick}
          id={id ? `wc-${id}-inactive` : ''}
        >
          {textOff}
        </button>
      </div>
    </label>
  );
};
