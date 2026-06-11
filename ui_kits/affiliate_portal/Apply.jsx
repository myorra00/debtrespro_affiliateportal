/* DebtResolvePro — Apply to Join landing page with contact form. */
const DS_AP = window.ClearBizDebtDesignSystem_f45b76;

const FREE_EMAIL_DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
  'icloud.com', 'live.com', 'msn.com', 'gmx.com', 'protonmail.com',
  'proton.me', 'me.com', 'mac.com', 'ymail.com', 'rocketmail.com',
  'mail.com', 'zoho.com', 'fastmail.com', 'pm.me', 'tutanota.com',
];

function isValidBusinessEmail(value) {
  const re = /^[^\s@]+@([^\s@]+\.[^\s@]+)$/;
  const m = value.trim().toLowerCase().match(re);
  if (!m) return { ok: false, reason: 'Enter a valid email address.' };
  const domain = m[1];
  if (FREE_EMAIL_DOMAINS.includes(domain)) {
    return { ok: false, reason: 'Use your business email — free email providers (gmail, hotmail, etc.) aren\u2019t accepted.' };
  }
  return { ok: true };
}

function isValidUrl(value) {
  const v = value.trim();
  if (!v) return false;
  const withProto = /^https?:\/\//i.test(v) ? v : 'https://' + v;
  try {
    const u = new URL(withProto);
    return /\./.test(u.hostname);
  } catch (e) { return false; }
}

function isValidPhone(value) {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 10;
}

function Apply() {
  const { Button, Input } = DS_AP;
  const Ic = window.AffiliateIcons;
  const [form, setForm] = React.useState({ name: '', business: '', email: '', phone: '', website: '', info: '' });
  const [errors, setErrors] = React.useState({});
  const [submitting, setSubmitting] = React.useState(false);

  const update = (k) => (e) => {
    setForm(f => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors(er => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = 'Please enter your full name.';
    if (form.business.trim().length < 2) e.business = 'Business name is required.';
    const em = isValidBusinessEmail(form.email);
    if (!em.ok) e.email = em.reason;
    if (!isValidPhone(form.phone)) e.phone = 'Enter a valid phone number (10+ digits).';
    if (!isValidUrl(form.website)) e.website = 'Enter a valid website URL (e.g. yourcompany.com).';
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmitting(true);
      setTimeout(() => { window.location.href = 'thank-you.html'; }, 400);
    }
  };

  const Nav = () => (
    <header className="nav">
      <div className="container nav-inner">
        <a href="homepage.html"><img className="nav-logo" src="../../assets/logo-drp.png" alt="Debt Resolve Pro" /></a>
        <nav className="nav-links">
          <a className="nav-link" href="homepage.html">Home</a>
          <a className="nav-link" href="homepage.html#">About Us</a>
          <a className="nav-link" href="homepage.html#services">Our Services</a>
          <a className="nav-link" href="homepage.html#">Resources</a>
          <a className="nav-link accent" href="become-affiliate.html">Become an Affiliate</a>
        </nav>
        <div className="nav-right">
          <span className="nav-phone">{Ic.phone({ size: 18 })} 866-757-3339</span>
          <Button variant="outline" iconRight={Ic.arrowRight({ size: 16 })} onClick={() => window.location.href = 'signin.html'}>Affiliate Sign In</Button>
        </div>
      </div>
    </header>
  );

  return (
    <div className="site apply-wrap">
      <Nav />

      <section className="container">
        <div className="apply-grid">
          <div className="apply-pitch">
            <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--blue-600)', marginBottom: 14 }}>Affiliate Application</span>
            <h1>Apply to Join the <span className="blue">DebtResolvePro</span> Network</h1>
            <p className="lede">Tell us a bit about you and your business. We'll review your application and reach out within 24 hours to discuss the program and next steps.</p>

            <ul className="apply-checks">
              <li>{Ic.check({ size: 18 })}<span><strong style={{ color: 'var(--ink-900)' }}>Weekly payouts</strong> — get paid every Friday on every closed deal</span></li>
              <li>{Ic.check({ size: 18 })}<span><strong style={{ color: 'var(--ink-900)' }}>100% digital workflow</strong> — close deals through the portal, no paper</span></li>
              <li>{Ic.check({ size: 18 })}<span><strong style={{ color: 'var(--ink-900)' }}>You close, we service</strong> — our team handles negotiation, settlement, and recovery</span></li>
              <li>{Ic.check({ size: 18 })}<span><strong style={{ color: 'var(--ink-900)' }}>48-hour onboarding</strong> — once approved, you'll have portal access within two business days</span></li>
            </ul>

            <div className="apply-trust">
              <div className="row">
                <div className="ic">{Ic.shield({ size: 18 })}</div>
                <div><strong>Your information is private.</strong> We only use it to evaluate your application.</div>
              </div>
              <div className="row">
                <div className="ic">{Ic.clock({ size: 18 })}</div>
                <div><strong>24-hour response.</strong> A partner-success rep will email or call you to discuss.</div>
              </div>
              <div className="row">
                <div className="ic">{Ic.users({ size: 18 })}</div>
                <div><strong>Real people, no chatbots.</strong> Talk directly with a dedicated affiliate manager.</div>
              </div>
            </div>
          </div>

          <form className="apply-card" onSubmit={onSubmit} noValidate>
            <h2>Tell us about you</h2>
            <p className="sub">All fields are required except where noted.</p>

            <div className="field">
              <Input label="Your name" placeholder="Jane Doe"
                value={form.name} onChange={update('name')}
                error={errors.name} />
            </div>

            <div className="field">
              <Input label="Business name" placeholder="Acme Funding Group"
                value={form.business} onChange={update('business')}
                icon={Ic.building({ size: 16 })}
                error={errors.business} />
            </div>

            <div className="field">
              <Input label="Business email" type="email" placeholder="you@yourcompany.com"
                value={form.email} onChange={update('email')}
                icon={Ic.mail({ size: 16 })}
                hint="No free email providers — use your company domain."
                error={errors.email} />
            </div>

            <div className="field">
              <Input label="Phone" type="tel" placeholder="(555) 555-5555"
                value={form.phone} onChange={update('phone')}
                icon={Ic.phone({ size: 16 })}
                error={errors.phone} />
            </div>

            <div className="field">
              <Input label="Website" placeholder="yourcompany.com"
                value={form.website} onChange={update('website')}
                icon={Ic.externalLink({ size: 16 })}
                error={errors.website} />
            </div>

            <div className="field">
              <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--ink-700)', marginBottom: 7 }}>
                Additional information <span style={{ color: 'var(--ink-400)', fontWeight: 600, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
              </label>
              <textarea rows={4} placeholder="Tell us about your book of business, the kinds of MCA deals you see, or anything else we should know."
                value={form.info} onChange={update('info')}
                style={{ width: '100%', padding: '12px 14px', border: '1.5px solid var(--ink-200)', borderRadius: 'var(--radius-md)', fontFamily: 'inherit', fontSize: 'var(--text-base)', color: 'var(--ink-900)', background: 'var(--ink-50)', resize: 'vertical' }}>
              </textarea>
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth iconRight={Ic.arrowRight({ size: 18 })}
              disabled={submitting} onClick={onSubmit}>
              {submitting ? 'Submitting\u2026' : 'Submit Application'}
            </Button>

            <p className="small">
              By submitting, you agree to be contacted by DebtResolvePro about your application.
              <br/>Already approved? <a href="signin.html">Sign in to the affiliate portal</a>.
            </p>
          </form>
        </div>
      </section>

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

window.AffiliateApply = Apply;
