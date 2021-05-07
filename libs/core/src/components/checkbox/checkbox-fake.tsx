import { FunctionalComponent, h } from '@stencil/core';
import { CommonProps } from './types';

interface Props extends CommonProps {
  value: string;
  color: string;
  indeterminate: boolean;
}

export const CheckboxFake: FunctionalComponent<Props> = props => {
  const {
    option,
    label,
    labelPos,
    labelSuffix,
    required,
    color,
    disabled,
    indeterminate,
    selected,
    header,
    padding,
    size,
  } = props;

  return (
    <div
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
      <slot name="label" />
      <span class="container">
        <div
          class={{
            button: true,
            checkmark: true,
            [`color-${color}`]: !!color,
            checked: selected && !indeterminate,
            indeterminate,
            disabled,
          }}
        />
      </span>
    </div>
  );
};
