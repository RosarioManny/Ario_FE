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
  // const { logoSize } = useLogoSize()
  const { isHome, hasScrolled } = useLogoSize()

  const btnVisible = !isHome || hasScrolled

  return (
  <section
  className={`w-full items-center  mx-auto pt-12`}
  style={{
    display: 'grid',
    gridTemplateColumns: `1fr 1fr 1fr`,
  }}
>
  {/* Col 1 — logo */}
  <div className="flex justify-center items-center">
    <Animated_RoseArioLogo />
  </div>

  {/* Col 2 — nav centered */}
  <div className="flex justify-center">
    <RoughBorder fill="#DBD5FC" className="flex px-2 md:px-4 py-2 md:py-3">
      <nav className="flex gap-1">
        {navLinks.map(({ name, path }) => (
          <div key={path} className="btn-pop">
            <RoughBorder fill="white" className="px-1 md:px-2 py-1 md:py-2">
              <Link
                to={path}
                className="comico-font py-1 px-1 md:px-2 lg:px-3
                  text-[10px] md:text-xs lg:text-sm 
                  tracking-tight md:tracking-wide
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

  {/* Col 3 — CTA */}
  <div
    className="flex justify-center transition-all duration-700 ease-in-out"
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