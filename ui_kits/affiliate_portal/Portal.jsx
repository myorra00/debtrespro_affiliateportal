/* DebtResolvePro — Affiliate Portal SPA. */
const PDS = window.ClearBizDebtDesignSystem_f45b76;
const { useState, useMemo } = React;

/* ---- Mock data ---- */
const AFFILIATE = {
  agent: { name: 'Paul Weston', initials: 'PW', role: 'Senior Partner', id: 'AGT-2204', email: 'paul.weston@newyorkcap.com', phone: '(212) 555-0184' },
  company: { name: 'New York Capital', id: 'AFF-118', tier: 'Sales Partner', joined: 'Apr 2024', payoutTerms: 'Weekly', commissionRate: '15%' },
};

const LEADS = [
  { id: 'L-12159001', biz: 'Maple Ridge Catering Co.', owner: 'Jim Ortega', industry: 'Restaurant', state: 'TX', mca: 145000, submitted: 'Apr 24', status: 'New', daysAgo: 1, creditor: 'Yellowstone Advance', source: 'Direct' },
  { id: 'L-12159002', biz: 'BrightWay HVAC LLC', owner: 'Sandra Liu', industry: 'Construction', state: 'CA', mca: 96500, submitted: 'Apr 22', status: 'In Review', daysAgo: 3, creditor: 'Rapid Capital', source: 'Email Campaign' },
  { id: 'L-12159003', biz: 'Forge & Hammer Mfg', owner: 'Dwayne Brooks', industry: 'Manufacturing', state: 'PA', mca: 218000, submitted: 'Apr 20', status: 'Qualified', daysAgo: 5, creditor: 'Forward Line', source: 'Direct' },
  { id: 'L-12159004', biz: 'Cedar Grove Logistics', owner: 'Marisol Tran', industry: 'Logistics', state: 'FL', mca: 312000, submitted: 'Apr 18', status: 'Contract Sent', daysAgo: 7, creditor: 'Rapid Capital', source: 'Webinar' },
  { id: 'L-12159005', biz: 'Sunset Coastal Pediatrics', owner: 'Dr. R. Mendez', industry: 'Healthcare', state: 'FL', mca: 84000, submitted: 'Apr 14', status: 'Contract Signed', daysAgo: 11, creditor: 'Yellowstone Advance', source: 'Direct' },
  { id: 'L-12159006', biz: 'Northgate Auto Group', owner: 'Anthony Park', industry: 'Automotive', state: 'NJ', mca: 175500, submitted: 'Apr 09', status: 'Sold', daysAgo: 16, creditor: 'Forward Line', source: 'Direct' },
  { id: 'L-12159007', biz: 'Riverbend Specialty Foods', owner: 'Erin Castillo', industry: 'Food & Bev', state: 'OR', mca: 62800, submitted: 'Mar 30', status: 'Sold', daysAgo: 26, creditor: 'Mantis Funding', source: 'Email Campaign' },
  { id: 'L-12159008', biz: 'Atlas Construction Group', owner: 'Marcus Beale', industry: 'Construction', state: 'GA', mca: 410000, submitted: 'Mar 22', status: 'Disqualified', daysAgo: 34, creditor: '—', source: 'Direct' },
];

const CONTRACTS = [
  { id: 'CON-4421', biz: 'Cedar Grove Logistics', owner: 'Marisol Tran', amount: 312000, sent: 'Apr 22', status: 'Awaiting Signature', daysOut: 3 },
  { id: 'CON-4420', biz: 'Sunset Coastal Pediatrics', owner: 'Dr. R. Mendez', amount: 84000, sent: 'Apr 17', status: 'Signed', daysOut: 0 },
  { id: 'CON-4418', biz: 'Northgate Auto Group', owner: 'Anthony Park', amount: 175500, sent: 'Apr 11', status: 'Signed & Funded', daysOut: 0 },
  { id: 'CON-4417', biz: 'Riverbend Specialty Foods', owner: 'Erin Castillo', amount: 62800, sent: 'Apr 02', status: 'Signed & Funded', daysOut: 0 },
  { id: 'CON-4413', biz: 'Forge & Hammer Mfg', owner: 'Dwayne Brooks', amount: 218000, sent: 'Apr 23', status: 'Draft', daysOut: 0 },
  { id: 'CON-4405', biz: 'Halsey Tile & Stone', owner: 'Greg Halsey', amount: 49500, sent: 'Mar 12', status: 'Declined', daysOut: 0 },
];

const USERS = [
  { id: 'AGT-2204', name: 'Paul Weston',  initials: 'PW', role: 'Senior Partner',   email: 'paul.weston@newyorkcap.com',  status: 'Active',  lastActive: '2 min ago',  deals: 4, isMe: true },
  { id: 'AGT-2205', name: 'Sarah Klein',  initials: 'SK', role: 'Account Manager',  email: 'sarah.klein@newyorkcap.com',  status: 'Active',  lastActive: '4 hrs ago',  deals: 6 },
  { id: 'AGT-2206', name: 'Marco Diaz',   initials: 'MD', role: 'Sales Associate',  email: 'marco.diaz@newyorkcap.com',   status: 'Pending', lastActive: 'Invite sent', deals: 0 },
  { id: 'AGT-2207', name: 'Emma Park',    initials: 'EP', role: 'Operations Lead',  email: 'emma.park@newyorkcap.com',    status: 'Active',  lastActive: 'Yesterday',  deals: 2 },
];

const SOLD = [
  { id: 'C-9821', biz: 'Northgate Auto Group', owner: 'Anthony Park', mca: 175500, signed: 'Apr 13', resolvedEst: 92500, commission: 13875, upcoming: 1850, status: 'In Negotiation', fulfillment: 'Active' },
  { id: 'C-9810', biz: 'Riverbend Specialty Foods', owner: 'Erin Castillo', mca: 62800, signed: 'Apr 04', resolvedEst: 34500, commission: 5175, upcoming: 690, status: 'Settled', fulfillment: 'Complete' },
  { id: 'C-9785', biz: 'Brightside Salons', owner: 'Lauren Pace', mca: 48000, signed: 'Mar 21', resolvedEst: 22000, commission: 3300, upcoming: 440, status: 'Settled', fulfillment: 'Complete' },
  { id: 'C-9774', biz: 'Tucker Bros. Roofing', owner: 'Bill Tucker', mca: 128000, signed: 'Mar 12', resolvedEst: 64000, commission: 9600, upcoming: 1280, status: 'In Negotiation', fulfillment: 'Active' },
];

/* ---- Helpers ---- */
const fmt$ = (n) => '$' + Math.round(n).toLocaleString();
const toneFor = (status) => ({
  'New': 'info',
  'In Review': 'warning',
  'Qualified': 'info',
  'Contract Sent': 'warning',
  'Contract Signed': 'success',
  'Sold': 'success',
  'Disqualified': 'neutral',
  'Settled': 'success',
  'In Negotiation': 'info',
  'Active': 'info',
  'Complete': 'success',
  'Awaiting Signature': 'warning',
  'Signed': 'success',
  'Signed & Funded': 'success',
  'Draft': 'neutral',
  'Declined': 'danger',
}[status] || 'neutral');

function Portal() {
  const { Card, Badge, Button, Avatar, Input, Select, Eyebrow } = PDS;
  const Ic = window.AffiliateIcons;
  const [page, setPage] = useState('dashboard');
  const [leadFilter, setLeadFilter] = useState('All');
  const [search, setSearch] = useState('');

  const TITLES = {
    dashboard: 'Dashboard',
    submit: 'Create Contract',
    leads: 'Leads',
    contracts: 'Contracts',
    sold: 'Sold Clients',
    users: 'Users',
    training: 'Training & Support',
    profile: 'Profile',
  };

  const navItem = (key, icon, label, count, aliases) => {
    const isActive = page === key || (aliases && aliases.includes(page));
    return (
      <button className={'sb-item' + (isActive ? ' active' : '')} onClick={() => setPage(key)}>
        <span className="sb-ico">{icon({ size: 19 })}</span>{label}
        {count != null && <span className="sb-count">{count}</span>}
      </button>
    );
  };

  /* ---- Dashboard ---- */
  const Dashboard = () => {
    const pendingContracts = CONTRACTS.filter(c => ['Awaiting Signature', 'Draft'].includes(c.status)).length;
    const pipelineValue = LEADS.filter(l => !['Sold', 'Disqualified'].includes(l.status)).reduce((a, l) => a + l.mca * 0.15 * 0.45, 0);

    const soldCount = SOLD.length;
    const debtEnrolled = SOLD.reduce((a, s) => a + s.mca, 0);
    const commissionsEarned = SOLD.reduce((a, s) => a + s.commission, 0);
    const upcomingTotal = SOLD.reduce((a, s) => a + s.upcoming, 0);
    const avgDealSize = soldCount > 0 ? Math.round(debtEnrolled / soldCount) : 0;

    const stages = [
      { k: 'New', v: LEADS.filter(l => l.status === 'New').length, pct: 12 },
      { k: 'In Review', v: LEADS.filter(l => l.status === 'In Review').length, pct: 30 },
      { k: 'Qualified', v: LEADS.filter(l => l.status === 'Qualified').length, pct: 55 },
      { k: 'Contract', v: LEADS.filter(l => l.status.startsWith('Contract')).length, pct: 80 },
      { k: 'Sold', v: LEADS.filter(l => l.status === 'Sold').length, pct: 100 },
    ];

    const sumMca = (preds) => LEADS.filter(preds).reduce((a, l) => a + l.mca, 0);
    const funnel = [
      { k: 'New',         amount: sumMca(l => l.status === 'New'),                    color: '#93B5F0' },
      { k: 'In Review',   amount: sumMca(l => l.status === 'In Review'),              color: '#5B8AE0' },
      { k: 'Qualified',   amount: sumMca(l => l.status === 'Qualified'),              color: '#2563EB' },
      { k: 'Contract',    amount: sumMca(l => l.status.startsWith('Contract')),       color: 'var(--navy-900)' },
      { k: 'Sold/Funded', amount: SOLD.reduce((a, s) => a + s.mca, 0),                color: 'var(--green-500)' },
    ];
    const funnelTotal = funnel.reduce((a, s) => a + s.amount, 0);
    const funnelMax = Math.max(...funnel.map(s => s.amount), 1);

    return (
      <>
        <div className="page-head">
          <div>
            <h1>{AFFILIATE.company.name}</h1>
            <p>{AFFILIATE.company.tier} · {AFFILIATE.company.commissionRate} commission · {AFFILIATE.company.payoutTerms} payouts · Affiliate since {AFFILIATE.company.joined}</p>
          </div>
          <div className="page-head-actions">
            <Button variant="outline" iconLeft={Ic.download({ size: 16 })}>Export</Button>
            <Button variant="primary" iconLeft={Ic.fileSigned({ size: 16 })} onClick={() => setPage('submit')}>Create Contract</Button>
          </div>
        </div>

        <div className="kpi-grid">
          <div className="kpi">
            <span className="label">Sold Deals</span>
            <span className="v">{soldCount}</span>
            <span className="delta up">{Ic.trendingUp({ size: 12 })} +1 this month</span>
            <span className="ic blue">{Ic.check({ size: 18 })}</span>
          </div>
          <div className="kpi">
            <span className="label">Debt Enrolled</span>
            <span className="v">{fmt$(debtEnrolled)}</span>
            <span className="delta flat">Across {soldCount} sold deals</span>
            <span className="ic navy">{Ic.handshake({ size: 18 })}</span>
          </div>
          <div className="kpi">
            <span className="label">Avg. Deal Size</span>
            <span className="v">{fmt$(avgDealSize)}</span>
            <span className="delta up">{Ic.trendingUp({ size: 12 })} per sold deal</span>
            <span className="ic amber">{Ic.trendingUp({ size: 18 })}</span>
          </div>
          <div className="kpi">
            <span className="label">Commissions Earned</span>
            <span className="v">{fmt$(commissionsEarned)}</span>
            <span className="delta up">{Ic.trendingUp({ size: 12 })} {AFFILIATE.company.commissionRate} rate</span>
            <span className="ic green">{Ic.dollar({ size: 18 })}</span>
          </div>
        </div>

        <div className="pipeline-hero">
          <div className="glow"></div>
          <div className="inner">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
              <div>
                <h3>Live Pipeline</h3>
                <div className="sub">Estimated value of your active referrals at this stage: <strong style={{ color: '#A6E06B' }}>{fmt$(pipelineValue)}</strong></div>
              </div>
              <Badge tone="info" dot style={{ background: 'rgba(255,255,255,0.16)', color: '#fff' }}>Updated 2 min ago</Badge>
            </div>
            <div className="pipeline-stages" style={{ marginTop: 18 }}>
              {stages.map((s, i) => (
                <div className={'pipeline-stage' + (i === stages.length - 1 ? ' green' : '')} key={s.k}>
                  <div className="k">{s.k}</div>
                  <div className="v">{s.v}</div>
                  <div className="bar"><div style={{ width: s.pct + '%' }}></div></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Card title="Enrolled Debt Funnel" subtitle="Dollar value of debt enrolled at each stage" padded style={{ marginBottom: 22 }}>
          <div className="funnel">
            {funnel.map((s) => {
              const widthPct = Math.max(8, Math.round((s.amount / funnelMax) * 100));
              const sharePct = funnelTotal > 0 ? Math.round((s.amount / funnelTotal) * 1000) / 10 : 0;
              return (
                <div className="funnel-row" key={s.k}>
                  <div className="funnel-label">{s.k}</div>
                  <div className="funnel-bar">
                    <div className="funnel-fill" style={{ width: widthPct + '%', background: s.color }}>
                      <span className="pct">{sharePct}%</span>
                    </div>
                  </div>
                  <div className="funnel-amount">{fmt$(s.amount)}</div>
                </div>
              );
            })}
          </div>
          <div className="funnel-meta">
            <span className="k">Total enrolled debt across all stages</span>
            <span className="v">{fmt$(funnelTotal)}</span>
          </div>
        </Card>

        <div className="cols-2">
          <Card title="Sold deals" subtitle="Closed and in service — your commission record" padded actions={<Button variant="ghost" iconRight={Ic.chevronRight({ size: 14 })} onClick={() => setPage('sold')}>View all</Button>}>
            <table className="tbl tbl-totals">
              <thead>
                <tr><th>Date Signed</th><th>Business</th><th>Total Debt</th><th>Commission Earned</th><th>Upcoming Payment</th></tr>
              </thead>
              <tbody>
                {SOLD.map((s) => (
                  <tr key={s.id} onClick={() => setPage('sold')}>
                    <td><span className="ago">{s.signed}</span></td>
                    <td>
                      <div className="biz">
                        <span className="name">{s.biz}</span>
                        <span className="sub">{s.owner}</span>
                      </div>
                    </td>
                    <td className="money">{fmt$(s.mca)}</td>
                    <td className="money">{fmt$(s.commission)}</td>
                    <td className="money">{fmt$(s.upcoming)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Totals</td>
                  <td>{soldCount} deals</td>
                  <td className="money">{fmt$(debtEnrolled)}</td>
                  <td className="money">{fmt$(commissionsEarned)}</td>
                  <td className="money">{fmt$(upcomingTotal)}</td>
                </tr>
              </tfoot>
            </table>
          </Card>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <Card title="Next payout" padded>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, color: 'var(--ink-900)' }} className="tnum">{fmt$(14775)}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-500)', marginTop: 4 }}>Scheduled May 1 · ACH to **** 4421</div>
              <div style={{ marginTop: 14, padding: 12, background: 'var(--blue-50)', borderRadius: 'var(--radius-md)', fontSize: 13, color: 'var(--blue-700)', display: 'flex', alignItems: 'center', gap: 8 }}>
                {Ic.clock({ size: 14 })}
                <span><strong>2 contracts</strong> closing this week — will be added to next payout.</span>
              </div>
              <Button variant="outline" fullWidth style={{ marginTop: 14 }} iconRight={Ic.chevronRight({ size: 14 })} onClick={() => setPage('sold')}>View commissions</Button>
            </Card>

            <Card title="Affiliate manager" padded>
              <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
                <Avatar initials="DW" size={46} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--ink-900)' }}>Dana Wu</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-500)' }}>Partner Success Lead</div>
                </div>
              </div>
              <Button variant="primary" fullWidth style={{ marginTop: 16 }} iconLeft={Ic.send({ size: 16 })}>Send a message</Button>
              <Button variant="ghost" fullWidth style={{ marginTop: 8 }} iconLeft={Ic.phone({ size: 16 })}>Schedule a call</Button>
            </Card>
          </div>
        </div>

      </>
    );
  };

  /* ---- Create Contract ---- */
  const SubmitLead = () => (
    <>
      <div className="page-head">
        <div>
          <h1>Create Contract</h1>
          <p>Enter your customer's information to generate and send a contract via Zoho Sign. Once signed, the deal flows into our service team and your commission clock starts.</p>
        </div>
      </div>

      <div className="form-section">
        <h3>Customer contact</h3>
        <p className="sub">Who's signing the contract?</p>
        <div className="form-grid">
          <Input label="Business legal name" placeholder="e.g. Maple Ridge Catering Co." />
          <Input label="DBA / Trade name" placeholder="(optional)" />
          <Input label="Owner first name" placeholder="Jim" />
          <Input label="Owner last name" placeholder="Ortega" />
          <Input label="Email" type="email" placeholder="owner@business.com" icon={Ic.mail({ size: 16 })} />
          <Input label="Mobile phone" type="tel" placeholder="(555) 555-5555" icon={Ic.phone({ size: 16 })} />
        </div>
      </div>

      <div className="form-section">
        <h3>Business details</h3>
        <p className="sub">Pre-filled into the contract for accuracy.</p>
        <div className="form-grid">
          <Select label="Industry">
            <option>Restaurant / Food &amp; Bev</option><option>Construction</option><option>Healthcare</option><option>Manufacturing</option><option>Retail</option><option>Logistics &amp; Transport</option><option>Professional Services</option><option>Other</option>
          </Select>
          <Select label="Annual revenue">
            <option>$250k – $500k</option><option>$500k – $1M</option><option>$1M – $5M</option><option>$5M – $10M</option><option>$10M+</option>
          </Select>
          <Input label="State" placeholder="TX" />
          <Input label="Time in business" placeholder="e.g. 4 years" />
          <Input wrapStyle={{ gridColumn: '1 / -1' }} label="Business address" placeholder="Street, City, State, ZIP" />
        </div>
      </div>

      <div className="form-section">
        <h3>MCA debt details</h3>
        <p className="sub">Required for the contract terms. Fill in what you have — our team will reconcile any gaps after signing.</p>
        <div className="form-grid">
          <Input label="Total MCA debt enrolled" placeholder="$145,000" />
          <Input label="Number of MCAs" placeholder="3" />
          <Input label="Primary creditor(s)" placeholder="Yellowstone, Rapid Capital, …" />
          <Select label="Current status">
            <option>Current on payments</option><option>Behind on payments</option><option>Defaulted</option><option>Sued / UCC filing</option><option>Unknown</option>
          </Select>
          <div className="full">
            <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--ink-700)', marginBottom: 7 }}>Notes for our team</label>
            <textarea rows={4} placeholder="Anything else worth knowing — pressure points, urgency, prior attempts, etc." style={{ width: '100%', padding: '12px 14px', border: '1.5px solid var(--ink-200)', borderRadius: 'var(--radius-md)', fontFamily: 'inherit', fontSize: 'var(--text-base)', color: 'var(--ink-900)', background: 'var(--ink-50)', resize: 'vertical' }}></textarea>
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Send the contract</h3>
        <p className="sub">When you click Create Contract, Zoho Sign pre-fills the agreement with the information above and emails it to the customer for signature.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--ink-700)' }}>
            <input type="checkbox" defaultChecked style={{ marginTop: 3 }} />
            <span>I confirm I have the customer's authorization to generate and send this contract.</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--ink-700)' }}>
            <input type="checkbox" defaultChecked style={{ marginTop: 3 }} />
            <span>I understand this contract will be stamped with my affiliate ID ({AFFILIATE.company.id}) for attribution and commission.</span>
          </label>
        </div>
      </div>

      <div className="form-actions">
        <Button variant="ghost" onClick={() => setPage('dashboard')}>Cancel</Button>
        <Button variant="outline">Save draft</Button>
        <Button variant="primary" iconRight={Ic.send({ size: 16 })} onClick={() => { setPage('contracts'); }}>Create Contract</Button>
      </div>
    </>
  );

  /* ---- My Leads ---- */
  const MyLeads = () => {
    const filters = ['All', 'New', 'In Review', 'Qualified', 'Contract Sent', 'Sold', 'Disqualified'];
    const filtered = useMemo(() => {
      let rows = LEADS;
      if (leadFilter !== 'All') rows = rows.filter(l => l.status === leadFilter);
      if (search) {
        const q = search.toLowerCase();
        rows = rows.filter(l => l.biz.toLowerCase().includes(q) || l.owner.toLowerCase().includes(q) || l.id.toLowerCase().includes(q));
      }
      return rows;
    }, [leadFilter, search]);

    return (
      <>
        <div className="page-head">
          <div>
            <h1>Leads</h1>
            <p>Every referral you've submitted, with live status. Click any row for full detail.</p>
          </div>
          <div className="page-head-actions">
            <Button variant="outline" iconLeft={Ic.download({ size: 16 })}>Export CSV</Button>
            <Button variant="primary" iconLeft={Ic.fileSigned({ size: 16 })} onClick={() => setPage('submit')}>Create Contract</Button>
          </div>
        </div>

        <Card padded>
          <div className="filters">
            <div className="search-box">
              {Ic.search({ size: 16, style: { color: 'var(--ink-400)' } })}
              <input placeholder="Search by business, owner, or lead ID" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            {filters.map(f => (
              <button key={f} className={'chip' + (leadFilter === f ? ' active' : '')} onClick={() => setLeadFilter(f)}>{f}</button>
            ))}
            <span style={{ marginLeft: 'auto', fontSize: 13, color: 'var(--ink-500)', fontWeight: 600 }}>{filtered.length} of {LEADS.length} leads</span>
          </div>

          <table className="tbl">
            <thead>
              <tr>
                <th>Lead ID</th>
                <th>Business</th>
                <th>Industry</th>
                <th>Creditor(s)</th>
                <th>MCA</th>
                <th>Status</th>
                <th>Submitted</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(l => (
                <tr key={l.id}>
                  <td><span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--blue-700)' }}>{l.id}</span></td>
                  <td>
                    <div className="biz">
                      <span className="name">{l.biz}</span>
                      <span className="sub">{l.owner} · {l.state}</span>
                    </div>
                  </td>
                  <td>{l.industry}</td>
                  <td>{l.creditor}</td>
                  <td className="money">{fmt$(l.mca)}</td>
                  <td><Badge tone={toneFor(l.status)} dot>{l.status}</Badge></td>
                  <td><span className="ago">{l.submitted} · {l.daysAgo}d ago</span></td>
                  <td style={{ textAlign: 'right' }}>{Ic.chevronRight({ size: 16, style: { color: 'var(--ink-400)' } })}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={8}>
                  <div className="empty">
                    <div className="em-ic">{Ic.list({ size: 24 })}</div>
                    <div>No leads match those filters.</div>
                  </div>
                </td></tr>
              )}
            </tbody>
          </table>
        </Card>
      </>
    );
  };

  /* ---- Contracts ---- */
  const Contracts = () => {
    const groups = [
      { label: 'Action required', items: CONTRACTS.filter(c => c.status === 'Draft') },
      { label: 'Out for signature', items: CONTRACTS.filter(c => c.status === 'Awaiting Signature') },
      { label: 'Signed & in progress', items: CONTRACTS.filter(c => ['Signed', 'Signed & Funded'].includes(c.status)) },
      { label: 'Declined', items: CONTRACTS.filter(c => c.status === 'Declined') },
    ];

    return (
      <>
        <div className="page-head">
          <div>
            <h1>Contracts</h1>
            <p>Track every Zoho Sign agreement tied to your referrals — from draft to fully funded.</p>
          </div>
          <div className="page-head-actions">
            <Button variant="primary" iconLeft={Ic.plus({ size: 16 })} onClick={() => setPage('submit')}>Create Contract</Button>
          </div>
        </div>

        <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className="kpi"><span className="label">Drafts</span><span className="v">{CONTRACTS.filter(c => c.status === 'Draft').length}</span><span className="delta flat">Ready to send</span><span className="ic navy">{Ic.fileSigned({ size: 18 })}</span></div>
          <div className="kpi"><span className="label">Awaiting Signature</span><span className="v">{CONTRACTS.filter(c => c.status === 'Awaiting Signature').length}</span><span className="delta flat">Avg. 3 days outstanding</span><span className="ic amber">{Ic.clock({ size: 18 })}</span></div>
          <div className="kpi"><span className="label">Signed</span><span className="v">{CONTRACTS.filter(c => c.status === 'Signed' || c.status === 'Signed & Funded').length}</span><span className="delta up">{Ic.trendingUp({ size: 12 })} +2 this month</span><span className="ic green">{Ic.check({ size: 18 })}</span></div>
          <div className="kpi"><span className="label">Declined</span><span className="v">{CONTRACTS.filter(c => c.status === 'Declined').length}</span><span className="delta flat">Last 60 days</span><span className="ic blue">{Ic.alert({ size: 18 })}</span></div>
        </div>

        {groups.filter(g => g.items.length > 0).map((g, gi) => (
          <Card key={gi} title={g.label} padded style={{ marginBottom: 18 }}>
            {g.items.map(c => (
              <div className="contract-row" key={c.id}>
                <div className="ic">{Ic.fileSigned({ size: 20 })}</div>
                <div className="meta">
                  <div className="name">{c.biz} <span style={{ color: 'var(--ink-400)', fontWeight: 500, fontSize: 13, marginLeft: 6 }}>{c.id}</span></div>
                  <div className="sub">{c.owner} · {fmt$(c.amount)} · Sent {c.sent}{c.daysOut > 0 ? ` · ${c.daysOut}d outstanding` : ''}</div>
                </div>
                <div className="right">
                  <Badge tone={toneFor(c.status)} dot>{c.status}</Badge>
                  {c.status === 'Draft' && <Button size="sm" variant="primary" iconRight={Ic.send({ size: 14 })}>Send</Button>}
                  {c.status === 'Awaiting Signature' && <Button size="sm" variant="outline" iconLeft={Ic.send({ size: 14 })}>Resend</Button>}
                  <Button size="sm" variant="ghost" iconLeft={Ic.externalLink({ size: 14 })}>Open</Button>
                </div>
              </div>
            ))}
          </Card>
        ))}
      </>
    );
  };

  /* ---- Sold Clients ---- */
  const SoldClients = () => {
    const totalCommission = SOLD.reduce((a, s) => a + s.commission, 0);
    const totalResolved = SOLD.reduce((a, s) => a + s.resolvedEst, 0);
    const totalMca = SOLD.reduce((a, s) => a + s.mca, 0);

    return (
      <>
        <div className="page-head">
          <div>
            <h1>Sold Clients</h1>
            <p>Converted clients attributed to {AFFILIATE.company.name}. Attribution travels with the record from Lead to Contact.</p>
          </div>
          <div className="page-head-actions">
            <Button variant="outline" iconLeft={Ic.download({ size: 16 })}>Export</Button>
          </div>
        </div>

        <div className="kpi-grid">
          <div className="kpi"><span className="label">Sold Clients</span><span className="v">{SOLD.length}</span><span className="delta up">{Ic.trendingUp({ size: 12 })} +1 this month</span><span className="ic blue">{Ic.users({ size: 18 })}</span></div>
          <div className="kpi"><span className="label">Total MCA Resolved</span><span className="v">{fmt$(totalResolved)}</span><span className="delta flat">Out of {fmt$(totalMca)} owed</span><span className="ic navy">{Ic.handshake({ size: 18 })}</span></div>
          <div className="kpi"><span className="label">Commissions Earned</span><span className="v">{fmt$(totalCommission)}</span><span className="delta up">{Ic.trendingUp({ size: 12 })} {AFFILIATE.company.commissionRate} rate</span><span className="ic green">{Ic.dollar({ size: 18 })}</span></div>
          <div className="kpi"><span className="label">Avg. Settlement Time</span><span className="v">22 wk</span><span className="delta flat">From signed to funded</span><span className="ic amber">{Ic.clock({ size: 18 })}</span></div>
        </div>

        <Card padded title="Sold clients" subtitle="Pulled live from Zoho Contacts (filtered by your affiliate ID)">
          <table className="tbl">
            <thead>
              <tr>
                <th>Client ID</th>
                <th>Business</th>
                <th>Original MCA</th>
                <th>Est. Resolved</th>
                <th>Your Commission</th>
                <th>Settlement</th>
                <th>Fulfillment</th>
                <th>Signed</th>
              </tr>
            </thead>
            <tbody>
              {SOLD.map(c => (
                <tr key={c.id}>
                  <td><span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--blue-700)' }}>{c.id}</span></td>
                  <td>
                    <div className="biz">
                      <span className="name">{c.biz}</span>
                      <span className="sub">{c.owner}</span>
                    </div>
                  </td>
                  <td className="money">{fmt$(c.mca)}</td>
                  <td className="money" style={{ color: 'var(--green-600, var(--green-500))' }}>{fmt$(c.resolvedEst)}</td>
                  <td className="money">{fmt$(c.commission)}</td>
                  <td><Badge tone={toneFor(c.status)} dot>{c.status}</Badge></td>
                  <td><Badge tone={toneFor(c.fulfillment)} dot>{c.fulfillment}</Badge></td>
                  <td><span className="ago">{c.signed}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </>
    );
  };

  /* ---- Profile ---- */
  const Profile = () => (
    <>
      <div className="page-head">
        <div>
          <h1>Profile</h1>
          <p>Your account, your parent affiliate company, and payout details.</p>
        </div>
        <div className="page-head-actions">
          <Button variant="outline" iconLeft={Ic.settings({ size: 16 })}>Account settings</Button>
        </div>
      </div>

      <div className="profile-grid">
        <div className="profile-id">
          <Avatar initials={AFFILIATE.agent.initials} size={84} />
          <div className="name">{AFFILIATE.agent.name}</div>
          <div className="role">{AFFILIATE.agent.role} · {AFFILIATE.company.name}</div>
          <div className="row">
            <div><div className="k">Agent ID</div><div className="v">{AFFILIATE.agent.id}</div></div>
            <div><div className="k">Affiliate ID</div><div className="v">{AFFILIATE.company.id}</div></div>
            <div><div className="k">Tier</div><div className="v">{AFFILIATE.company.tier}</div></div>
            <div><div className="k">Joined</div><div className="v">{AFFILIATE.company.joined}</div></div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <Card title="Agent contact" padded>
            <div className="kv-list">
              <div className="kv"><span className="k">Email</span><span className="v">{AFFILIATE.agent.email}</span></div>
              <div className="kv"><span className="k">Phone</span><span className="v">{AFFILIATE.agent.phone}</span></div>
              <div className="kv"><span className="k">Time zone</span><span className="v">America / New_York</span></div>
              <div className="kv"><span className="k">2FA</span><span className="v" style={{ color: 'var(--green-600, var(--green-500))' }}>Enabled</span></div>
            </div>
            <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
              <Button variant="outline" iconLeft={Ic.mail({ size: 14 })}>Change email</Button>
              <Button variant="ghost" iconLeft={Ic.lock({ size: 14 })}>Reset password</Button>
            </div>
          </Card>

          <Card title="Payout details" subtitle="Where your commissions land" padded>
            <div className="kv-list">
              <div className="kv"><span className="k">Method</span><span className="v">ACH transfer</span></div>
              <div className="kv"><span className="k">Account</span><span className="v">JPMorgan Chase · **** 4421</span></div>
              <div className="kv"><span className="k">Routing</span><span className="v">**** **** 8901</span></div>
              <div className="kv"><span className="k">Schedule</span><span className="v">{AFFILIATE.company.payoutTerms}</span></div>
              <div className="kv"><span className="k">Tax form</span><span className="v">W-9 on file</span></div>
              <div className="kv"><span className="k">YTD 1099 total</span><span className="v">$31,950</span></div>
            </div>
            <div style={{ marginTop: 18 }}>
              <Button variant="outline" iconLeft={Ic.download({ size: 14 })}>Download 1099 (2025)</Button>
            </div>
          </Card>

          <Card title={AFFILIATE.company.name} subtitle={"Parent affiliate · " + AFFILIATE.company.id} padded>
            <div className="kv-list">
              <div className="kv"><span className="k">Commission rate</span><span className="v">{AFFILIATE.company.commissionRate} of resolved debt</span></div>
              <div className="kv"><span className="k">Tier</span><span className="v">{AFFILIATE.company.tier}</span></div>
              <div className="kv"><span className="k">Active agents</span><span className="v">4</span></div>
              <div className="kv"><span className="k">Master contract</span><span className="v" style={{ color: 'var(--green-600, var(--green-500))' }}>Signed Apr 2024</span></div>
            </div>
            <div style={{ marginTop: 18 }}>
              <Button variant="ghost" iconRight={Ic.externalLink({ size: 14 })}>View parent affiliate record</Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );

  /* ---- Users ---- */
  const Users = () => {
    const activeCount = USERS.filter(u => u.status === 'Active').length;
    const pendingCount = USERS.filter(u => u.status === 'Pending').length;

    return (
      <>
        <div className="page-head">
          <div>
            <h1>Users</h1>
            <p>Invite and manage the team at {AFFILIATE.company.name}. Each user gets their own portal login and their own commission attribution.</p>
          </div>
          <div className="page-head-actions">
            <Button variant="outline" iconLeft={Ic.download({ size: 16 })}>Export</Button>
            <Button variant="primary" iconLeft={Ic.plus({ size: 16 })}>Invite User</Button>
          </div>
        </div>

        <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="kpi"><span className="label">Total Users</span><span className="v">{USERS.length}</span><span className="delta flat">On your team</span><span className="ic blue">{Ic.users({ size: 18 })}</span></div>
          <div className="kpi"><span className="label">Active</span><span className="v">{activeCount}</span><span className="delta up">{Ic.trendingUp({ size: 12 })} Closing deals</span><span className="ic green">{Ic.check({ size: 18 })}</span></div>
          <div className="kpi"><span className="label">Pending Invite</span><span className="v">{pendingCount}</span><span className="delta flat">Awaiting acceptance</span><span className="ic amber">{Ic.clock({ size: 18 })}</span></div>
        </div>

        <Card title="Your team" subtitle="Manage portal access for users at your affiliate company" padded>
          <table className="tbl">
            <thead>
              <tr><th>User</th><th>Role</th><th>Email</th><th>Deals</th><th>Status</th><th>Last Active</th><th></th></tr>
            </thead>
            <tbody>
              {USERS.map(u => (
                <tr key={u.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <Avatar initials={u.initials} size={36} />
                      <div className="biz">
                        <span className="name">{u.name}{u.isMe && <span style={{ marginLeft: 8, fontSize: 11, fontWeight: 700, color: 'var(--blue-600)', background: 'var(--blue-50)', padding: '2px 7px', borderRadius: 999 }}>You</span>}</span>
                        <span className="sub">{u.id}</span>
                      </div>
                    </div>
                  </td>
                  <td>{u.role}</td>
                  <td><span style={{ color: 'var(--ink-700)' }}>{u.email}</span></td>
                  <td className="money">{u.deals}</td>
                  <td><Badge tone={u.status === 'Active' ? 'success' : 'warning'} dot>{u.status}</Badge></td>
                  <td><span className="ago">{u.lastActive}</span></td>
                  <td style={{ textAlign: 'right' }}>
                    {!u.isMe && <Button size="sm" variant="ghost" iconLeft={Ic.settings({ size: 14 })}>Manage</Button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card title="Permissions" subtitle="What each role can do in the portal" padded style={{ marginTop: 22 }}>
          <div className="cols-3">
            <div className="resource-tile">
              <div className="ic">{Ic.shield({ size: 22 })}</div>
              <div className="ttl">Senior Partner</div>
              <div className="sub">Full access — create contracts, manage users, view all team deals and commissions.</div>
            </div>
            <div className="resource-tile">
              <div className="ic">{Ic.handshake({ size: 22 })}</div>
              <div className="ttl">Account Manager</div>
              <div className="sub">Create contracts, view own pipeline and commissions. Cannot manage users.</div>
            </div>
            <div className="resource-tile">
              <div className="ic">{Ic.user({ size: 22 })}</div>
              <div className="ttl">Sales Associate</div>
              <div className="sub">Create contracts and view own deals. Read-only on team metrics.</div>
            </div>
          </div>
        </Card>
      </>
    );
  };

  /* ---- Training & Support ---- */
  const Training = () => (
    <>
      <div className="page-head">
        <div>
          <h1>Training &amp; Support</h1>
          <p>Resources, training videos, and direct access to your affiliate manager — everything you need to close more deals.</p>
        </div>
      </div>

      <Card title="Marketing resources" subtitle="Co-branded assets, scripts, and templates — ready to send" padded style={{ marginBottom: 22 }}>
        <div className="cols-3">
          <div className="resource-tile">
            <div className="ic">{Ic.fileSigned({ size: 22 })}</div>
            <div className="ttl">Affiliate One-Pager</div>
            <div className="sub">Co-branded PDF you can email to prospects. Updated April 2026.</div>
            <Button size="sm" variant="ghost" iconLeft={Ic.download({ size: 14 })} style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Download PDF</Button>
          </div>
          <div className="resource-tile">
            <div className="ic">{Ic.send({ size: 22 })}</div>
            <div className="ttl">Email Templates</div>
            <div className="sub">Six proven cold and warm-intro sequences for ISOs and CPAs.</div>
            <Button size="sm" variant="ghost" iconLeft={Ic.externalLink({ size: 14 })} style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Open in portal</Button>
          </div>
          <div className="resource-tile">
            <div className="ic">{Ic.list({ size: 22 })}</div>
            <div className="ttl">Discovery Script</div>
            <div className="sub">Five-question script to qualify a business owner in under 4 minutes.</div>
            <Button size="sm" variant="ghost" iconLeft={Ic.download({ size: 14 })} style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Download PDF</Button>
          </div>
          <div className="resource-tile">
            <div className="ic">{Ic.handshake({ size: 22 })}</div>
            <div className="ttl">Objection Handlers</div>
            <div className="sub">Responses to the 12 most common pushbacks on MCA debt relief.</div>
            <Button size="sm" variant="ghost" iconLeft={Ic.download({ size: 14 })} style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Download PDF</Button>
          </div>
          <div className="resource-tile">
            <div className="ic">{Ic.dollar({ size: 22 })}</div>
            <div className="ttl">Commission Calculator</div>
            <div className="sub">Estimate your payout on any deal in seconds — by debt size and tier.</div>
            <Button size="sm" variant="ghost" iconLeft={Ic.externalLink({ size: 14 })} style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Open calculator</Button>
          </div>
          <div className="resource-tile">
            <div className="ic">{Ic.award({ size: 22 })}</div>
            <div className="ttl">Brand &amp; Logo Kit</div>
            <div className="sub">DebtResolvePro logos, color palette, and co-brand guidelines.</div>
            <Button size="sm" variant="ghost" iconLeft={Ic.download({ size: 14 })} style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Download ZIP</Button>
          </div>
        </div>
      </Card>

      <Card title="Training library" subtitle="Self-serve courses and on-demand video sessions" padded style={{ marginBottom: 22 }}>
        <div className="cols-3">
          <div className="resource-tile">
            <div className="ic" style={{ background: 'rgba(98,178,47,0.12)', color: 'var(--green-500)' }}>{Ic.zap({ size: 22 })}</div>
            <div className="ttl">Onboarding 101</div>
            <div className="sub">6 videos · 38 min total. Everything from portal navigation to your first contract.</div>
            <Button size="sm" variant="primary" iconRight={Ic.arrowRight({ size: 14 })} style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Start course</Button>
          </div>
          <div className="resource-tile">
            <div className="ic" style={{ background: 'rgba(98,178,47,0.12)', color: 'var(--green-500)' }}>{Ic.trendingUp({ size: 22 })}</div>
            <div className="ttl">Close Rate Masterclass</div>
            <div className="sub">4 videos · 52 min. From discovery to signed contract — what top closers do differently.</div>
            <Button size="sm" variant="outline" iconRight={Ic.arrowRight({ size: 14 })} style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Continue</Button>
          </div>
          <div className="resource-tile">
            <div className="ic" style={{ background: 'rgba(98,178,47,0.12)', color: 'var(--green-500)' }}>{Ic.search({ size: 22 })}</div>
            <div className="ttl">MCA Debt 360</div>
            <div className="sub">Deep-dive on funding structures, default triggers, and creditor behavior.</div>
            <Button size="sm" variant="outline" iconRight={Ic.arrowRight({ size: 14 })} style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Start course</Button>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 14px 0', borderTop: '1px solid var(--border-subtle)', marginTop: 18 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--ink-900)' }}>Live weekly training</div>
            <div style={{ fontSize: 13, color: 'var(--ink-500)', marginTop: 2 }}>Every Thursday at 1 PM ET · open Q&amp;A with our top closers</div>
          </div>
          <Button variant="outline" iconRight={Ic.externalLink({ size: 14 })}>Register</Button>
        </div>
      </Card>

      <div className="cols-2">
        <Card title="Your affiliate manager" padded>
          <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
            <Avatar initials="DW" size={56} />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--ink-900)', fontSize: 17 }}>Dana Wu</div>
              <div style={{ fontSize: 13, color: 'var(--ink-500)' }}>Partner Success Lead · dana.wu@debtrespro.com</div>
              <div style={{ fontSize: 13, color: 'var(--ink-500)', marginTop: 4 }}>Direct: (561) 555-0142</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
            <Button variant="primary" iconLeft={Ic.send({ size: 14 })}>Send a message</Button>
            <Button variant="outline" iconLeft={Ic.phone({ size: 14 })}>Schedule a call</Button>
          </div>
        </Card>

        <Card title="Help & support" subtitle="Get answers fast" padded>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 14, borderRadius: 'var(--radius-md)', background: 'var(--ink-50)', color: 'var(--ink-700)' }}>
              <span style={{ color: 'var(--blue-600)', display: 'flex' }}>{Ic.list({ size: 20 })}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--ink-900)' }}>Knowledge Base</div>
                <div style={{ fontSize: 13, color: 'var(--ink-500)' }}>FAQs, how-tos, and troubleshooting articles</div>
              </div>
              {Ic.chevronRight({ size: 16, style: { color: 'var(--ink-400)' } })}
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 14, borderRadius: 'var(--radius-md)', background: 'var(--ink-50)', color: 'var(--ink-700)' }}>
              <span style={{ color: 'var(--blue-600)', display: 'flex' }}>{Ic.mail({ size: 20 })}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--ink-900)' }}>Email support</div>
                <div style={{ fontSize: 13, color: 'var(--ink-500)' }}>partners@debtrespro.com · we reply within 4 hours</div>
              </div>
              {Ic.chevronRight({ size: 16, style: { color: 'var(--ink-400)' } })}
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 14, borderRadius: 'var(--radius-md)', background: 'var(--ink-50)', color: 'var(--ink-700)' }}>
              <span style={{ color: 'var(--blue-600)', display: 'flex' }}>{Ic.phone({ size: 20 })}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--ink-900)' }}>Partner support line</div>
                <div style={{ fontSize: 13, color: 'var(--ink-500)' }}>866-757-3339 · M–F, 8 AM–8 PM ET</div>
              </div>
              {Ic.chevronRight({ size: 16, style: { color: 'var(--ink-400)' } })}
            </a>
          </div>
        </Card>
      </div>
    </>
  );

  /* ---- Router ---- */
  let body;
  if (page === 'dashboard') body = <Dashboard />;
  else if (page === 'submit') body = <SubmitLead />;
  else if (page === 'leads') body = <MyLeads />;
  else if (page === 'contracts') body = <Contracts />;
  else if (page === 'sold') body = <SoldClients />;
  else if (page === 'users') body = <Users />;
  else if (page === 'training') body = <Training />;
  else if (page === 'profile') body = <Profile />;

  const pendingContracts = CONTRACTS.filter(c => c.status === 'Awaiting Signature' || c.status === 'Draft').length;
  const activeLeads = LEADS.filter(l => !['Sold', 'Disqualified'].includes(l.status)).length;

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sb-brand">
          <img className="sb-logo" src="../../assets/logo-drp-white.png" alt="Debt Resolve Pro" />
          <span className="sb-pill">Affiliate Portal</span>
        </div>
        <div className="sb-section">
          <div className="sb-label">Workspace</div>
          {navItem('dashboard', Ic.grid, 'Dashboard')}
          {navItem('leads', Ic.list, 'Leads', activeLeads)}
          {navItem('contracts', Ic.fileSigned, 'Contracts', pendingContracts, ['submit'])}
          {navItem('sold', Ic.handshake, 'Sold Clients')}
          {navItem('users', Ic.users, 'Users', USERS.length)}
        </div>
        <div className="sb-section" style={{ marginTop: 14 }}>
          <div className="sb-label">Resources</div>
          {navItem('training', Ic.award, 'Training & Support')}
        </div>
        <div className="sb-section" style={{ marginTop: 14 }}>
          <div className="sb-label">Account</div>
          {navItem('profile', Ic.user, 'Profile')}
        </div>
        <div className="sb-foot">
          <div className="sb-user">
            <Avatar initials={AFFILIATE.agent.initials} size={38} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="sb-user-name">{AFFILIATE.agent.name}</div>
              <div className="sb-user-sub">{AFFILIATE.company.name}</div>
            </div>
            <a href="signin.html" title="Sign out" style={{ color: 'rgba(255,255,255,0.5)', display: 'flex' }}>{Ic.logOut({ size: 16 })}</a>
          </div>
        </div>
      </aside>

      <main className="main">
        <div className="topbar">
          <div className="topbar-title">{page === 'dashboard' ? '' : TITLES[page]}</div>
          <div className="topbar-right">
            <button className="icon-btn">{Ic.bell({ size: 19 })}<span className="dot"></span></button>
          </div>
        </div>
        <div className="content">{body}</div>
      </main>
    </div>
  );
}

window.AffiliatePortal = Portal;
