import { FunctionalComponent, h } from '@stencil/core';
import { CommonProps } from './types';

interface Props extends CommonProps {
  id: string;
  onToggle: () => void;
  value: string;
  color: string;
  indeterminate: boolean;
}

export const CheckboxCommon: FunctionalComponent<Props> = props => {
  const {
    option,
    id,
    value,
    label,
    labelSuffix,
    required,
    color,
    disabled,
    indeterminate,
    selected,
    header,
    padding,
    labelPos,
    size,
    onToggle,
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
      <slot name="label" />
      <span class="container" onClick={onToggle}>
        <input
          type="checkbox"
          tabIndex={-1}
          checked={selected}
          disabled={disabled}
          indeterminate={indeterminate}
          value={value}
          id={id ? `wc-${id}` : ''}
        />
        <button
          class={{
            button: true,
            checkmark: true,
            [`color-${color}`]: !!color,
            checked: selected && !indeterminate,
            indeterminate,
            disabled,
          }}
          disabled={disabled}
        />
      </span>
    </label>
  );
};
