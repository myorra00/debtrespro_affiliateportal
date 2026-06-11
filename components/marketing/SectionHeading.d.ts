import * as React from 'react';

/** Eyebrow + display heading + optional intro — the top of a marketing section. */
export interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  /** Eyebrow color. @default "blue" */
  eyebrowTone?: 'blue' | 'green';
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** Text alignment. @default "left" */
  align?: 'left' | 'center';
  /** Max width of title/intro in px when centered. @default 620 */
  max?: number;
  style?: React.CSSProperties;
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
