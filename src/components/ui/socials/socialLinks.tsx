import { Link } from "react-router-dom"
import { socials } from "./socialsdata"

interface SocialLinksProps {
  className?: string
  iconClassName?: string
  small?: boolean
}

export const SocialLinks = ({ small = false, className = "flex gap-4", iconClassName = " text-void " }: SocialLinksProps) => (
  <section className={className} aria-label="Socials">
    {socials.map(({ name, icon: Icon, url }) => (
      <Link className="hover:animate-pulse" to={url} target="_blank" key={name}>
        {/* if needed to be small than all are set to a smaller set. Github logo is a bit smaller than others needs to be a bigger size than other logos*/}
        <Icon className={`
          ${small ? "size-8" : "size-14"}
          hover:text-rouge transition-colors ${iconClassName}
          `}/>
      </Link>
    ))}
  </section>
)