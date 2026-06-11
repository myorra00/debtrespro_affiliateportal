/* DebtResolvePro — Become an Affiliate explainer page. */
const DS_BA = window.ClearBizDebtDesignSystem_f45b76;

function BecomeAffiliate() {
  const { Button, SectionHeading } = DS_BA;
  const Ic = window.AffiliateIcons;

  const Nav = () => (
    <header className="nav">
      <div className="container nav-inner">
        <a href="homepage.html"><img className="nav-logo" src="../../assets/logo-drp.png" alt="Debt Resolve Pro" /></a>
        <nav className="nav-links">
          <a className="nav-link" href="homepage.html">Home</a>
          <a className="nav-link" href="homepage.html#">About Us</a>
          <a className="nav-link" href="homepage.html#services">Our Services</a>
          <a className="nav-link" href="homepage.html#">Resources</a>
          <a className="nav-link" href="homepage.html#reviews">Testimonials</a>
          <a className="nav-link accent active" href="become-affiliate.html">Become an Affiliate</a>
        </nav>
        <div className="nav-right">
          <span className="nav-phone">{Ic.phone({ size: 18 })} 866-757-3339</span>
          <Button variant="primary" iconRight={Ic.arrowRight({ size: 16 })} onClick={() => window.location.href = 'signin.html'}>Affiliate Sign In</Button>
        </div>
      </div>
    </header>
  );

  const Benefit = ({ tone, icon, title, body }) => (
    <div className="benefit-card">
      <div className={'benefit-icon ' + tone}>{icon}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );

  return (
    <div className="site">
      <Nav />

      {/* HERO */}
      <section className="aff-hero">
        <div className="container">
          <div className="aff-hero-inner">
            <span className="eyebrow">DebtResolvePro Affiliate Program</span>
            <h1>Close Your MCA Deals.<br/>Get Paid <span className="green">Weekly</span>.</h1>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, lineHeight: 1.2, margin: '0 0 18px', color: 'var(--ink-900)' }}>
              Leverage the Power of DebtResolvePro
            </h2>
            <p className="lede">
              Plug into the ultimate monetization engine for your customers seeking high-quality debt restructuring services. With our streamlined digital contracting application, you can secure MCA debt-relief deals in minutes — eliminating the friction of traditional paperwork.
            </p>
            <p className="lede">
              Once the contract is signed, our elite debt-servicing team takes complete ownership of the file, managing everything from rigorous negotiation to final settlement and recovery.
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, margin: '8px 0 14px', color: 'var(--ink-900)' }}>
              Why Partner with DebtResolvePro?
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 720 }}>
              <li style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-800)', paddingLeft: 18, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: 9, width: 8, height: 8, borderRadius: '50%', background: 'var(--green-500)' }} />
                <strong style={{ color: 'var(--ink-900)' }}>Frictionless Closing:</strong> No paper, no PDFs, and no administrative bottlenecks. Our digital application handles the heavy lifting so you can lock in deals instantly.
              </li>
              <li style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-800)', paddingLeft: 18, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: 9, width: 8, height: 8, borderRadius: '50%', background: 'var(--green-500)' }} />
                <strong style={{ color: 'var(--ink-900)' }}>Premium Debt Servicing:</strong> Rest easy knowing your customers are backed by seasoned industry experts dedicated to maximizing restructuring and settlement outcomes.
              </li>
              <li style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-800)', paddingLeft: 18, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: 9, width: 8, height: 8, borderRadius: '50%', background: 'var(--green-500)' }} />
                <strong style={{ color: 'var(--ink-900)' }}>Accelerated Cash Flow:</strong> Enjoy reliable, weekly commission payouts. You connect the client to the right solution; we service the file and pay you fast.
              </li>
            </ul>
            <p className="lede">
              Maximize the value of your portfolio with a partner built for speed, compliance, and scale.
            </p>
            <div className="row">
              <Button variant="green" size="lg" iconRight={Ic.arrowRight({ size: 18 })} onClick={() => window.location.href = 'apply.html'}>Apply to Join</Button>
              <Button variant="outline" size="lg" iconLeft={Ic.externalLink({ size: 17 })} onClick={() => window.location.href = 'signin.html'}>Affiliate Sign In</Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="aff-stats">
        <div className="container">
          <div className="aff-stats-grid">
            <div className="aff-stat"><div className="v">$12M+</div><div className="k">Debt Restructured</div></div>
            <div className="aff-stat"><div className="v">48%</div><div className="k">Avg. Balance Reduction</div></div>
            <div className="aff-stat"><div className="v">Weekly</div><div className="k">Commission Payouts</div></div>
            <div className="aff-stat"><div className="v">A+</div><div className="k">BBB Rating</div></div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <div className="container">
          <SectionHeading align="center" eyebrow="Why Partner with DebtResolvePro"
            title="Built for Partners Who Want to Close — Not Chase Paperwork"
            intro="Bring the lead. Close the deal in our portal. We service the file. You get paid weekly. The whole workflow is digital end-to-end." />
          <div className="grid-3 mt-56">
            <Benefit tone="green" icon={Ic.dollar({ size: 26 })} title="Weekly Commission Payouts"
              body="Most programs pay Net-30. We pay every Friday. Once a deal is closed and funded, your commission lands within days — not months." />
            <Benefit tone="blue" icon={Ic.zap({ size: 26 })} title="100% Digital Workflow"
              body="Send the contract, sign it, execute the deal — all from one screen via Zoho Sign. No paper, no emailed PDFs, no faxing. Ever." />
            <Benefit tone="navy" icon={Ic.handshake({ size: 26 })} title="You Close, We Service"
              body="You bring your lead and close the deal through our contract application. Our MCA specialists take over: negotiation, settlement, recovery." />
            <Benefit tone="blue" icon={Ic.trendingUp({ size: 26 })} title="Real-Time Pipeline Visibility"
              body="Track every deal live: contract sent, signed, lead converted to a client, debt resolved. No black boxes — full transparency, always." />
            <Benefit tone="green" icon={Ic.shield({ size: 26 })} title="Pristine Attribution"
              body="Your affiliate ID rides every record from Lead to Contact to settled file. Attribution never gets lost in conversion — commissions are guaranteed." />
            <Benefit tone="navy" icon={Ic.users({ size: 26 })} title="Dedicated Affiliate Manager"
              body="A real partner who knows your book, helps you size deals, unblocks contracts, and keeps your weekly payouts flowing." />
          </div>
        </div>
      </section>

      {/* APPLY / SIGN IN CTA */}
      <section id="apply" style={{ padding: '0 0 64px', textAlign: 'center' }}>
        <div className="container">
          <Button variant="green" size="lg" iconRight={Ic.arrowRight({ size: 18 })} onClick={() => window.location.href = 'apply.html'}>Apply to Join</Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a href="homepage.html"><img className="footer-logo" src="../../assets/logo-drp-white.png" alt="Debt Resolve Pro" /></a>
              <p>Debt Resolve Pro specializes in business debt negotiation. We've restructured millions in debt and help owners regain control and protect cash flow.</p>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="homepage.html#">About Us</a>
              <a href="homepage.html#services">Our Services</a>
              <a href="homepage.html#">Resources</a>
              <a href="homepage.html#reviews">Testimonials</a>
            </div>
            <div className="footer-col">
              <h4>Partners</h4>
              <a href="become-affiliate.html">Become an Affiliate</a>
              <a href="signin.html">Affiliate Sign In</a>
              <a href="apply.html">Apply to Join</a>
            </div>
            <div className="footer-col">
              <h4>Get in touch</h4>
              <a href="tel:8667573339">866-757-3339</a>
              <a href="#">{'\u2197'} 220 Congress Park Dr, Delray Beach, FL 33445</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Debt Resolve Pro. All Rights Reserved.</span>
            <span className="footer-legal">
              <a href="#">Privacy Policy</a><a href="#">Terms of Service</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

window.BecomeAffiliate = BecomeAffiliate;
