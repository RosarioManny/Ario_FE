import { MobileNavbar } from "./_mobile_navbar"
import { DesktopNavbar } from "./_desktop_navbar"
import { useLogoSize } from "../../../hooks/Logo/useLogoSize"


export const Navbar = () => {
  const { logoSize } = useLogoSize()
  return (
    <nav className="sticky top-0 z-50">
      <div  className=" md:hidden ">
        <MobileNavbar />
      </div>   
      <div className="my-6 hidden md:block">
        <DesktopNavbar />
      </div>
    </nav>
  )
}