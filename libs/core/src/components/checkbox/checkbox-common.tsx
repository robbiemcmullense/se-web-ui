import { FunctionalComponent, h } from '@stencil/core';
import { CommonProps } from './types';

interface Props extends CommonProps {
  id: string;
  onToggle: () => void;
  value: string;
  color: string;
  indeterminate: boolean;
  noInteractive: boolean;
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
    name,
    disabled,
    indeterminate,
    selected,
    header,
    padding,
    labelPos,
    size,
    noInteractive,
    onToggle,
  } = props;

  let content =
    (noInteractive) ? (
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
    ) : (
      <span class="container" onClick={onToggle}>
        <input
          type="checkbox"
          tabIndex={-1}
          name={name}
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
    );

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
      {content}
    </label>
  );
};
