import { Link } from "react-router-dom"
import { RoseArioLogo } from "../../ui/logo/logo"
import { RoughBorder } from "../../ui/border/roughBorder"
import { useLogoSize } from "../../../hooks/Logo/useLogoSize"
import { LetsChatBtn } from "../../ui/buttons/btn_letsChat"

const navLinks = [
  { name: "Services", path: "/services" },
  { name: "Labs", path: "/labs" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
]

export const DesktopNavbar = () => {
  const { logoSize } = useLogoSize()

  return (
    <section
      className="w-full items-center pt-12"
      style={{ 
        display: 'grid',
        gridTemplateColumns: `1fr 1fr 1fr`
      }}
    >
      {/* Col 1 — logo lives here, no longer fixed */}
      <div className="flex items-center">
        <RoseArioLogo />
      </div>

      {/* Col 2 — nav, centered in its column */}
      <div className="flex justify-center ">
        <RoughBorder fill="#DBD5FC" className="flex px-5 py-2">
          <nav className="flex gap-1 md:gap-2">
            {navLinks.map(({ name, path }) => (
              <div
                key={path}
                className="transition-all duration-100 ease-in-out
                  hover:-translate-y-1 hover:drop-shadow-[-3px_6px_0px_rgba(0,0,0,0.5)] 
                  focus-within:-translate-y-1 focus-within:drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
              >
                <RoughBorder fill="white" className="px-2 py-2">
                  <Link
                    to={path}
                    className="comico-font px-2 md:px-3 py-1
                      text-xs md:text-sm tracking-wide
                      uppercase whitespace-nowrap"
                  >
                    {name}
                  </Link>
                </RoughBorder>
              </div>
            ))}
          </nav>
        </RoughBorder>
      </div>

      {/* Col 3 — CTA, fixed 160px wide */}
      <div className="flex justify-center mx-5">
        <LetsChatBtn />
      </div>
    </section>
  )
}