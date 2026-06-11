import React from 'react';

/**
 * Debt Resolve Pro Button. Primary is solid royal blue with white text and
 * a blue glow on hover; outline is white with a blue border; green is the
 * secondary brand accent. Display font, rounded, lifts -2px on hover.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  href,
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '9px 16px', fontSize: '14px', gap: '7px' },
    md: { padding: '12px 22px', fontSize: '15px', gap: '9px' },
    lg: { padding: '15px 28px', fontSize: '16px', gap: '10px' },
  };
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    ...sizes[size],
    width: fullWidth ? '100%' : 'auto',
    borderRadius: 'var(--radius-md)',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: 'var(--tracking-snug)',
    lineHeight: 1,
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.55 : 1,
    transition: 'background var(--duration-base), border-color var(--duration-base), transform var(--duration-base), box-shadow var(--duration-base), color var(--duration-base)',
    textDecoration: 'none', whiteSpace: 'nowrap',
  };
  const variants = {
    primary: { background: 'var(--blue-600)', color: 'var(--white)', borderColor: 'var(--blue-600)', boxShadow: 'var(--shadow-btn-sm)' },
    outline: { background: 'var(--white)', color: 'var(--blue-600)', borderColor: 'var(--blue-500)' },
    green:   { background: 'var(--green-500)', color: 'var(--white)', borderColor: 'var(--green-500)' },
    navy:    { background: 'var(--navy-800)', color: 'var(--white)', borderColor: 'var(--navy-800)' },
    ghost:   { background: 'transparent', color: 'var(--ink-600)', borderColor: 'transparent' },
  };
  const hover = (e, on) => {
    if (disabled) return;
    const el = e.currentTarget;
    el.style.transform = on ? 'var(--lift)' : 'none';
    if (variant === 'primary') {
      el.style.background = on ? 'var(--blue-700)' : 'var(--blue-600)';
      el.style.borderColor = on ? 'var(--blue-700)' : 'var(--blue-600)';
      el.style.boxShadow = on ? 'var(--shadow-btn)' : 'var(--shadow-btn-sm)';
    } else if (variant === 'outline') {
      el.style.background = on ? 'var(--blue-50)' : 'var(--white)';
    } else if (variant === 'green') {
      el.style.background = on ? 'var(--green-600)' : 'var(--green-500)';
      el.style.borderColor = on ? 'var(--green-600)' : 'var(--green-500)';
      el.style.boxShadow = on ? '0 6px 16px rgba(98,178,47,0.28)' : 'none';
    } else if (variant === 'navy') {
      el.style.background = on ? 'var(--navy-900)' : 'var(--navy-800)';
    } else if (variant === 'ghost') {
      el.style.background = on ? 'var(--ink-100)' : 'transparent';
      el.style.color = on ? 'var(--ink-900)' : 'var(--ink-600)';
      el.style.transform = 'none';
    }
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? { href } : { type, disabled };
  return (
    <Tag {...tagProps} {...rest}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => hover(e, true)}
      onMouseLeave={(e) => hover(e, false)}>
      {iconLeft}{children}{iconRight}
    </Tag>
  );
}
