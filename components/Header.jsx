import Link from "next/link";

export default function Header() {
  return (
    <header className="shHeader" id="sh-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="shBrand" href="/">
            Shade.io
          </Link>
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
                <Link className="nav-link" href="#sh-header">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#sh-services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#sh-testimonials">
                  Testimonials
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#sh-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
