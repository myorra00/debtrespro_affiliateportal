import * as React from 'react';

/**
 * Labeled text input with optional leading icon, hint, and error.
 *
 * @startingPoint section="Forms" subtitle="Labeled text field" viewport="700x130"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  label?: string;
  icon?: React.ReactNode;
  hint?: string;
  error?: string;
  style?: React.CSSProperties;
  wrapStyle?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
