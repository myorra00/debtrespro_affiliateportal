import React from 'react';

/** Debt Resolve Pro Checkbox — blue fill + white check when checked. */
export function Checkbox({ label, checked, defaultChecked, onChange, id, style, ...rest }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  const toggle = (e) => { if (!isControlled) setInternal(e.target.checked); onChange && onChange(e); };
  return (
    <label style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', userSelect: 'none', ...style }}>
      <span style={{ position: 'relative', width: 18, height: 18, flexShrink: 0, marginTop: 1 }}>
        <input id={id} type="checkbox"
          checked={isControlled ? checked : undefined}
          defaultChecked={isControlled ? undefined : defaultChecked}
          onChange={toggle} {...rest}
          style={{ position: 'absolute', opacity: 0, width: 18, height: 18, margin: 0, cursor: 'pointer' }} />
        <span style={{
          position: 'absolute', inset: 0,
          border: `1.5px solid ${on ? 'var(--blue-600)' : 'var(--ink-300)'}`,
          borderRadius: 'var(--radius-xs)', background: on ? 'var(--blue-600)' : 'transparent',
          transition: 'all var(--duration-base)',
        }} />
        {on && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--white)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: 3, top: 3 }}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      {label && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--ink-600)', lineHeight: 1.4 }}>{label}</span>}
    </label>
  );
}
