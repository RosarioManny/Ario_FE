import { Link } from "react-router-dom"
import { Animated_RoseArioLogo} from "../../ui/logo/animated_logo"
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
  const { isHome, hasScrolled } = useLogoSize()

  const btnVisible = !isHome || hasScrolled

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
        <Animated_RoseArioLogo />
      </div>

      {/* Col 2 — nav, centered in its column */}
      <div className="flex justify-center ">
        <RoughBorder fill="#DBD5FC" className="flex px-5 py-3">
          <nav className="flex gap-1 md:gap-2">
            {navLinks.map(({ name, path }) => (
              <div
                key={path}
                className="btn-pop"
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
      <div
        className="flex justify-start mx-auto transition-all duration-700 ease-in-out"
        style={{
          opacity: btnVisible ? 1 : 0,
          transform: btnVisible ? 'translateX(0)' : 'translateX(40px)',
          pointerEvents: btnVisible ? 'auto' : 'none',
        }}
      >
        <LetsChatBtn />
      </div>
    </section>
  )
}