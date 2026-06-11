import React from 'react';

/**
 * Debt Resolve Pro FeatureCard — a service / value card: a filled icon
 * tile (blue or green), a title, supporting copy, and an optional
 * "Benefits:" line. Lifts on hover. Used in "Our Services" / "Why Choose".
 */
export function FeatureCard({ icon, tone = 'blue', title, children, benefits, style, ...rest }) {
  const [lift, setLift] = React.useState(false);
  const tileBg = tone === 'green' ? 'var(--green-500)' : 'var(--blue-600)';
  return (
    <div
      onMouseEnter={() => setLift(true)}
      onMouseLeave={() => setLift(false)}
      {...rest}
      style={{
        background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--border-subtle)', padding: '28px 26px',
        boxShadow: lift ? 'var(--shadow-lg)' : 'var(--shadow-card)',
        transform: lift ? 'var(--lift)' : 'none',
        transition: 'transform var(--duration-base), box-shadow var(--duration-base)',
        ...style,
      }}
    >
      <div style={{
        width: 56, height: 56, borderRadius: 'var(--radius-lg)', background: tileBg,
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)',
        marginBottom: 20, boxShadow: tone === 'green' ? '0 6px 14px rgba(98,178,47,0.28)' : 'var(--shadow-btn-sm)',
      }}>{icon}</div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', fontWeight: 'var(--weight-bold)', color: 'var(--ink-900)', margin: '0 0 10px' }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--ink-600)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{children}</p>
      {benefits && (
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--ink-700)', marginTop: 14 }}>
          <strong style={{ color: 'var(--blue-600)' }}>Benefits:</strong> {benefits}
        </p>
      )}
    </div>
  );
}
