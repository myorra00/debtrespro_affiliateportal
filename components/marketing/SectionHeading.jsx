import React from 'react';

/**
 * Debt Resolve Pro SectionHeading — an eyebrow overline above a big
 * display heading, with an optional intro paragraph. The standard top
 * of every marketing section. `align` centers or left-aligns.
 */
export function SectionHeading({ eyebrow, eyebrowTone = 'blue', title, intro, align = 'left', max = 620, style, ...rest }) {
  const center = align === 'center';
  return (
    <div {...rest} style={{ textAlign: align, ...style }}>
      {eyebrow && (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
          <span style={{ width: 22, height: 3, borderRadius: 999, background: 'var(--gradient-arc)' }} />
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-3xs)', fontWeight: 'var(--weight-bold)',
            letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase',
            color: eyebrowTone === 'green' ? 'var(--green-600)' : 'var(--blue-600)',
          }}>{eyebrow}</span>
        </div>
      )}
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: 'var(--text-display)', fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--tracking-heading)', lineHeight: 'var(--leading-snug)', color: 'var(--ink-900)',
        margin: 0, maxWidth: center ? max : undefined, marginLeft: center ? 'auto' : undefined, marginRight: center ? 'auto' : undefined,
      }}>{title}</h2>
      {intro && (
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', color: 'var(--ink-600)',
          lineHeight: 'var(--leading-relaxed)', margin: '16px 0 0',
          maxWidth: max, marginLeft: center ? 'auto' : undefined, marginRight: center ? 'auto' : undefined,
        }}>{intro}</p>
      )}
    </div>
  );
}
