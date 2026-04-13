import { Link } from "react-router-dom"

export const DesktopNavbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"> 
        <img src="src/assets/images/personal/logo/android-chrome-512x512.png" height="100"alt="logo" className="logo" />
      </Link>
      <Link to="/contacts"> Contacts </Link>
      <Link to="/services"> Services </Link>
      <Link to="/about"> About </Link>
      <Link to="/portfolio"> Portfolio </Link>
      <Link to="/faq"> FAQ </Link>
      <Link to="/labs"> Labs </Link>
    </nav>
  )
}