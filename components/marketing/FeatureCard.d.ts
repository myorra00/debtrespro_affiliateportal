import * as React from 'react';

/**
 * Service / value feature card with a filled icon tile.
 *
 * @startingPoint section="Marketing" subtitle="Service card with icon tile" viewport="700x300"
 */
export interface FeatureCardProps {
  /** Icon node (white glyph sits on the colored tile). */
  icon?: React.ReactNode;
  /** Icon tile color. @default "blue" */
  tone?: 'blue' | 'green';
  title: React.ReactNode;
  /** Supporting description (children). */
  children?: React.ReactNode;
  /** Optional "Benefits:" line. */
  benefits?: React.ReactNode;
  style?: React.CSSProperties;
}

export function FeatureCard(props: FeatureCardProps): JSX.Element;
