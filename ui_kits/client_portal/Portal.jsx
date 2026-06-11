/* Debt Resolve Pro — client portal, composed from DS components. */
const PDS = window.ClearBizDebtDesignSystem_f45b76;
const { useState } = React;

function Portal() {
  const { Card, Badge, Button, Avatar } = PDS;
  const Ic = window.PortalIcons;
  const [page, setPage] = useState('overview');

  const navItem = (key, icon, label, count) => (
    <button className={'sb-item' + (page === key ? ' active' : '')} onClick={() => setPage(key)}>
      <span className="sb-ico">{icon({ size: 19 })}</span>{label}
      {count != null && <span className="sb-count">{count}</span>}
    </button>
  );

  const TITLES = { overview: 'Overview', case: 'My Case', payments: 'Payments', documents: 'Documents', messages: 'Messages', settings: 'Settings' };

  const creditors = [
    { name: 'Rapid Capital Funding', n: 'AB', orig: '$78,400', now: '$41,000', pct: 62, status: ['success', 'Settled'], color: 'var(--green-500)' },
    { name: 'Forward Line MCA', n: 'FL', orig: '$62,000', now: '$38,500', pct: 48, status: ['info', 'In Negotiation'], color: 'var(--blue-500)' },
    { name: 'Yellowstone Advance', n: 'YA', orig: '$47,100', now: '$47,100', pct: 14, status: ['warning', 'Awaiting Docs'], color: 'var(--status-warning)' },
  ];
  const timeline = [
    { c: 'var(--green-500)', t: 'Rapid Capital settled', m: 'Apr 18', d: 'Settlement agreement signed at $41,000 — a 48% reduction. Funds scheduled from your settlement account.' },
    { c: 'var(--blue-500)', t: 'Counter-offer sent', m: 'Apr 14', d: 'We countered Forward Line MCA at $34,000. Awaiting their response.' },
    { c: 'var(--ink-300)', t: 'Documents received', m: 'Apr 9', d: 'Your latest bank statements were received and reviewed by your specialist.' },
  ];

  let body;
  if (page === 'overview') {
    body = (
      <>
        <div className="page-head">
          <h1>Welcome back, Robert</h1>
          <p>Here's where your debt resolution stands today.</p>
        </div>

        <div className="hero-card">
          <div className="glow"></div>
          <div className="inner">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Badge tone="info" dot style={{ background: 'rgba(255,255,255,0.16)', color: '#fff' }}>In Negotiation</Badge>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>Ridgeline Logistics LLC · Case #DRP-2041</span>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><div className="k">Original MCA Debt</div><div className="v">$187,500</div></div>
              <div className="hero-stat"><div className="k">Negotiated So Far</div><div className="v">$126,600</div></div>
              <div className="hero-stat"><div className="k">Projected Savings</div><div className="v" style={{ color: '#A6E06B' }}>$60,900</div></div>
            </div>
            <div className="hero-prog"><div style={{ width: '41%' }}></div></div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 10 }}>41% of your debt resolved · on track for full resolution by Q3</div>
          </div>
        </div>

        <div className="cols">
          <Card title="Settlement progress" subtitle="By creditor" padded>
            {creditors.map((c, i) => (
              <div className="cred" key={i}>
                <div className="cred-logo">{c.n}</div>
                <div className="cred-main">
                  <div className="cred-name">{c.name}</div>
                  <div className="cred-sub"><Badge tone={c.status[0]} dot>{c.status[1]}</Badge></div>
                  <div className="cred-prog"><div style={{ width: c.pct + '%', background: c.color }}></div></div>
                </div>
                <div className="cred-amt">
                  <div className="n">{c.now}</div>
                  <div className="o">{c.orig}</div>
                </div>
              </div>
            ))}
          </Card>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <Card title="Next payment" padded>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, color: 'var(--ink-900)' }} className="tnum">$2,450</div>
              <div style={{ fontSize: 13, color: 'var(--ink-500)', marginTop: 4 }}>Due May 1 · to your settlement account</div>
              <Button variant="primary" fullWidth style={{ marginTop: 16 }} iconRight={Ic.chevronRight({ size: 16 })}>Manage payment</Button>
            </Card>
            <Card title="Your specialist" padded>
              <div className="spec">
                <Avatar initials="DW" size={46} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--ink-900)' }}>Dana Wu</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-500)' }}>Senior Settlement Specialist</div>
                </div>
              </div>
              <Button variant="outline" fullWidth style={{ marginTop: 16 }} iconLeft={Ic.message({ size: 16 })}>Send a message</Button>
            </Card>
          </div>
        </div>

        <div style={{ marginTop: 22 }}>
          <Card title="Recent activity" padded>
            {timeline.map((t, i) => (
              <div className="tl" key={i}>
                <div className="tl-rail">
                  <span className="tl-dot" style={{ background: t.c }}></span>
                  {i < timeline.length - 1 && <span className="tl-line"></span>}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span className="tl-title">{t.t}</span><span className="tl-meta">{t.m}</span>
                  </div>
                  <div className="tl-desc">{t.d}</div>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </>
    );
  } else {
    body = (
      <>
        <div className="page-head"><h1>{TITLES[page]}</h1><p>This area is part of the client portal.</p></div>
        <Card padded><div className="placeholder">{TITLES[page]} — placeholder view</div></Card>
      </>
    );
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sb-brand"><img className="sb-logo" src="../../assets/logo-drp-white.png" alt="Debt Resolve Pro" /></div>
        <div className="sb-section">
          <div className="sb-label">Your account</div>
          {navItem('overview', Ic.grid, 'Overview')}
          {navItem('case', Ic.briefcase, 'My Case')}
          {navItem('payments', Ic.card, 'Payments')}
          {navItem('documents', Ic.file, 'Documents')}
          {navItem('messages', Ic.message, 'Messages', 2)}
        </div>
        <div className="sb-section" style={{ marginTop: 14 }}>
          <div className="sb-label">Account</div>
          {navItem('settings', Ic.settings, 'Settings')}
        </div>
        <div className="sb-foot">
          <div className="sb-user">
            <Avatar initials="RC" size={38} />
            <div><div className="sb-user-name">Robert Chen</div><div className="sb-user-sub">Ridgeline Logistics</div></div>
          </div>
        </div>
      </aside>

      <main className="main">
        <div className="topbar">
          <div className="topbar-title">{TITLES[page]}</div>
          <div className="topbar-right">
            <span className="support-chip">{Ic.phone({ size: 15 })} Support 866-757-3339</span>
            <button className="icon-btn">{Ic.bell({ size: 19 })}<span className="dot"></span></button>
          </div>
        </div>
        <div className="content">{body}</div>
      </main>
    </div>
  );
}

window.Portal = Portal;
