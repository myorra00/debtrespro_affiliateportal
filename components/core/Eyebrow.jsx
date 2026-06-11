import React from 'react';

/**
 * Debt Resolve Pro Eyebrow — the small uppercase overline that labels
 * sections ("Why Choose DebtResolvePro", "Our Services"). Blue by
 * default; optional leading arc tick.
 */
export function Eyebrow({ tone = 'blue', tick = false, children, style, ...rest }) {
  const color = tone === 'green' ? 'var(--green-600)' : tone === 'navy' ? 'var(--navy-700)' : 'var(--blue-600)';
  return (
    <span {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: '9px',
      fontFamily: 'var(--font-sans)', fontSize: 'var(--text-3xs)',
      fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase', color, ...style,
    }}>
      {tick && <span style={{ width: 22, height: 3, borderRadius: 999, background: 'var(--gradient-arc)' }} />}
      {children}
    </span>
  );
}
