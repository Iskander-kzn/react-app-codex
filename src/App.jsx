const columns = [
  {
    title: 'Project Updates',
    items: ['Sprint 12 planning', 'Design handoff review', 'API uptime: 99.9%'],
  },
  {
    title: 'Team Calendar',
    items: ['Mon: Product sync', 'Wed: Client demo', 'Fri: Retrospective'],
  },
  {
    title: 'Quick Actions',
    items: ['Create a task', 'Invite a teammate', 'View analytics'],
  },
];

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div>
          <p className="app__eyebrow">Welcome back</p>
          <h1>Team Workspace</h1>
          <p className="app__subtitle">
            Sign in to access your dashboard and keep projects moving.
          </p>
        </div>
        <button className="app__cta" type="button">
          New Workspace
        </button>
      </header>

      <main className="app__content">
        <section className="login-card">
          <h2>Login</h2>
          <p className="login-card__hint">Use your workspace credentials to continue.</p>
          <form className="login-card__form">
            <label>
              Email address
              <input type="email" placeholder="name@company.com" />
            </label>
            <label>
              Password
              <input type="password" placeholder="••••••••" />
            </label>
            <div className="login-card__row">
              <label className="login-card__checkbox">
                <input type="checkbox" defaultChecked />
                Remember me
              </label>
              <button type="button" className="login-card__link">
                Forgot password?
              </button>
            </div>
            <button className="login-card__submit" type="button">
              Sign in
            </button>
          </form>
        </section>

        <section className="dashboard">
          <div className="dashboard__header">
            <div>
              <h2>Main Page</h2>
              <p>Overview of what is happening across your workspace.</p>
            </div>
            <button className="dashboard__action" type="button">
              View reports
            </button>
          </div>
          <div className="dashboard__columns">
            {columns.map((column) => (
              <article className="dashboard__column" key={column.title}>
                <h3>{column.title}</h3>
                <ul>
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <button type="button">Open</button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
