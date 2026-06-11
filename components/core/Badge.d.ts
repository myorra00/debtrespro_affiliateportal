import * as React from 'react';

/** Status badge / tag pill. */
export interface BadgeProps {
  /** Color tone. @default "neutral" */
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'neutral' | 'blue' | 'green';
  /** Show a leading dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
