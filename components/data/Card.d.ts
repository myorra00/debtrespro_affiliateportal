import * as React from 'react';

/**
 * Content card — white, rounded, soft shadow.
 *
 * @startingPoint section="Data" subtitle="Card with optional header" viewport="700x240"
 */
export interface CardProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
  /** Pad the body. @default true */
  padded?: boolean;
  /** Lift + larger shadow on hover. @default false */
  hover?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
