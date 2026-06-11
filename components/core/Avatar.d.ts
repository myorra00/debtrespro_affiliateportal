import * as React from 'react';

/** Initials avatar on a blue→navy gradient disc. */
export interface AvatarProps {
  /** Initials, e.g. "KP". */
  initials?: string;
  /** Diameter in px. @default 40 */
  size?: number;
  /** Gradient tone. @default "blue" */
  tone?: 'blue' | 'green';
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
