import { Link } from "react-router-dom"
import { RoseArioLogo } from "../../ui/logo/logo"

export const DesktopNavbar = () => {
  return (
    <nav className="navbar">
      {/* <Link to="/contacts"> Contacts </Link>
      <Link to="/services"> Services </Link>
      <Link to="/about"> About </Link>
      <Link to="/portfolio"> Portfolio </Link>
      <Link to="/faq"> FAQ </Link>
      <Link to="/labs"> Labs </Link> */}
      <RoseArioLogo />
    </nav>
  )
}