import { SocialLinks } from "../../ui/socials/socialLinks"
import { Animated_RoseArioLogo } from "../../ui/logo/animated_logo"
import { DecoratorGallery } from "../../ui/decorators/decoratorGallery"

export const Footer = () => {
  return (
    <footer style={{ 
      marginTop: '64px',
      background: '#0C1821', 
      padding: '16px', 
      color: '#DBD5FC', 
      // textAlign: '', 
      width: '100%',
      display: "flex",
      flexDirection: 'column',
    }}>
      <section>
        <div>
          <Animated_RoseArioLogo lightText={true}/>
          <p> NYC-based web designer & developer building secure, custom websites for small businesses.
            Fast, responsive, and built to help you look credible, get found, and grow online.
          </p>
          <DecoratorGallery />
        </div>
        <div>
          
        </div>
      </section>
      <section className="flex items-center justify-between gap-2">
        <SocialLinks 
          small={true} 
          className="flex items-center justify-center gap-6 mb-4" 
          iconClassName="text-mist" 
        />
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ario. All rights reserved.
        </p>
      </section>
    </footer>
  )
}