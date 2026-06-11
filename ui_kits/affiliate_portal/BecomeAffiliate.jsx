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
            <p className="lede">
              Bring your own business-owner leads and use our digital contract application to close MCA debt-relief deals in minutes. Once signed, we take the file — negotiation, settlement, recovery — and pay your commission out weekly. No paper. No PDFs. No waiting.
            </p>
            <div className="row">
              <Button variant="green" size="lg" iconRight={Ic.arrowRight({ size: 18 })} onClick={() => window.location.href = 'apply.html'}>Apply to Join</Button>
              <Button variant="outline" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', background: 'transparent' }} iconLeft={Ic.externalLink({ size: 17 })} onClick={() => window.location.href = 'signin.html'}>Affiliate Sign In</Button>
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
      <section className="section" id="apply" style={{ paddingTop: 64 }}>
        <div className="container">
          <div className="aff-final-cta">
            <h2>Ready to Close Your First Deal?</h2>
            <p>Apply once. Onboarded in 48 hours. Then bring your leads, close deals digitally, and watch weekly commissions hit your account — all from one portal.</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="green" size="lg" iconRight={Ic.arrowRight({ size: 18 })} onClick={() => window.location.href = 'apply.html'}>Apply to Join</Button>
              <Button variant="outline" size="lg" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }} iconLeft={Ic.phone({ size: 17 })}>Talk to a Partner Lead</Button>
            </div>
            <a className="portal-link" href="signin.html">
              {Ic.externalLink({ size: 16 })}
              Already an affiliate? Sign in at <code>affiliates.debtrespro.com</code>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <img className="footer-logo" src="../../assets/logo-drp-white.png" alt="Debt Resolve Pro" />
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
