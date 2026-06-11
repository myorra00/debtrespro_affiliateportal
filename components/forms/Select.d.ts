import * as React from 'react';

/** Styled native select with chevron, matching Input. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'style'> {
  label?: string;
  hint?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  wrapStyle?: React.CSSProperties;
}

export function Select(props: SelectProps): JSX.Element;
