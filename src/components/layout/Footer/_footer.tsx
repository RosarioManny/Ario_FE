import { SocialLinks } from "../../ui/socials/socialLinks"
import { Animated_RoseArioLogo } from "../../ui/logo/animated_logo"
import { DecoratorGallery } from "../../ui/decorators/decoratorGallery"
import { menuLinks } from "../../../context/navigation/menuLinks"
import { Link } from "react-router-dom"

interface FooterProps {
  isOfficialSite: boolean
}


export const Footer = ({ isOfficialSite }: FooterProps) => {
  return (
    <footer 
    id="footer"
    className="mt-16 bg-void text-mist w-full gap-8 flex flex-col"
    >
      {/* About, Logo and Quick Links */}
      <section className="px-4 flex flex-col md:flex-row gap-8">
        {/* About, Logo, Decorators  - Left Side */}
        <div className="flex flex-col  gap-8">
          <Animated_RoseArioLogo lightText={true}/>
          <p> NYC-based web designer & developer building secure, custom websites for small businesses.
            Fast, responsive, and built to help you look credible, get found, and grow online.
          </p>
          <DecoratorGallery />
        </div>
        {/* Quick Links - Right Side */}
        {isOfficialSite && <ul className=" flex flex-col gap-4 py-8">
          {menuLinks.map(({name, path}) => (
            <li key={path} 
            className="
            hover:scale-110 transition-scale duration-300 ease-out 
            list-none 
            w-full 
            flex justify-center md:justify-start
            tracking-widest">
              <Link className="epoch-font text-left" to={`/${path}`} >
                  {name}
              </Link>
            </li>
          ))}
        </ul>}
        
      </section>
      <hr style={{ filter: 'url(#rough-dot)'}}  className="border-0 h-[2px] bg-mist w-full mx-auto" />
      {/* Socials and Contacts */}
      <section className="flex items-center flex-col md:flex-row justify-between gap-4">
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