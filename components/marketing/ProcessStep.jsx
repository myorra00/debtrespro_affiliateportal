import React from 'react';

/**
 * Debt Resolve Pro ProcessStep — a big numbered badge, a title, and a
 * short description. Used in the "How It Works" 4-step sequence.
 */
export function ProcessStep({ number, title, children, last = false, style, ...rest }) {
  return (
    <div {...rest} style={{ position: 'relative', ...style }}>
      <div style={{
        width: 56, height: 56, borderRadius: 'var(--radius-pill)',
        background: 'var(--gradient-blue)', color: 'var(--white)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-h3)',
        boxShadow: 'var(--shadow-btn-sm)', marginBottom: 18,
      }}>{number}</div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', fontWeight: 'var(--weight-bold)', color: 'var(--ink-900)', margin: '0 0 8px' }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--ink-600)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{children}</p>
    </div>
  );
}
