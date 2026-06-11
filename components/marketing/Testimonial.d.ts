import * as React from 'react';

/** Testimonial quote card with star rating + author. */
export interface TestimonialProps {
  quote: React.ReactNode;
  /** Author, e.g. "Kelly P." */
  author: React.ReactNode;
  /** Star count. @default 5 */
  stars?: number;
  style?: React.CSSProperties;
}

export function Testimonial(props: TestimonialProps): JSX.Element;
