const logo = '/spice-mantra-logo.PNG'

function App() {
  return (
    <div className="page">
      {/* Ambient spice-dust texture */}
      <div className="grain" aria-hidden="true" />
      <div className="ember ember-1" aria-hidden="true" />
      <div className="ember ember-2" aria-hidden="true" />
      <div className="ember ember-3" aria-hidden="true" />

      <main className="stage">
        <div className="logo-wrap">
          <img src={logo} alt="Spice Mantra" className="logo" />
        </div>

        <h1 className="wordmark">
          <span className="word red">Spice</span>
          <span className="word ink">Mantra</span>
        </h1>

        <p className="lede">
          The Spice Mantra website is currently under construction.
          We are preparing something special and will be launching
          soon. Stay tuned for updates!
        </p>

        <div className="simmer" role="img" aria-label="Brewing progress">
          <div className="pot">
            <span className="bubble b1" />
            <span className="bubble b2" />
            <span className="bubble b3" />
            <span className="bubble b4" />
            <div className="steam s1" />
            <div className="steam s2" />
            <div className="steam s3" />
          </div>
          <span className="simmer-label">Still simmering&hellip;</span>
        </div>

        <div className="notify">
          <p className="notify-label">Want the first whiff?</p>
          <form
            className="notify-form"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="notify-input"
              aria-label="Email address"
            />
            <button type="submit" className="notify-btn">
              Notify me
            </button>
          </form>
        </div>

        <footer className="footer">
          <span>&copy; {new Date().getFullYear()} Spice Mantra</span>
          <span className="footer-sep">&middot;</span>
          <span>All rights reserved</span>
        </footer>
      </main>
    </div>
  )
}

export default App