import React from 'react';

/**
 * Debt Resolve Pro text Input — label + optional leading icon. Rest fill
 * is --ink-50; focus turns the border blue with a soft blue ring on white.
 */
export function Input({ label, id, icon, type = 'text', hint, error, style, wrapStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div style={{ ...wrapStyle }}>
      {label && (
        <label htmlFor={inputId} style={{
          display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)',
          fontWeight: 'var(--weight-bold)', color: 'var(--ink-700)', marginBottom: '7px',
        }}>{label}</label>
      )}
      <div style={{ position: 'relative' }}>
        {icon && (
          <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--ink-400)', display: 'flex' }}>{icon}</span>
        )}
        <input id={inputId} type={type}
          onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
          onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
          {...rest}
          style={{
            width: '100%',
            padding: icon ? '12px 14px 12px 42px' : '12px 14px',
            border: `1.5px solid ${error ? 'var(--status-danger)' : focus ? 'var(--blue-500)' : 'var(--ink-200)'}`,
            borderRadius: 'var(--radius-md)',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
            color: 'var(--ink-900)', background: focus ? 'var(--white)' : 'var(--ink-50)',
            boxShadow: focus ? 'var(--focus-shadow)' : 'none', outline: 'none',
            transition: 'border-color var(--duration-base), background var(--duration-base), box-shadow var(--duration-base)',
            ...style,
          }} />
      </div>
      {(hint || error) && (
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-2xs)', color: error ? 'var(--status-danger)' : 'var(--ink-500)', marginTop: '6px' }}>{error || hint}</div>
      )}
    </div>
  );
}
