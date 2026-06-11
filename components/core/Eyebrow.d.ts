import * as React from 'react';

/** Uppercase section overline label. */
export interface EyebrowProps {
  /** Color tone. @default "blue" */
  tone?: 'blue' | 'green' | 'navy';
  /** Show the leading green→blue arc tick. @default false */
  tick?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
