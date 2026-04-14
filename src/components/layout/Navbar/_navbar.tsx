import { MobileNavbar } from "./_mobile_navbar"
import { DesktopNavbar } from "./_desktop_navbar"


export const Navbar = () => {

  return (
    <>
      <div className="my-64 block md:hidden">
        <MobileNavbar />
      </div>   
      <div className="m-48 hidden md:block">
        <DesktopNavbar />
      </div>
    </>
  )
}