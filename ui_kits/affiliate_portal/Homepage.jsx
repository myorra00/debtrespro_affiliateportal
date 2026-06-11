/* DebtResolvePro — marketing homepage with the new "Become an Affiliate" nav link. */
const DS = window.ClearBizDebtDesignSystem_f45b76;

function Homepage() {
  const { Button, FeatureCard, ProcessStep, Testimonial, SectionHeading } = DS;
  const Ic = window.AffiliateIcons;

  const Nav = () => (
    <header className="nav">
      <div className="container nav-inner">
        <a href="homepage.html"><img className="nav-logo" src="../../assets/logo-drp.png" alt="Debt Resolve Pro" /></a>
        <nav className="nav-links">
          <a className="nav-link active" href="homepage.html">Home</a>
          <a className="nav-link" href="#">About Us</a>
          <a className="nav-link" href="#services">Our Services</a>
          <a className="nav-link" href="#">Resources</a>
          <a className="nav-link" href="#reviews">Testimonials</a>
          <a className="nav-link accent" href="become-affiliate.html">Become an Affiliate</a>
        </nav>
        <div className="nav-right">
          <span className="nav-phone">{Ic.phone({ size: 18 })} 866-757-3339</span>
          <Button variant="primary" iconRight={Ic.arrowRight({ size: 16 })}>Free Assessment</Button>
        </div>
      </div>
    </header>
  );

  return (
    <div className="site">
      <div className="affiliate-ribbon">
        <span>{Ic.handshake({ size: 16 })}</span>
        Earn recurring commissions referring MCA debt-relief clients.
        <span className="dot"></span>
        <a href="become-affiliate.html">Learn about our Affiliate Program {'\u2192'}</a>
      </div>
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Secure Your<br/>Business's <span className="blue">Future</span></h1>
            <p className="hero-sub">Reduce Your MCA Debt and Improve Your Cash Flow</p>
            <div className="hero-ctas">
              <Button variant="primary" size="lg" iconRight={Ic.arrowRight({ size: 18 })}>Free Assessment</Button>
              <Button variant="outline" size="lg" iconLeft={Ic.phone({ size: 17 })}>Call Us 866-757-3339</Button>
            </div>
            <p className="hero-note">Discover how we can help significantly lower your outstanding balances and payments</p>
          </div>
          <div className="hero-media">
            <image-slot id="drp-hero" shape="rounded" radius="24" placeholder="Drop a hero photo — advisors with a business owner"></image-slot>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section">
        <div className="container">
          <div className="split">
            <SectionHeading eyebrow="Why Choose DebtResolvePro"
              title="Comprehensive Debt Resolution Services" />
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--ink-600)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
              We understand that Merchant Cash Advances can be a significant challenge for businesses of all sizes. We leverage our expertise, negotiation skills, and commitment to integrity to deliver effective, efficient resolutions — tailored to your unique situation.
            </p>
          </div>
          <div className="grid-3 mt-56">
            <FeatureCard icon={Ic.search({ size: 26 })} title="Deep MCA Expertise">
              A specialized understanding of Merchant Cash Advance agreements, funding structures, and the tactics MCA providers employ.
            </FeatureCard>
            <FeatureCard tone="green" icon={Ic.userCheck({ size: 26 })} title="Truly Personalized Solutions">
              No cookie-cutter solutions. We start with a thorough understanding of your financial situation, business goals, and the specifics of your MCA debt.
            </FeatureCard>
            <FeatureCard icon={Ic.handshake({ size: 26 })} title="Empathetic &amp; Driven Partnership">
              We prioritize clear communication, transparency, and a supportive partnership throughout the entire settlement process.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section tint" id="services">
        <div className="container">
          <SectionHeading align="center" eyebrow="Our Services"
            title="How We Help You Resolve Debt"
            intro="From negotiation to settlement to litigation support, we meet you wherever your MCA debt stands." />
          <div className="grid-3 mt-56">
            <FeatureCard icon={Ic.handshake({ size: 26 })} title="Debt Negotiation"
              benefits="Lower your outstanding balances and improve your cash flow.">
              Leverage our expert negotiation skills to communicate directly with your creditors, reducing your overall debt burden and securing more favorable repayment terms.
            </FeatureCard>
            <FeatureCard tone="green" icon={Ic.check({ size: 26 })} title="Debt Settlement"
              benefits="Reduce your total debt and reach a quicker path to debt-free.">
              We work directly with your creditors to negotiate a payment schedule that is less than the full amount you currently owe, potentially resolving your debt faster.
            </FeatureCard>
            <FeatureCard icon={Ic.shield({ size: 26 })} title="Litigation Support"
              benefits="Navigate legal challenges with expert assistance.">
              Should legal action arise, our team provides guidance and support, working with legal professionals to protect your business interests and assets.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <SectionHeading align="center" eyebrow="Our Process" title="How It Works" />
          <div className="grid-4 mt-56">
            <ProcessStep number="1" title="Free Consultation">A confidential discussion to understand your unique situation and MCA debt.</ProcessStep>
            <ProcessStep number="2" title="Comprehensive Analysis">Our experts analyze your MCA agreements and finances to develop a tailored strategy.</ProcessStep>
            <ProcessStep number="3" title="Strategic Negotiation">We proactively engage your MCA providers to negotiate the best possible settlement terms.</ProcessStep>
            <ProcessStep number="4" title="Financial Recovery">We guide you through settlement, helping you achieve stability and a brighter future.</ProcessStep>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section tint" id="reviews">
        <div className="container">
          <SectionHeading align="center" eyebrow="Client Testimonials" title="Hear Our Success Stories" />
          <div className="grid-3 mt-56">
            <Testimonial author="Kelly P." quote="The team at DebtResolvePro is truly amazing. Every person I interacted with was professional, kind, and genuinely committed to helping. They handled everything with care, clarity, and patience." />
            <Testimonial author="Elizabeth C." quote="My experience was nothing short of marvelous! From the very beginning, the team showed professionalism, empathy, and a true commitment to helping me navigate my issue with clarity and confidence." />
            <Testimonial author="Paul F." quote="Wonderful experience. Their team was kind, knowledgeable, and truly dedicated to helping me get out from under MCA debt. They made the entire process smooth and stress-free." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <div className="cta-glow"></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2>Contact Us Today for a Personalized Solution</h2>
              <p>Take the first step today with a free, no-obligation consultation. Our team is standing by to help.</p>
              <div className="row">
                <Button variant="green" size="lg" iconRight={Ic.arrowRight({ size: 18 })}>Free Assessment</Button>
                <Button variant="outline" size="lg" iconLeft={Ic.phone({ size: 17 })} style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}>Call Us 866-757-3339</Button>
              </div>
            </div>
          </div>
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
              <a href="#">About Us</a>
              <a href="#">Our Services</a>
              <a href="#">Resources</a>
              <a href="#">Testimonials</a>
            </div>
            <div className="footer-col">
              <h4>Partners</h4>
              <a href="become-affiliate.html">Become an Affiliate</a>
              <a href="signin.html">Affiliate Sign In</a>
              <a href="#">Referral Resources</a>
            </div>
            <div className="footer-col">
              <h4>Get in touch</h4>
              <a href="tel:8667573339">866-757-3339</a>
              <a href="#">{'\u2197'} 220 Congress Park Dr, Delray Beach, FL 33445</a>
              <a href="#">Free Assessment</a>
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

window.AffiliateHomepage = Homepage;
