/* DebtResolvePro — Post-acceptance affiliate onboarding flow. */
const DS_OB = window.ClearBizDebtDesignSystem_f45b76;

function Onboarding() {
  const { Button, Input, Select, Avatar } = DS_OB;
  const Ic = window.AffiliateIcons;
  const { useState } = React;

  const STEPS = [
    { key: 'welcome', label: 'Welcome', short: 'Welcome' },
    { key: 'overview', label: 'Introduction & overview', short: 'Overview' },
    { key: 'agreement', label: 'Affiliate Agreement', short: 'Agreement' },
    { key: 'w9', label: 'W-9 Tax Form', short: 'W-9' },
    { key: 'banking', label: 'Banking Information', short: 'Banking' },
  ];

  const USER = { name: 'Joe Weston', initials: 'JW', company: 'New York Capital' };

  const [stepKey, setStepKey] = useState('welcome');
  const [done, setDone] = useState({});
  const [success, setSuccess] = useState(false);

  const idx = STEPS.findIndex(s => s.key === stepKey);
  const total = STEPS.length;
  const completedCount = STEPS.filter(s => done[s.key]).length;
  const minutesLeft = Math.max(1, (total - completedCount) * 2);

  const goNext = () => {
    setDone({ ...done, [stepKey]: true });
    if (idx === total - 1) setSuccess(true);
    else setStepKey(STEPS[idx + 1].key);
  };
  const goBack = () => { if (idx > 0) setStepKey(STEPS[idx - 1].key); };
  const goTo = (key) => setStepKey(key);

  /* ---- Shell ---- */
  const Header = () => (
    <header className="ob-header">
      <div className="ob-header-inner">
        <a href="homepage.html" className="ob-brand">
          <img src="../../assets/logo-drp.png" alt="Debt Resolve Pro" />
        </a>
        <div className="ob-header-right">
          <div className="ob-user">
            <Avatar initials={USER.initials} size={34} />
            <div className="ob-user-meta">
              <div className="ob-user-name">{USER.name}</div>
              <div className="ob-user-sub">{USER.company}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

  const Progress = () => (
    <div className="ob-progress">
      <div className="ob-progress-meta">
        <strong>{completedCount} of {total} complete</strong>
      </div>
      <ol className="ob-steps">
        {STEPS.map((s, i) => {
          const state = done[s.key] ? 'done' : (s.key === stepKey ? 'current' : 'upcoming');
          return (
            <li key={s.key} className={'ob-step ob-step-' + state}>
              <button className="ob-step-btn" onClick={() => goTo(s.key)} disabled={state === 'upcoming' && !done[s.key]}>
                <span className="ob-step-marker">
                  {state === 'done' ? Ic.check({ size: 14 }) : (i + 1)}
                </span>
                <span className="ob-step-label">{s.label}</span>
              </button>
              {i < total - 1 && <span className="ob-step-line" />}
            </li>
          );
        })}
      </ol>
    </div>
  );

  const Footer = ({ nextLabel = 'Continue', nextIcon, canBack = true, canSaveLater = true }) => (
    <div className="ob-footer">
      <div>
        {canBack && idx > 0 && (
          <Button variant="ghost" iconLeft={Ic.arrowLeft({ size: 16 })} onClick={goBack}>Back</Button>
        )}
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        {canSaveLater && <Button variant="outline">Save &amp; finish later</Button>}
        <Button variant="primary" iconRight={nextIcon || Ic.arrowRight({ size: 16 })} onClick={goNext}>{nextLabel}</Button>
      </div>
    </div>
  );

  /* ---- Step bodies ---- */
  const Welcome = () => (
    <div className="ob-card">
      <span className="ob-eyebrow">Step 1 of {total} · Welcome</span>
      <h1>Welcome to DebtResolvePro, {USER.name.split(' ')[0]}.</h1>
      <p className="ob-lede">You're approved. Before you close your first deal, we need four quick things on file. The whole setup takes about 10 minutes and you can save and come back anytime.</p>
      <ul className="ob-bullets">
        <li><span className="ob-bullet-ic">{Ic.fileSigned({ size: 18 })}</span><div><strong>Sign the affiliate agreement</strong><span>Standard partner terms — sign electronically.</span></div></li>
        <li><span className="ob-bullet-ic">{Ic.shield({ size: 18 })}</span><div><strong>Submit a W-9</strong><span>Required so we can issue 1099s for your commissions.</span></div></li>
        <li><span className="ob-bullet-ic">{Ic.dollar({ size: 18 })}</span><div><strong>Set up direct deposit</strong><span>Where your weekly commissions land.</span></div></li>
        <li><span className="ob-bullet-ic">{Ic.zap({ size: 18 })}</span><div><strong>Get portal access</strong><span>Submit leads, close contracts, track commissions.</span></div></li>
      </ul>
      <Footer nextLabel="Get started" canBack={false} canSaveLater={false} />
    </div>
  );

  const Overview = () => (
    <div className="ob-card">
      <span className="ob-eyebrow">Step 2 of {total} · Introduction &amp; overview</span>
      <h1>How the program works</h1>
      <p className="ob-lede">Quick orientation so you know what to expect before you start submitting leads.</p>
      <div className="ob-info-grid">
        <div className="ob-info">
          <div className="ob-info-ic blue">{Ic.handshake({ size: 20 })}</div>
          <h3>You bring the lead</h3>
          <p>Business owner with MCA debt. Submit through the portal or send the contract directly.</p>
        </div>
        <div className="ob-info">
          <div className="ob-info-ic green">{Ic.fileSigned({ size: 20 })}</div>
          <h3>We close digitally</h3>
          <p>Zoho Sign contract pre-fills with your customer's info. No paper, no PDFs, no faxing.</p>
        </div>
        <div className="ob-info">
          <div className="ob-info-ic blue">{Ic.shield({ size: 20 })}</div>
          <h3>We service the file</h3>
          <p>Our MCA specialists handle negotiation, settlement, and recovery from signature on.</p>
        </div>
        <div className="ob-info">
          <div className="ob-info-ic green">{Ic.dollar({ size: 20 })}</div>
          <h3>You get paid weekly</h3>
          <p>Once a deal funds, your commission posts to direct deposit every Friday.</p>
        </div>
      </div>
      <Footer nextLabel="I've got it" />
    </div>
  );

  const Agreement = () => (
    <div className="ob-card">
      <span className="ob-eyebrow">Step 3 of {total} · Affiliate Agreement</span>
      <h1>Sign your affiliate agreement</h1>
      <p className="ob-lede">Standard DebtResolvePro Partner Agreement — defines commission rate, attribution, and payout terms.</p>
      <div className="ob-doc">
        <div className="ob-doc-head">
          <div>
            <strong>DebtResolvePro Affiliate Partner Agreement</strong>
            <span>v2.4 · 4 pages · Last updated Mar 2026</span>
          </div>
          <Button variant="ghost" iconLeft={Ic.externalLink({ size: 14 })}>Open full document</Button>
        </div>
        <div className="ob-doc-body">
          <p><strong>1. Scope.</strong> This agreement sets the terms under which {USER.company} ("Affiliate") refers MCA debt-relief opportunities to DebtResolvePro ("DRP") and earns commissions on successfully resolved files.</p>
          <p><strong>2. Commission.</strong> Affiliate earns 15% of net collected revenue on each resolved file attributed to Affiliate's portal ID. Commissions are paid weekly via ACH to the bank account on file.</p>
          <p><strong>3. Attribution.</strong> Attribution is determined at contract execution. Affiliate's portal ID rides every record from Lead to settled file. No re-attribution after contract signing.</p>
          <p><strong>4. Term.</strong> Initial term: 12 months from execution date. Auto-renews annually unless either party gives 30 days' notice…</p>
        </div>
      </div>
      <div className="form-grid" style={{ marginTop: 22 }}>
        <Input label="Type your full legal name to sign" placeholder={USER.name} defaultValue={USER.name} />
        <Input label="Date" type="date" defaultValue="2026-06-10" />
      </div>
      <label className="ob-check">
        <input type="checkbox" defaultChecked />
        <span>I have read and agree to the DebtResolvePro Affiliate Partner Agreement and am authorized to sign on behalf of {USER.company}.</span>
      </label>
      <Footer nextLabel="Sign &amp; continue" nextIcon={Ic.fileSigned({ size: 16 })} />
    </div>
  );

  const W9 = () => (
    <div className="ob-card">
      <span className="ob-eyebrow">Step 4 of {total} · W-9 Tax Form</span>
      <h1>Submit your W-9</h1>
      <p className="ob-lede">Required so we can issue an annual 1099 for your commissions. Information goes straight to our finance team — encrypted at rest and in transit.</p>
      <div className="form-section" style={{ padding: 0, background: 'none', border: 'none' }}>
        <h3>Taxpayer details</h3>
        <div className="form-grid">
          <Input label="Legal name (as shown on tax return)" placeholder="Joe Weston" defaultValue={USER.name} />
          <Input label="Business / entity name (if different)" placeholder={USER.company} defaultValue={USER.company} />
          <Select label="Federal tax classification">
            <option>LLC — single-member (disregarded)</option>
            <option>LLC — partnership</option>
            <option>LLC — C corporation</option>
            <option>LLC — S corporation</option>
            <option>C Corporation</option>
            <option>S Corporation</option>
            <option>Partnership</option>
            <option>Sole proprietor</option>
            <option>Individual</option>
          </Select>
          <Input label="Exemption code (if any)" placeholder="(optional)" />
          <Input wrapStyle={{ gridColumn: '1 / -1' }} label="Business address" placeholder="Street, City, State, ZIP" />
        </div>
      </div>
      <div className="form-section" style={{ padding: 0, background: 'none', border: 'none', marginTop: 18 }}>
        <h3>Taxpayer identification number</h3>
        <p className="sub">Enter either your EIN (for entities) or SSN (for individuals).</p>
        <div className="form-grid">
          <Input label="EIN" placeholder="12-3456789" icon={Ic.shield({ size: 16 })} />
          <Input label="SSN (if individual)" placeholder="•••-••-••••" />
        </div>
      </div>
      <label className="ob-check">
        <input type="checkbox" defaultChecked />
        <span>Under penalties of perjury, I certify the TIN above is correct and that I am not subject to backup withholding.</span>
      </label>
      <Footer nextLabel="Submit W-9" nextIcon={Ic.send({ size: 16 })} />
    </div>
  );

  const Banking = () => (
    <div className="ob-card">
      <span className="ob-eyebrow">Final Step · {total} of {total} · Banking Information</span>
      <h1>Set up direct deposit for your payouts</h1>
      <p className="ob-lede">Where weekly commissions land once a deal funds.</p>
      <div className="ob-secure">
        <span className="ob-secure-ic">{Ic.shield({ size: 16 })}</span>
        <div>
          <strong>Encrypted in transit and at rest.</strong>
          <span>Only visible to DebtResolvePro finance staff for payout processing. SOC 2 · AES-256.</span>
        </div>
      </div>
      <div className="form-section" style={{ padding: 0, background: 'none', border: 'none', marginTop: 18 }}>
        <h3>Account details</h3>
        <div className="ob-radio-row">
          <label className="ob-radio">
            <input type="radio" name="account-type" defaultChecked />
            <span>Business checking</span>
          </label>
          <label className="ob-radio">
            <input type="radio" name="account-type" />
            <span>Personal checking</span>
          </label>
        </div>
        <div className="form-grid">
          <Input wrapStyle={{ gridColumn: '1 / -1' }} label="Account holder name" placeholder={USER.company} defaultValue={USER.company} />
          <Input label="Routing number (9 digits)" placeholder="021000021" />
          <Input label="Bank (auto-detected)" placeholder="JPMorgan Chase Bank" defaultValue="JPMorgan Chase Bank" />
          <Input label="Account number (8–12 digits)" placeholder="••••••••" />
          <Input label="Confirm account number" placeholder="••••••••" />
        </div>
      </div>
      <label className="ob-check">
        <input type="checkbox" defaultChecked />
        <span>I authorize DebtResolvePro to deposit my commission payments into the account above and, if needed, debit any reversed or duplicated payments.</span>
      </label>
      <Footer nextLabel="Complete setup" nextIcon={Ic.check({ size: 16 })} />
    </div>
  );

  /* ---- Success ---- */
  const Success = () => (
    <div className="ob-card ob-success">
      <div className="ob-success-icon">{Ic.check({ size: 38 })}</div>
      <span className="ob-eyebrow">You're all set</span>
      <h1>Welcome aboard, {USER.name.split(' ')[0]}.</h1>
      <p className="ob-lede">Onboarding's done. You can now submit leads, send contracts, and track commissions from the portal. First payout posts the Friday after a deal funds.</p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 8 }}>
        <Button variant="primary" size="lg" iconRight={Ic.arrowRight({ size: 18 })} onClick={() => window.location.href = 'index.html'}>Enter the portal</Button>
        <Button variant="outline" size="lg" iconLeft={Ic.fileSigned({ size: 16 })} onClick={() => window.location.href = 'index.html'}>Create your first contract</Button>
      </div>
    </div>
  );

  let body;
  if (success) body = <Success />;
  else if (stepKey === 'welcome') body = <Welcome />;
  else if (stepKey === 'overview') body = <Overview />;
  else if (stepKey === 'agreement') body = <Agreement />;
  else if (stepKey === 'w9') body = <W9 />;
  else if (stepKey === 'banking') body = <Banking />;

  return (
    <div className="ob-shell">
      <Header />
      {!success && <Progress />}
      <main className="ob-main">
        <div className="ob-container">{body}</div>
      </main>
    </div>
  );
}

window.AffiliateOnboarding = Onboarding;
