/* @ds-bundle: {"format":3,"namespace":"ClearBizDebtDesignSystem_f45b76","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"FeatureCard","sourcePath":"components/marketing/FeatureCard.jsx"},{"name":"ProcessStep","sourcePath":"components/marketing/ProcessStep.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"Testimonial","sourcePath":"components/marketing/Testimonial.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"7a8f42d02948","components/core/Badge.jsx":"da5bad3177b5","components/core/Button.jsx":"5fda8d616884","components/core/Eyebrow.jsx":"337524f8a244","components/data/Card.jsx":"ff5ba85f719a","components/forms/Checkbox.jsx":"b2be341f522f","components/forms/Input.jsx":"febbb98ce6c1","components/forms/Select.jsx":"f76b153dba0e","components/marketing/FeatureCard.jsx":"e83b93a26b22","components/marketing/ProcessStep.jsx":"8323f53b2563","components/marketing/SectionHeading.jsx":"75dcd7bd89eb","components/marketing/Testimonial.jsx":"9b5358d7af1b","ui_kits/client_portal/Portal.jsx":"a1a403bf5250","ui_kits/client_portal/icons.jsx":"12d5ed518ced","ui_kits/marketing_site/Homepage.jsx":"5c2ee8fd3caa","ui_kits/marketing_site/icons.jsx":"514564d7b77d","ui_kits/marketing_site/image-slot.js":"9309434cb09c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ClearBizDebtDesignSystem_f45b76 = window.ClearBizDebtDesignSystem_f45b76 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Debt Resolve Pro Avatar — initials on a blue→navy gradient disc with
 * white text. For portal user chips and testimonial authors.
 */
function Avatar({
  initials = '',
  size = 40,
  tone = 'blue',
  style,
  ...rest
}) {
  const bg = tone === 'green' ? 'linear-gradient(135deg, var(--green-500), var(--green-600))' : 'linear-gradient(135deg, var(--blue-500), var(--navy-700))';
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      width: size,
      height: size,
      flexShrink: 0,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: Math.max(12, Math.round(size * 0.38)),
      color: 'var(--white)',
      background: bg,
      ...style
    }
  }), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bg: 'var(--status-info-bg)',
    fg: 'var(--status-info)'
  },
  success: {
    bg: 'var(--status-success-bg)',
    fg: 'var(--status-success)'
  },
  warning: {
    bg: 'var(--status-warning-bg)',
    fg: 'var(--status-warning)'
  },
  danger: {
    bg: 'var(--status-danger-bg)',
    fg: 'var(--status-danger)'
  },
  neutral: {
    bg: 'var(--status-neutral-bg)',
    fg: 'var(--status-neutral)'
  },
  blue: {
    bg: 'var(--blue-50)',
    fg: 'var(--blue-600)'
  },
  green: {
    bg: 'var(--green-50)',
    fg: 'var(--green-700)'
  }
};

/**
 * Debt Resolve Pro status badge — rounded pill with optional dot. For
 * portal statuses (case stage, payment state) and inline tags.
 */
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 11px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-bold)',
      lineHeight: 1.4,
      background: t.bg,
      color: t.fg,
      whiteSpace: 'nowrap',
      ...style
    }
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Debt Resolve Pro Button. Primary is solid royal blue with white text and
 * a blue glow on hover; outline is white with a blue border; green is the
 * secondary brand accent. Display font, rounded, lifts -2px on hover.
 */
function Button({
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
    sm: {
      padding: '9px 16px',
      fontSize: '14px',
      gap: '7px'
    },
    md: {
      padding: '12px 22px',
      fontSize: '15px',
      gap: '9px'
    },
    lg: {
      padding: '15px 28px',
      fontSize: '16px',
      gap: '10px'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    textDecoration: 'none',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--blue-600)',
      color: 'var(--white)',
      borderColor: 'var(--blue-600)',
      boxShadow: 'var(--shadow-btn-sm)'
    },
    outline: {
      background: 'var(--white)',
      color: 'var(--blue-600)',
      borderColor: 'var(--blue-500)'
    },
    green: {
      background: 'var(--green-500)',
      color: 'var(--white)',
      borderColor: 'var(--green-500)'
    },
    navy: {
      background: 'var(--navy-800)',
      color: 'var(--white)',
      borderColor: 'var(--navy-800)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-600)',
      borderColor: 'transparent'
    }
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
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, rest, {
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => hover(e, true),
    onMouseLeave: e => hover(e, false)
  }), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Debt Resolve Pro Eyebrow — the small uppercase overline that labels
 * sections ("Why Choose DebtResolvePro", "Our Services"). Blue by
 * default; optional leading arc tick.
 */
function Eyebrow({
  tone = 'blue',
  tick = false,
  children,
  style,
  ...rest
}) {
  const color = tone === 'green' ? 'var(--green-600)' : tone === 'navy' ? 'var(--navy-700)' : 'var(--blue-600)';
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '9px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-3xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }), tick && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 3,
      borderRadius: 999,
      background: 'var(--gradient-arc)'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Debt Resolve Pro Card — white surface, rounded, soft shadow (minimal
 * border). Optional header (title + subtitle + action). Set `hover` to
 * lift on hover. The default content surface across marketing & portal.
 */
function Card({
  title,
  subtitle,
  action,
  padded = true,
  hover = false,
  children,
  style,
  bodyStyle,
  ...rest
}) {
  const [lift, setLift] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setLift(true),
    onMouseLeave: () => hover && setLift(false)
  }, rest, {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: lift ? 'var(--shadow-lg)' : 'var(--shadow-card)',
      transform: lift ? 'var(--lift)' : 'none',
      transition: 'transform var(--duration-base), box-shadow var(--duration-base)',
      overflow: 'hidden',
      ...style
    }
  }), (title || action) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--ink-900)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--ink-500)',
      marginTop: 2
    }
  }, subtitle)), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: padded ? '22px' : 0,
      ...bodyStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Debt Resolve Pro Checkbox — blue fill + white check when checked. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  id,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: '10px',
      cursor: 'pointer',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 18,
      height: 18,
      flexShrink: 0,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    onChange: toggle
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 18,
      height: 18,
      margin: 0,
      cursor: 'pointer'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      border: `1.5px solid ${on ? 'var(--blue-600)' : 'var(--ink-300)'}`,
      borderRadius: 'var(--radius-xs)',
      background: on ? 'var(--blue-600)' : 'transparent',
      transition: 'all var(--duration-base)'
    }
  }), on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--white)",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      left: 3,
      top: 3
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-600)',
      lineHeight: 1.4
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Debt Resolve Pro text Input — label + optional leading icon. Rest fill
 * is --ink-50; focus turns the border blue with a soft blue ring on white.
 */
function Input({
  label,
  id,
  icon,
  type = 'text',
  hint,
  error,
  style,
  wrapStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--ink-700)',
      marginBottom: '7px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--ink-400)',
      display: 'flex'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      width: '100%',
      padding: icon ? '12px 14px 12px 42px' : '12px 14px',
      border: `1.5px solid ${error ? 'var(--status-danger)' : focus ? 'var(--blue-500)' : 'var(--ink-200)'}`,
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--ink-900)',
      background: focus ? 'var(--white)' : 'var(--ink-50)',
      boxShadow: focus ? 'var(--focus-shadow)' : 'none',
      outline: 'none',
      transition: 'border-color var(--duration-base), background var(--duration-base), box-shadow var(--duration-base)',
      ...style
    }
  }))), (hint || error) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      color: error ? 'var(--status-danger)' : 'var(--ink-500)',
      marginTop: '6px'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CHEVRON = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239AA2B1' stroke-width='2'><polyline points='6 9 12 15 18 9'/></svg>";

/** Debt Resolve Pro Select — native dropdown styled to match Input. */
function Select({
  label,
  id,
  hint,
  children,
  style,
  wrapStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--ink-700)',
      marginBottom: '7px'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      width: '100%',
      padding: '12px 40px 12px 14px',
      border: `1.5px solid ${focus ? 'var(--blue-500)' : 'var(--ink-200)'}`,
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--ink-900)',
      background: `${focus ? 'var(--white)' : 'var(--ink-50)'} url("${CHEVRON}") no-repeat right 13px center`,
      boxShadow: focus ? 'var(--focus-shadow)' : 'none',
      outline: 'none',
      appearance: 'none',
      WebkitAppearance: 'none',
      cursor: 'pointer',
      transition: 'border-color var(--duration-base), background-color var(--duration-base), box-shadow var(--duration-base)',
      ...style
    }
  }), children), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--ink-500)',
      marginTop: '6px'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Debt Resolve Pro FeatureCard — a service / value card: a filled icon
 * tile (blue or green), a title, supporting copy, and an optional
 * "Benefits:" line. Lifts on hover. Used in "Our Services" / "Why Choose".
 */
function FeatureCard({
  icon,
  tone = 'blue',
  title,
  children,
  benefits,
  style,
  ...rest
}) {
  const [lift, setLift] = React.useState(false);
  const tileBg = tone === 'green' ? 'var(--green-500)' : 'var(--blue-600)';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setLift(true),
    onMouseLeave: () => setLift(false)
  }, rest, {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-subtle)',
      padding: '28px 26px',
      boxShadow: lift ? 'var(--shadow-lg)' : 'var(--shadow-card)',
      transform: lift ? 'var(--lift)' : 'none',
      transition: 'transform var(--duration-base), box-shadow var(--duration-base)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-lg)',
      background: tileBg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--white)',
      marginBottom: 20,
      boxShadow: tone === 'green' ? '0 6px 14px rgba(98,178,47,0.28)' : 'var(--shadow-btn-sm)'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--ink-900)',
      margin: '0 0 10px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-600)',
      lineHeight: 'var(--leading-relaxed)',
      margin: 0
    }
  }, children), benefits && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-700)',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--blue-600)'
    }
  }, "Benefits:"), " ", benefits));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProcessStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Debt Resolve Pro ProcessStep — a big numbered badge, a title, and a
 * short description. Used in the "How It Works" 4-step sequence.
 */
function ProcessStep({
  number,
  title,
  children,
  last = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: 'relative',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--gradient-blue)',
      color: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-h3)',
      boxShadow: 'var(--shadow-btn-sm)',
      marginBottom: 18
    }
  }, number), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--ink-900)',
      margin: '0 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-600)',
      lineHeight: 'var(--leading-relaxed)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Debt Resolve Pro SectionHeading — an eyebrow overline above a big
 * display heading, with an optional intro paragraph. The standard top
 * of every marketing section. `align` centers or left-aligns.
 */
function SectionHeading({
  eyebrow,
  eyebrowTone = 'blue',
  title,
  intro,
  align = 'left',
  max = 620,
  style,
  ...rest
}) {
  const center = align === 'center';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      textAlign: align,
      ...style
    }
  }), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 3,
      borderRadius: 999,
      background: 'var(--gradient-arc)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-3xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: eyebrowTone === 'green' ? 'var(--green-600)' : 'var(--blue-600)'
    }
  }, eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-heading)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--ink-900)',
      margin: 0,
      maxWidth: center ? max : undefined,
      marginLeft: center ? 'auto' : undefined,
      marginRight: center ? 'auto' : undefined
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      color: 'var(--ink-600)',
      lineHeight: 'var(--leading-relaxed)',
      margin: '16px 0 0',
      maxWidth: max,
      marginLeft: center ? 'auto' : undefined,
      marginRight: center ? 'auto' : undefined
    }
  }, intro));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Debt Resolve Pro Testimonial — a quote card with a 5-star row, the
 * quote, and the author (first name + last initial). Matches the
 * Google-Reviews-backed homepage testimonials.
 */
function Testimonial({
  quote,
  author,
  stars = 5,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-card)',
      padding: '26px 26px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      color: '#F5A623'
    }
  }, Array.from({
    length: stars
  }).map((_, i) => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--ink-700)',
      lineHeight: 'var(--leading-relaxed)',
      margin: 0
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--navy-700)',
      marginTop: 'auto'
    }
  }, author));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/client_portal/Portal.jsx
try { (() => {
/* Debt Resolve Pro — client portal, composed from DS components. */
const PDS = window.ClearBizDebtDesignSystem_f45b76;
const {
  useState
} = React;
function Portal() {
  const {
    Card,
    Badge,
    Button,
    Avatar
  } = PDS;
  const Ic = window.PortalIcons;
  const [page, setPage] = useState('overview');
  const navItem = (key, icon, label, count) => /*#__PURE__*/React.createElement("button", {
    className: 'sb-item' + (page === key ? ' active' : ''),
    onClick: () => setPage(key)
  }, /*#__PURE__*/React.createElement("span", {
    className: "sb-ico"
  }, icon({
    size: 19
  })), label, count != null && /*#__PURE__*/React.createElement("span", {
    className: "sb-count"
  }, count));
  const TITLES = {
    overview: 'Overview',
    case: 'My Case',
    payments: 'Payments',
    documents: 'Documents',
    messages: 'Messages',
    settings: 'Settings'
  };
  const creditors = [{
    name: 'Rapid Capital Funding',
    n: 'AB',
    orig: '$78,400',
    now: '$41,000',
    pct: 62,
    status: ['success', 'Settled'],
    color: 'var(--green-500)'
  }, {
    name: 'Forward Line MCA',
    n: 'FL',
    orig: '$62,000',
    now: '$38,500',
    pct: 48,
    status: ['info', 'In Negotiation'],
    color: 'var(--blue-500)'
  }, {
    name: 'Yellowstone Advance',
    n: 'YA',
    orig: '$47,100',
    now: '$47,100',
    pct: 14,
    status: ['warning', 'Awaiting Docs'],
    color: 'var(--status-warning)'
  }];
  const timeline = [{
    c: 'var(--green-500)',
    t: 'Rapid Capital settled',
    m: 'Apr 18',
    d: 'Settlement agreement signed at $41,000 — a 48% reduction. Funds scheduled from your settlement account.'
  }, {
    c: 'var(--blue-500)',
    t: 'Counter-offer sent',
    m: 'Apr 14',
    d: 'We countered Forward Line MCA at $34,000. Awaiting their response.'
  }, {
    c: 'var(--ink-300)',
    t: 'Documents received',
    m: 'Apr 9',
    d: 'Your latest bank statements were received and reviewed by your specialist.'
  }];
  let body;
  if (page === 'overview') {
    body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "page-head"
    }, /*#__PURE__*/React.createElement("h1", null, "Welcome back, Robert"), /*#__PURE__*/React.createElement("p", null, "Here's where your debt resolution stands today.")), /*#__PURE__*/React.createElement("div", {
      className: "hero-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "glow"
    }), /*#__PURE__*/React.createElement("div", {
      className: "inner"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "info",
      dot: true,
      style: {
        background: 'rgba(255,255,255,0.16)',
        color: '#fff'
      }
    }, "In Negotiation"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.8)'
      }
    }, "Ridgeline Logistics LLC \xB7 Case #DRP-2041")), /*#__PURE__*/React.createElement("div", {
      className: "hero-stats"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-stat"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k"
    }, "Original MCA Debt"), /*#__PURE__*/React.createElement("div", {
      className: "v"
    }, "$187,500")), /*#__PURE__*/React.createElement("div", {
      className: "hero-stat"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k"
    }, "Negotiated So Far"), /*#__PURE__*/React.createElement("div", {
      className: "v"
    }, "$126,600")), /*#__PURE__*/React.createElement("div", {
      className: "hero-stat"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k"
    }, "Projected Savings"), /*#__PURE__*/React.createElement("div", {
      className: "v",
      style: {
        color: '#A6E06B'
      }
    }, "$60,900"))), /*#__PURE__*/React.createElement("div", {
      className: "hero-prog"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '41%'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.8)',
        marginTop: 10
      }
    }, "41% of your debt resolved \xB7 on track for full resolution by Q3"))), /*#__PURE__*/React.createElement("div", {
      className: "cols"
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Settlement progress",
      subtitle: "By creditor",
      padded: true
    }, creditors.map((c, i) => /*#__PURE__*/React.createElement("div", {
      className: "cred",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "cred-logo"
    }, c.n), /*#__PURE__*/React.createElement("div", {
      className: "cred-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cred-name"
    }, c.name), /*#__PURE__*/React.createElement("div", {
      className: "cred-sub"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: c.status[0],
      dot: true
    }, c.status[1])), /*#__PURE__*/React.createElement("div", {
      className: "cred-prog"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: c.pct + '%',
        background: c.color
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "cred-amt"
    }, /*#__PURE__*/React.createElement("div", {
      className: "n"
    }, c.now), /*#__PURE__*/React.createElement("div", {
      className: "o"
    }, c.orig))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Next payment",
      padded: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 30,
        fontWeight: 700,
        color: 'var(--ink-900)'
      },
      className: "tnum"
    }, "$2,450"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--ink-500)',
        marginTop: 4
      }
    }, "Due May 1 \xB7 to your settlement account"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      style: {
        marginTop: 16
      },
      iconRight: Ic.chevronRight({
        size: 16
      })
    }, "Manage payment")), /*#__PURE__*/React.createElement(Card, {
      title: "Your specialist",
      padded: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "spec"
    }, /*#__PURE__*/React.createElement(Avatar, {
      initials: "DW",
      size: 46
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        color: 'var(--ink-900)'
      }
    }, "Dana Wu"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--ink-500)'
      }
    }, "Senior Settlement Specialist"))), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      fullWidth: true,
      style: {
        marginTop: 16
      },
      iconLeft: Ic.message({
        size: 16
      })
    }, "Send a message")))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Recent activity",
      padded: true
    }, timeline.map((t, i) => /*#__PURE__*/React.createElement("div", {
      className: "tl",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "tl-rail"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tl-dot",
      style: {
        background: t.c
      }
    }), i < timeline.length - 1 && /*#__PURE__*/React.createElement("span", {
      className: "tl-line"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "tl-title"
    }, t.t), /*#__PURE__*/React.createElement("span", {
      className: "tl-meta"
    }, t.m)), /*#__PURE__*/React.createElement("div", {
      className: "tl-desc"
    }, t.d)))))));
  } else {
    body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "page-head"
    }, /*#__PURE__*/React.createElement("h1", null, TITLES[page]), /*#__PURE__*/React.createElement("p", null, "This area is part of the client portal.")), /*#__PURE__*/React.createElement(Card, {
      padded: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "placeholder"
    }, TITLES[page], " \u2014 placeholder view")));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "sb-logo",
    src: "../../assets/logo-drp-white.png",
    alt: "Debt Resolve Pro"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sb-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-label"
  }, "Your account"), navItem('overview', Ic.grid, 'Overview'), navItem('case', Ic.briefcase, 'My Case'), navItem('payments', Ic.card, 'Payments'), navItem('documents', Ic.file, 'Documents'), navItem('messages', Ic.message, 'Messages', 2)), /*#__PURE__*/React.createElement("div", {
    className: "sb-section",
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-label"
  }, "Account"), navItem('settings', Ic.settings, 'Settings')), /*#__PURE__*/React.createElement("div", {
    className: "sb-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-user"
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "RC",
    size: 38
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sb-user-name"
  }, "Robert Chen"), /*#__PURE__*/React.createElement("div", {
    className: "sb-user-sub"
  }, "Ridgeline Logistics"))))), /*#__PURE__*/React.createElement("main", {
    className: "main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topbar-title"
  }, TITLES[page]), /*#__PURE__*/React.createElement("div", {
    className: "topbar-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "support-chip"
  }, Ic.phone({
    size: 15
  }), " Support 866-757-3339"), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn"
  }, Ic.bell({
    size: 19
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, body)));
}
window.Portal = Portal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/client_portal/Portal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/client_portal/icons.jsx
try { (() => {
/* Lucide-style icons for the Debt Resolve Pro client portal. */
const PI = (paths, sw = 2) => ({
  size = 19,
  ...p
} = {}) => React.createElement('svg', {
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: sw,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  ...p
}, paths);
window.PortalIcons = {
  grid: PI(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7",
    rx: "1"
  }))),
  briefcase: PI(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
  }))),
  card: PI(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "5",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "10",
    x2: "22",
    y2: "10"
  }))),
  file: PI(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "14 2 14 8 20 8"
  }))),
  message: PI(/*#__PURE__*/React.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  })),
  settings: PI(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
  }))),
  bell: PI(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.73 21a2 2 0 0 1-3.46 0"
  }))),
  phone: PI(/*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
  })),
  download: PI(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  }))),
  chevronRight: PI(/*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  }))
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/client_portal/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Homepage.jsx
try { (() => {
/* Debt Resolve Pro — marketing homepage, composed from DS components. */
const DS = window.ClearBizDebtDesignSystem_f45b76;
function Homepage() {
  const {
    Button,
    FeatureCard,
    ProcessStep,
    Testimonial,
    SectionHeading
  } = DS;
  const Ic = window.SiteIcons;
  const Nav = () => /*#__PURE__*/React.createElement("header", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container nav-inner"
  }, /*#__PURE__*/React.createElement("img", {
    className: "nav-logo",
    src: "../../assets/logo-drp.png",
    alt: "Debt Resolve Pro"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link active",
    href: "#"
  }, "Home"), /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "About Us"), /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#services"
  }, "Our Services"), /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Resources"), /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#reviews"
  }, "Testimonials")), /*#__PURE__*/React.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-phone"
  }, Ic.phone({
    size: 18
  }), " 866-757-3339"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: Ic.arrowRight({
      size: 16
    })
  }, "Free Assessment"))));
  return /*#__PURE__*/React.createElement("div", {
    className: "site"
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Secure Your", /*#__PURE__*/React.createElement("br", null), "Business's ", /*#__PURE__*/React.createElement("span", {
    className: "blue"
  }, "Future")), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Reduce Your MCA Debt and Improve Your Cash Flow"), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: Ic.arrowRight({
      size: 18
    })
  }, "Free Assessment"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    iconLeft: Ic.phone({
      size: 17
    })
  }, "Call Us 866-757-3339")), /*#__PURE__*/React.createElement("p", {
    className: "hero-note"
  }, "Discover how we can help significantly lower your outstanding balances and payments")), /*#__PURE__*/React.createElement("div", {
    className: "hero-media"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "drp-hero",
    shape: "rounded",
    radius: "24",
    placeholder: "Drop a hero photo \u2014 advisors with a business owner"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Why Choose DebtResolvePro",
    title: "Comprehensive Debt Resolution Services"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--ink-600)',
      lineHeight: 'var(--leading-relaxed)',
      margin: 0
    }
  }, "We understand that Merchant Cash Advances can be a significant challenge for businesses of all sizes. We leverage our expertise, negotiation skills, and commitment to integrity to deliver effective, efficient resolutions \u2014 tailored to your unique situation.")), /*#__PURE__*/React.createElement("div", {
    className: "grid-3 mt-56"
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: Ic.search({
      size: 26
    }),
    title: "Deep MCA Expertise"
  }, "A specialized understanding of Merchant Cash Advance agreements, funding structures, and the tactics MCA providers employ."), /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "green",
    icon: Ic.userCheck({
      size: 26
    }),
    title: "Truly Personalized Solutions"
  }, "No cookie-cutter solutions. We start with a thorough understanding of your financial situation, business goals, and the specifics of your MCA debt."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: Ic.handshake({
      size: 26
    }),
    title: "Empathetic & Driven Partnership"
  }, "We prioritize clear communication, transparency, and a supportive partnership throughout the entire settlement process.")))), /*#__PURE__*/React.createElement("section", {
    className: "section tint",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Our Services",
    title: "How We Help You Resolve Debt",
    intro: "From negotiation to settlement to litigation support, we meet you wherever your MCA debt stands."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-3 mt-56"
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: Ic.messages({
      size: 26
    }),
    title: "Debt Negotiation",
    benefits: "Lower your outstanding balances and improve your cash flow."
  }, "Leverage our expert negotiation skills to communicate directly with your creditors, reducing your overall debt burden and securing more favorable repayment terms."), /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "green",
    icon: Ic.fileCheck({
      size: 26
    }),
    title: "Debt Settlement",
    benefits: "Reduce your total debt and reach a quicker path to debt-free."
  }, "We work directly with your creditors to negotiate a payment schedule that is less than the full amount you currently owe, potentially resolving your debt faster."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: Ic.shield({
      size: 26
    }),
    title: "Litigation Support",
    benefits: "Navigate legal challenges with expert assistance."
  }, "Should legal action arise, our team provides guidance and support, working with legal professionals to protect your business interests and assets.")))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band-media"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "drp-band",
    shape: "rounded",
    radius: "24",
    placeholder: "Drop a wide office / team photo"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section tint"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Our Process",
    title: "How It Works"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-4 mt-56"
  }, /*#__PURE__*/React.createElement(ProcessStep, {
    number: "1",
    title: "Free Consultation"
  }, "A confidential discussion to understand your unique situation and MCA debt."), /*#__PURE__*/React.createElement(ProcessStep, {
    number: "2",
    title: "Comprehensive Analysis"
  }, "Our experts analyze your MCA agreements and finances to develop a tailored strategy."), /*#__PURE__*/React.createElement(ProcessStep, {
    number: "3",
    title: "Strategic Negotiation"
  }, "We proactively engage your MCA providers to negotiate the best possible settlement terms."), /*#__PURE__*/React.createElement(ProcessStep, {
    number: "4",
    title: "Financial Recovery"
  }, "We guide you through settlement, helping you achieve stability and a brighter future.")))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "reviews"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Client Testimonials",
    title: "Hear Our Success Stories"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-3 mt-56"
  }, /*#__PURE__*/React.createElement(Testimonial, {
    author: "Kelly P.",
    quote: "The team at DebtResolvePro is truly amazing. Every person I interacted with was professional, kind, and genuinely committed to helping. They handled everything with care, clarity, and patience."
  }), /*#__PURE__*/React.createElement(Testimonial, {
    author: "Elizabeth C.",
    quote: "My experience was nothing short of marvelous! From the very beginning, the team showed professionalism, empathy, and a true commitment to helping me navigate my issue with clarity and confidence."
  }), /*#__PURE__*/React.createElement(Testimonial, {
    author: "Paul F.",
    quote: "Wonderful experience. Their team was kind, knowledgeable, and truly dedicated to helping me get out from under MCA debt. They made the entire process smooth and stress-free."
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-glow"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", null, "Contact Us Today for a Personalized Solution"), /*#__PURE__*/React.createElement("p", null, "Take the first step today with a free, no-obligation consultation. Our team is standing by to help."), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "green",
    size: "lg",
    iconRight: Ic.arrowRight({
      size: 18
    })
  }, "Free Assessment"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    iconLeft: Ic.phone({
      size: 17
    }),
    style: {
      background: 'transparent',
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.5)'
    }
  }, "Call Us 866-757-3339")))))), /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "footer-logo",
    src: "../../assets/logo-drp-white.png",
    alt: "Debt Resolve Pro"
  }), /*#__PURE__*/React.createElement("p", null, "Debt Resolve Pro specializes in business debt negotiation. We've restructured millions in debt and help owners regain control and protect cash flow.")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Company"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "About Us"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Our Services"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Resources"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Testimonials")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Get in touch"), /*#__PURE__*/React.createElement("a", {
    href: "tel:8667573339"
  }, "866-757-3339"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, '\u2197', " 220 Congress Park Dr, Delray Beach, FL 33445"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Free Assessment"))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Debt Resolve Pro. All Rights Reserved."), /*#__PURE__*/React.createElement("span", {
    className: "footer-legal"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Copyright"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Terms of Service"))))));
}
window.Homepage = Homepage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Homepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/icons.jsx
try { (() => {
/* Lucide-style icons for the Debt Resolve Pro marketing site. */
const I = (paths, sw = 2) => ({
  size = 24,
  ...p
} = {}) => React.createElement('svg', {
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: sw,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  ...p
}, paths);
window.SiteIcons = {
  arrowRight: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  })), 2.5),
  phone: I(/*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
  })),
  search: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }))),
  userCheck: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "16 11 18 13 22 9"
  }))),
  handshake: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m11 17 2 2a1 1 0 1 0 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 3 1 11h-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 4h8"
  }))),
  messages: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
  }))),
  fileCheck: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "14 2 14 8 20 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 15 2 2 4-4"
  }))),
  scale: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m16 16 3-8 3 8c-2 1.5-4 1.5-6 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m2 16 3-8 3 8c-2 1.5-4 1.5-6 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 21h10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"
  }))),
  shield: I(/*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  })),
  mapPin: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })))
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Testimonial = __ds_scope.Testimonial;

})();
