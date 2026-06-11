/* DebtResolvePro — Application thank-you confirmation page. */
const DS_TY = window.ClearBizDebtDesignSystem_f45b76;

function ThankYou() {
  const { Button } = DS_TY;
  const Ic = window.AffiliateIcons;

  return (
    <div className="thanks-wrap">
      <div className="thanks-nav">
        <a href="homepage.html"><img src="../../assets/logo-drp.png" alt="Debt Resolve Pro" /></a>
      </div>

      <div className="thanks-main">
        <div className="thanks-card">
          <div className="thanks-icon">{Ic.check({ size: 40 })}</div>
          <span className="eyebrow">Application Received</span>
          <h1>Thank you. We'll be in touch within 24 hours.</h1>
          <p className="lede">
            Your application has landed in our partner-success queue. A real person from our team will review it and reach out to discuss the program, answer your questions, and walk you through next steps.
          </p>

          <div className="thanks-next">
            <h3>What happens next</h3>
            <div className="thanks-step">
              <div className="step-num">1</div>
              <div className="step-body">
                <strong>Review</strong>
                <span>Our team reviews your application — usually within a few hours.</span>
              </div>
            </div>
            <div className="thanks-step">
              <div className="step-num">2</div>
              <div className="step-body">
                <strong>Discovery call</strong>
                <span>Within 24 hours, a partner-success rep will call or email to discuss the program and answer your questions.</span>
              </div>
            </div>
            <div className="thanks-step">
              <div className="step-num">3</div>
              <div className="step-body">
                <strong>Onboarding</strong>
                <span>Once approved, you'll have portal access within two business days and your first leads ready to close.</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 18 }}>
            <Button variant="primary" iconLeft={Ic.externalLink({ size: 16 })} onClick={() => window.location.href = 'become-affiliate.html'}>
              Back to Affiliate Program
            </Button>
            <Button variant="outline" iconLeft={Ic.phone({ size: 16 })}>
              Call 866-757-3339
            </Button>
          </div>
        </div>
      </div>

      <div className="thanks-foot">
        Questions? Email <a style={{ color: 'var(--blue-600)' }} href="mailto:partners@debtrespro.com">partners@debtrespro.com</a> · © 2026 Debt Resolve Pro
      </div>
    </div>
  );
}

window.AffiliateThankYou = ThankYou;
