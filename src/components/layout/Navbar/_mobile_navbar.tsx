import { useState} from "react"
import { Link} from "react-router-dom"
import { _Decorator_Line, _Decorator_PenNib } from "../../../assets/SVGs/Decorator_svgs"
import { BurgerLine } from "./components/m_nav_burgerLine"
import { Animated_RoseArioLogo } from "../../ui/logo/animated_logo"
import { RoughBox } from "../../ui/containers/roughBox"
import { menuLinks } from "../../../context/navigation/menuLinks"


export const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <section className="relative w-full flex pt-4 pr-3 items-center justify-between overflow-hidden">

    {/* LOGO — left */}
    <Animated_RoseArioLogo />

    {/* BURGER — right, always above menu overlay */}
    <RoughBox className="z-[60] hover:scale-105 transition-scale duration-300 ease-inrelative" fill="white">
      <button 
        className="
        flex flex-col justify-center items-center 
        size-[5rem] space-y-1 p-2  
        cursor-pointer
        transition-all duration-1000 ease-in-out"
        onClick={handleMenuToggle}>
        <BurgerLine isToggled={isMenuOpen} index={1} />
        <BurgerLine isToggled={isMenuOpen} index={2} />
        <BurgerLine isToggled={isMenuOpen} index={3} />
      </button>
    </RoughBox>

    {/* OFF-SCREEN MENU — z-50, below burger */}
    <div className={`
      fixed top-0 left-0 w-full h-screen 
      bg-void 
      flex flex-col items-center justify-center space-y-6
      transition-all duration-800 ease-in-out z-50
      ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <img className="size-full object-cover opacity-5 absolute" src="src/assets/images/design/background/scratched_Texture_Transparent.png" alt="" />
      <ul className="flex flex-col items-center z-40 gap-4 text-mist">
        {menuLinks.map(({name, path}) => (
          <li key={path} className="hover:scale-110 transition-scale duration-300 ease-out text-2xl tracking-widest">
            <Link to={`/${path}`} onClick={() => setIsMenuOpen(false)}>
              <h3>
                {name}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>

  </section>
)
}