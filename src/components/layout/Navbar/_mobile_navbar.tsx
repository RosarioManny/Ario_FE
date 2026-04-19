import { useState, useEffect} from "react"
import { Link, useLocation} from "react-router-dom"
import { _Decorator_Line, _Decorator_PenNib } from "../../../assets/SVGs/Decorator_svgs"
import { BurgerLine } from "./components/m_nav_burgerLine"


export const MobileNavbar = () => {
  // TODO: Open menu on click, close on clikc outside
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [popStage, setPopStage] = useState<'hidden' | 'big' | 'normal'>('hidden')
  const [textVisible, setTextVisible] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  useEffect(() => {
    const t1 = setTimeout(() => setPopStage('big'), 100)      // pop out big
    const t2 = setTimeout(() => setPopStage('normal'), 500)   // settle to normal size
    const t3 = setTimeout(() => setTextVisible(true), 1000)    // then text slides out
    return () => [t1, t2, t3].forEach(clearTimeout)
  }, [])


  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // TODO: Add menu links
  const menuLinks = [
    { name: "Home" , path: ""},
    { name: "contacts" , path: "contacts"},
    { name: "services" , path: "services"},
    { name: "about" , path: "about"},
    { name: "portfolio" , path: "portfolio"},
    { name: "labs" , path: "labs"},
  ]

  return (
  <nav className="mobile-navbar">

    {/* BURGER — top right */}
    <button 
      className="
        flex flex-col justify-center items-center 
        size-[5rem] 
        space-y-1 p-2 z-50
        absolute top-4 right-4 
        transition-all duration-1000 ease-in-out"
      onClick={handleMenuToggle}>
      <BurgerLine strokeWidth={20} isToggled={isMenuOpen} index={1} />
      <BurgerLine strokeWidth={20} isToggled={isMenuOpen} index={2} />
      <BurgerLine strokeWidth={20} isToggled={isMenuOpen} index={3} />
    </button>

    {/* LOGO */}
    <Link to="/">
      <div className={`
        fixed transition-all duration-700 ease-in-out 
        flex items-center 
        right-20 
        ${hasScrolled 
          ? 'top-2 left-2 scale-50 origin-top-left' 
          : 'top-4 left-4 scale-100'
        }`}>

        {/* Text slides out from behind */}
        <h1 className={`
          header-text
          text-4xl text-void absolute left-0 z-0
          transition-all duration-1000 animation-delay-1000 ease-out
          ${textVisible ? 'translate-x-59 opacity-100' : 'translate-x-50 opacity-0'}`}>
          <span className="text-6xl">A</span>rio
        </h1>

        {/* Pop animation */}
        <img 
          className={`relative transition-all ease-out size-72
            ${popStage === 'hidden' ? 'scale-0 duration-0 opacity-0' : ''}
            ${popStage === 'big'    ? 'scale-125 duration-300' : ''}
            ${popStage === 'normal' ? 'scale-100 duration-500 opacity-100' : ''}`}
          src="src/assets/images/design/logo/raining_rose_logo_512x512.png" 
          alt="Logo" 
        />

      </div>
    </Link>

    {/* OFF-SCREEN MENU */}
    <div className={`
      fixed top-0 left-0 w-full h-screen 
      bg-void text-white 
      flex flex-col items-center justify-center space-y-6
      transition-transform duration-700 ease-in-out z-40
      ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <img className="size-full object-cover opacity-5 absolute" src="src/assets/images/design/background/scratched_Texture_Transparent.png" alt="" />
      <ul className="flex flex-col items-center z-40 gap-4 text-mist">
        {menuLinks.map(({name, path}) => (
          <li key={path} className="comico-font text-2xl tracking-widest">
            <Link to={`/${path}`} onClick={() => setIsMenuOpen(false)}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      { !isHomePage &&
        <Link to="/">
          <div className="" >
              <img 
              className="size-50 absolute bottom-10 left-8"
              src="src/assets/images/design/logo/raining_rose_logo_512x512.png" 
              alt="Logo" 
            />
            <h1 className="
              header-text absolute bottom-26 text-mist text-4xl">
              <span className=" text-6xl">A</span>rio
            </h1>
          </div>
        </Link>
      }
    </div>
  </nav>
)
}