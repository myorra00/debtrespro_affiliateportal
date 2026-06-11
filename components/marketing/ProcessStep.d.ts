import * as React from 'react';

/** Numbered process step (How It Works). */
export interface ProcessStepProps {
  /** Step number, e.g. 1. */
  number: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
  /** Suppress the connector after the last step. @default false */
  last?: boolean;
  style?: React.CSSProperties;
}

export function ProcessStep(props: ProcessStepProps): JSX.Element;
