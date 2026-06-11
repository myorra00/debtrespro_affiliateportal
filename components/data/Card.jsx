import React from 'react';

/**
 * Debt Resolve Pro Card — white surface, rounded, soft shadow (minimal
 * border). Optional header (title + subtitle + action). Set `hover` to
 * lift on hover. The default content surface across marketing & portal.
 */
export function Card({ title, subtitle, action, padded = true, hover = false, children, style, bodyStyle, ...rest }) {
  const [lift, setLift] = React.useState(false);
  return (
    <div
      onMouseEnter={() => hover && setLift(true)}
      onMouseLeave={() => hover && setLift(false)}
      {...rest}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: lift ? 'var(--shadow-lg)' : 'var(--shadow-card)',
        transform: lift ? 'var(--lift)' : 'none',
        transition: 'transform var(--duration-base), box-shadow var(--duration-base)',
        overflow: 'hidden',
        ...style,
      }}
    >
      {(title || action) && (
        <div style={{ padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, borderBottom: '1px solid var(--border-subtle)' }}>
          <div>
            {title && <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 'var(--weight-semibold)', color: 'var(--ink-900)' }}>{title}</div>}
            {subtitle && <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-2xs)', color: 'var(--ink-500)', marginTop: 2 }}>{subtitle}</div>}
          </div>
          {action}
        </div>
      )}
      <div style={{ padding: padded ? '22px' : 0, ...bodyStyle }}>{children}</div>
    </div>
  );
}
