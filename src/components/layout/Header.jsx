import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.css"
const navigation = [
  { label: "خانه", path: "/" },
  { label: "خدمات", path: "/services" },
  { label: "درباره من", path: "/about" },
  { label: "تماس با من", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Brand */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-name">Ebrahim Akbari</span>
          <span className="brand-subtitle">Massage Therapist</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="main-navigation desktop-navigation"
          aria-label="منوی اصلی"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="header-actions desktop-actions">

          <Link to="/reservation" className="reservation-button">
            درخواست رزرو
          </Link>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile / Tablet Navigation */}
        <nav
          id="mobile-navigation"
          className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}
          aria-label="منوی موبایل"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}

          <div className="mobile-actions">

            <Link
              to="/reservation"
              className="mobile-reservation-button"
              onClick={closeMenu}
            >
              درخواست رزرو
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
