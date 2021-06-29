import { option, size } from './constants';

export type Size = typeof size[keyof typeof size];

export type Option = typeof option[keyof typeof option];

export interface CommonProps {
  option: Option;
  label: string;
  name: string;
  labelPos: string;
  labelSuffix: string;
  required: boolean;
  disabled: boolean;
  selected: boolean;
  header: boolean;
  padding: string;
  size: string;
}
