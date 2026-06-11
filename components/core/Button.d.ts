import * as React from 'react';

/**
 * Debt Resolve Pro button — primary action across marketing & portal.
 *
 * @startingPoint section="Core" subtitle="Primary / outline / green CTA" viewport="700x140"
 */
export interface ButtonProps {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'outline' | 'green' | 'navy' | 'ghost';
  /** Size. @default "md" (lg for marketing CTAs) */
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  /** Icon before the label. */
  iconLeft?: React.ReactNode;
  /** Icon after the label (e.g. arrow-right on "Free Assessment"). */
  iconRight?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
