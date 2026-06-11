import React from 'react';

/**
 * Debt Resolve Pro Testimonial — a quote card with a 5-star row, the
 * quote, and the author (first name + last initial). Matches the
 * Google-Reviews-backed homepage testimonials.
 */
export function Testimonial({ quote, author, stars = 5, style, ...rest }) {
  return (
    <div {...rest} style={{
      background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-card)',
      padding: '26px 26px 24px', display: 'flex', flexDirection: 'column', gap: 14, ...style,
    }}>
      <div style={{ display: 'flex', gap: 3, color: '#F5A623' }}>
        {Array.from({ length: stars }).map((_, i) => (
          <svg key={i} width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--ink-700)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
        &ldquo;{quote}&rdquo;
      </p>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--navy-700)', marginTop: 'auto' }}>
        {author}
      </div>
    </div>
  );
}
