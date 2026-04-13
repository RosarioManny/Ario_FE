import { MobileNavbar } from "./_mobile_navbar"
import { DesktopNavbar } from "./_desktop_navbar"
import { useState } from "react"  

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <>
      <button onClick={() => setIsMobile(!isMobile)}> Switch </button>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </>
  )
}