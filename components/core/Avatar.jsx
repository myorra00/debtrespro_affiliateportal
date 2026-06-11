import React from 'react';

/**
 * Debt Resolve Pro Avatar — initials on a blue→navy gradient disc with
 * white text. For portal user chips and testimonial authors.
 */
export function Avatar({ initials = '', size = 40, tone = 'blue', style, ...rest }) {
  const bg = tone === 'green'
    ? 'linear-gradient(135deg, var(--green-500), var(--green-600))'
    : 'linear-gradient(135deg, var(--blue-500), var(--navy-700))';
  return (
    <span {...rest} style={{
      width: size, height: size, flexShrink: 0, borderRadius: '50%',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)',
      fontSize: Math.max(12, Math.round(size * 0.38)),
      color: 'var(--white)', background: bg, ...style,
    }}>
      {initials}
    </span>
  );
}
