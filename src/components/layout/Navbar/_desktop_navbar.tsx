import { Link } from "react-router-dom"
import { RoseArioLogo } from "../../ui/logo/logo"
import { RoughBorder } from "../../ui/border/roughBorder"

const navLinks = [
  { name: "Services", path: "/services" },
  { name: "Labs", path: "/labs" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
]

export const DesktopNavbar = () => {
  return (
    <section className="flex items-center justify-center px-8 py-8">
      <RoseArioLogo />

      {/* Outer rough border wrapping all nav items */}
      <RoughBorder fill="#e8e8f8" className="flex p-4">
        <nav className="flex gap-4">
          {navLinks.map(({ name, path }) => (
            <div
              key={path}
              className="
              transition-all duration-100 ease-in-out
              hover:-translate-y-1 hover:drop-shadow-[-3px_6px_0px_rgba(0,0,0,0.5)] 
              focus-within:-translate-y-1 focus-within:drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
            >
              <RoughBorder fill="white" className="px-2 py-2">
                <Link
                  to={path}
                  className="comico-font text-md px-4 tracking-widest uppercase whitespace-nowrap"
                >
                  {name}
                </Link>
              </RoughBorder>
            </div>
          ))}
        </nav>
      </RoughBorder>
    </section>
  )
}