import { MobileNavbar } from "./_mobile_navbar"
import { DesktopNavbar } from "./_desktop_navbar"


export const Navbar = () => {

  return (
    <nav className="sticky top-0 z-50">
      <div className="my-8 block md:hidden">
        <MobileNavbar />
      </div>   
      <div className="my-8 hidden md:block">
        <DesktopNavbar />
      </div>
    </nav>
  )
}