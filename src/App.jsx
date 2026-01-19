import "./App.css";

const bankAccounts = [
  {
    name: "Everyday Transaction",
    number: "•••• 2849",
    balance: 4280.45,
    available: 4100.23,
    status: "Active",
  },
  {
    name: "High Interest Saver",
    number: "•••• 1102",
    balance: 18250.0,
    available: 18250.0,
    status: "Goal tracking",
  },
];

const homeLoans = [
  {
    name: "Owner-occupied loan",
    number: "•••• 9033",
    balance: 412300.75,
    rate: 6.15,
    offset: 12840.2,
    repaymentDue: "28 Oct 2024",
  },
  {
    name: "Investment loan",
    number: "•••• 7712",
    balance: 268900.1,
    rate: 6.42,
    offset: 4550.0,
    repaymentDue: "11 Nov 2024",
  },
];

const superannuation = [
  {
    name: "Balanced Growth",
    fund: "Aurora Super",
    balance: 128420.88,
    contributions: 950,
    insurance: "Standard cover",
  },
  {
    name: "Sustainable Options",
    fund: "Aurora Super",
    balance: 84210.5,
    contributions: 420,
    insurance: "No cover",
  },
];

const creditCards = [
  {
    name: "Rewards Platinum",
    number: "•••• 5521",
    balance: 2240.35,
    limit: 8500,
    dueDate: "05 Nov 2024",
    status: "Autopay on",
  },
  {
    name: "Everyday Low Rate",
    number: "•••• 4419",
    balance: 890.12,
    limit: 4000,
    dueDate: "18 Nov 2024",
    status: "Manual payment",
  },
];

const currency = (value) =>
  value.toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 2,
  });

export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <div>
          <p className="eyebrow">Financial overview</p>
          <h1>Track and manage your entire financial position.</h1>
          <p className="subtitle">
            Review your everyday banking, home loans, and superannuation in one
            place. Get quick insights and take action from the dashboards
            below.
          </p>
        </div>
        <div className="hero-actions">
          <button className="primary">Add account</button>
          <button className="ghost">Download report</button>
        </div>
      </header>

      <section className="summary-grid">
        <article className="summary-card">
          <h2>Total cash position</h2>
          <p className="summary-value">{currency(22530.45)}</p>
          <p className="summary-meta">Includes all transaction and savings balances.</p>
        </article>
        <article className="summary-card">
          <h2>Loan balance</h2>
          <p className="summary-value">{currency(681200.85)}</p>
          <p className="summary-meta">Next repayment due in 12 days.</p>
        </article>
        <article className="summary-card">
          <h2>Superannuation</h2>
          <p className="summary-value">{currency(212631.38)}</p>
          <p className="summary-meta">Monthly contributions tracking at 6%.</p>
        </article>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2>Bank accounts</h2>
            <p>Monitor balances and allocate funds to goals.</p>
          </div>
          <button className="ghost">Transfer funds</button>
        </div>
        <div className="card-grid">
          {bankAccounts.map((account) => (
            <article className="card" key={account.number}>
              <div className="card-header">
                <div>
                  <h3>{account.name}</h3>
                  <p className="muted">{account.number}</p>
                </div>
                <span className="pill">{account.status}</span>
              </div>
              <div className="card-body">
                <div>
                  <p className="label">Balance</p>
                  <p className="value">{currency(account.balance)}</p>
                </div>
                <div>
                  <p className="label">Available</p>
                  <p className="value">{currency(account.available)}</p>
                </div>
              </div>
              <div className="card-footer">
                <button className="primary small">Manage account</button>
                <button className="ghost small">Set savings goal</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2>Home loans</h2>
            <p>Stay on top of rates, offsets, and repayments.</p>
          </div>
          <button className="ghost">Manage repayments</button>
        </div>
        <div className="card-grid">
          {homeLoans.map((loan) => (
            <article className="card" key={loan.number}>
              <div className="card-header">
                <div>
                  <h3>{loan.name}</h3>
                  <p className="muted">{loan.number}</p>
                </div>
                <span className="pill">{loan.rate}% rate</span>
              </div>
              <div className="card-body">
                <div>
                  <p className="label">Outstanding</p>
                  <p className="value">{currency(loan.balance)}</p>
                </div>
                <div>
                  <p className="label">Offset balance</p>
                  <p className="value">{currency(loan.offset)}</p>
                </div>
              </div>
              <div className="card-footer">
                <p className="muted">Repayment due {loan.repaymentDue}</p>
                <button className="primary small">View loan</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2>Superannuation</h2>
            <p>Track balances, contributions, and coverage.</p>
          </div>
          <button className="ghost">Update contributions</button>
        </div>
        <div className="card-grid">
          {superannuation.map((account) => (
            <article className="card" key={account.name}>
              <div className="card-header">
                <div>
                  <h3>{account.name}</h3>
                  <p className="muted">{account.fund}</p>
                </div>
                <span className="pill">{account.insurance}</span>
              </div>
              <div className="card-body">
                <div>
                  <p className="label">Balance</p>
                  <p className="value">{currency(account.balance)}</p>
                </div>
                <div>
                  <p className="label">Monthly contributions</p>
                  <p className="value">{currency(account.contributions)}</p>
                </div>
              </div>
              <div className="card-footer">
                <button className="primary small">Manage investment</button>
                <button className="ghost small">View statements</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2>Credit cards</h2>
            <p>Track balances, limits, and upcoming repayments.</p>
          </div>
          <button className="ghost">Pay card</button>
        </div>
        <div className="card-grid">
          {creditCards.map((card) => (
            <article className="card" key={card.number}>
              <div className="card-header">
                <div>
                  <h3>{card.name}</h3>
                  <p className="muted">{card.number}</p>
                </div>
                <span className="pill">{card.status}</span>
              </div>
              <div className="card-body">
                <div>
                  <p className="label">Outstanding balance</p>
                  <p className="value">{currency(card.balance)}</p>
                </div>
                <div>
                  <p className="label">Credit limit</p>
                  <p className="value">{currency(card.limit)}</p>
                </div>
              </div>
              <div className="card-footer">
                <p className="muted">Payment due {card.dueDate}</p>
                <button className="primary small">Manage card</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="insights">
        <h2>Next steps</h2>
        <div className="insights-grid">
          <div>
            <h3>Plan a repayment boost</h3>
            <p>
              Add $350 to your monthly repayments to save 2 years off your loan
              term.
            </p>
          </div>
          <div>
            <h3>Grow your emergency fund</h3>
            <p>
              You are 82% toward your $6,000 emergency savings goal. Automate the
              next transfer.
            </p>
          </div>
          <div>
            <h3>Review super allocation</h3>
            <p>
              Your sustainable option is outperforming benchmarks by 1.8%. Keep
              tracking contributions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
