export default function Header() {
  return (
    <header className="shHeader" id="sh-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="shBrand" href="/">
            Shade.io
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#sh-header">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sh-services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sh-testimonials">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sh-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
