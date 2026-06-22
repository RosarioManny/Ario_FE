import { SocialLinks } from "../../ui/socials/socialLinks"
import { Animated_RoseArioLogo } from "../../ui/logo/animated_logo"
import { DecoratorGallery } from "../../ui/decorators/decoratorGallery"
import { menuLinks } from "../../../context/navigation/menuLinks"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer 
    id="footer"
    style={{ 
      marginTop: '64px',
      background: '#0C1821', 
      padding: '16px', 
      color: '#EFECFF', 
      width: '100%',
      display: "flex",
      flexDirection: 'column',
    }}>
      <section className="flex">
        <div>
          <Animated_RoseArioLogo lightText={true}/>
          <p> NYC-based web designer & developer building secure, custom websites for small businesses.
            Fast, responsive, and built to help you look credible, get found, and grow online.
          </p>
          <DecoratorGallery />
        </div>
        
        <ul className="my-8 flex flex-col gap-4">
          {menuLinks.map(({name, path}) => (
            <li key={path} className="hover:scale-110 list-none transition-scale duration-300 ease-out text-2xl tracking-widest">
              <Link to={`/${path}`} >
                <li className="epoch-font">
                  {name}
                </li>
              </Link>
            </li>
          ))}
        </ul>
        
      </section>
      <section className="flex items-center flex-col md:flex-row justify-between gap-2">
        <SocialLinks 
          small={true} 
          className="flex items-center justify-center gap-6 mb-4" 
          iconClassName="text-mist" 
        />
          <a href="tel:+7186192138" className="text-mist hover:text-flare transition-colors epoch-font">
            (718)619-2138
          </a>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ario. All rights reserved.
        </p>
      </section>
    </footer>
  )
}