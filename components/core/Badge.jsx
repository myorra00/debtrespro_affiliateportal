import React from 'react';

const TONES = {
  info:    { bg: 'var(--status-info-bg)',    fg: 'var(--status-info)' },
  success: { bg: 'var(--status-success-bg)', fg: 'var(--status-success)' },
  warning: { bg: 'var(--status-warning-bg)', fg: 'var(--status-warning)' },
  danger:  { bg: 'var(--status-danger-bg)',  fg: 'var(--status-danger)' },
  neutral: { bg: 'var(--status-neutral-bg)', fg: 'var(--status-neutral)' },
  blue:    { bg: 'var(--blue-50)',           fg: 'var(--blue-600)' },
  green:   { bg: 'var(--green-50)',          fg: 'var(--green-700)' },
};

/**
 * Debt Resolve Pro status badge — rounded pill with optional dot. For
 * portal statuses (case stage, payment state) and inline tags.
 */
export function Badge({ tone = 'neutral', dot = false, children, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding: '4px 11px', borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)', fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-bold)', lineHeight: 1.4,
      background: t.bg, color: t.fg, whiteSpace: 'nowrap', ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', flexShrink: 0 }} />}
      {children}
    </span>
  );
}
