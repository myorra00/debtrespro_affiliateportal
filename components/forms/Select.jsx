import React from 'react';

const CHEVRON = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239AA2B1' stroke-width='2'><polyline points='6 9 12 15 18 9'/></svg>";

/** Debt Resolve Pro Select — native dropdown styled to match Input. */
export function Select({ label, id, hint, children, style, wrapStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div style={{ ...wrapStyle }}>
      {label && (
        <label htmlFor={selectId} style={{
          display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)',
          fontWeight: 'var(--weight-bold)', color: 'var(--ink-700)', marginBottom: '7px',
        }}>{label}</label>
      )}
      <select id={selectId}
        onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
        onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
        {...rest}
        style={{
          width: '100%', padding: '12px 40px 12px 14px',
          border: `1.5px solid ${focus ? 'var(--blue-500)' : 'var(--ink-200)'}`,
          borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
          color: 'var(--ink-900)',
          background: `${focus ? 'var(--white)' : 'var(--ink-50)'} url("${CHEVRON}") no-repeat right 13px center`,
          boxShadow: focus ? 'var(--focus-shadow)' : 'none', outline: 'none',
          appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer',
          transition: 'border-color var(--duration-base), background-color var(--duration-base), box-shadow var(--duration-base)',
          ...style,
        }}>
        {children}
      </select>
      {hint && <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-2xs)', color: 'var(--ink-500)', marginTop: '6px' }}>{hint}</div>}
    </div>
  );
}
