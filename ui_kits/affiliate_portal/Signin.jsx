/* DebtResolvePro — Affiliate Portal sign-in screen (affiliates.debtrespro.com). */
const DS_SI = window.ClearBizDebtDesignSystem_f45b76;

function Signin() {
  const { Button, Input, Checkbox } = DS_SI;
  const Ic = window.AffiliateIcons;

  return (
    <div className="signin-wrap">
      <div className="signin-art">
        <a href="homepage.html"><img className="signin-art-logo" src="../../assets/logo-drp-white.png" alt="Debt Resolve Pro" /></a>
        <div className="signin-art-body">
          <span className="eyebrow">Affiliate Portal</span>
          <h2>Refer leads. Track contracts. Get paid.</h2>
          <p>One secure portal for everything you do as a DebtResolvePro partner — from submission to settlement.</p>
          <ul className="signin-feats">
            <li>{Ic.check({ size: 18 })}<span>Real-time pipeline visibility on every referral</span></li>
            <li>{Ic.check({ size: 18 })}<span>Trigger Zoho Sign contracts in one click</span></li>
            <li>{Ic.check({ size: 18 })}<span>Transparent commission tracking with Net-15 payouts</span></li>
            <li>{Ic.check({ size: 18 })}<span>Co-branded marketing assets, ready to download</span></li>
          </ul>
        </div>
        <div className="signin-art-foot">
          © 2026 Debt Resolve Pro · 220 Congress Park Dr, Delray Beach, FL 33445
        </div>
      </div>

      <div className="signin-form-side">
        <div className="signin-form-card">
          <h1>Sign in</h1>
          <p className="subtle">Welcome back. Sign in to access your affiliate dashboard.</p>

          <div className="signin-row">
            <Input label="Email" type="email" icon={Ic.mail({ size: 16 })} placeholder="you@yourcompany.com" defaultValue="joe.weston@yorkcap.com" />
            <Input label="Password" type="password" icon={Ic.lock({ size: 16 })} placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" defaultValue="demo-password" />

            <div className="signin-options" style={{ justifyContent: 'flex-end' }}>
              <a href="#">Forgot password?</a>
            </div>

            <Button variant="primary" size="lg" fullWidth iconRight={Ic.arrowRight({ size: 18 })} onClick={() => window.location.href = 'index.html'}>
              Sign in to Affiliate Portal
            </Button>
          </div>

          <div className="signin-divider">Or</div>

          <Button variant="outline" size="lg" fullWidth iconLeft={Ic.externalLink({ size: 16 })} onClick={() => window.location.href = 'become-affiliate.html'}>
            Learn about the Affiliate Program
          </Button>

          <div className="signin-foot">
            Not a partner yet? <a href="apply.html">Apply to join</a>
          </div>
        </div>
      </div>
    </div>
  );
}

window.AffiliateSignin = Signin;
