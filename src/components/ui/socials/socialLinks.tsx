import { Link } from "react-router-dom"
import { socials } from "./socialsData"

interface SocialLinksProps {
  className?: string
  iconClassName?: string
  small?: boolean
}

export const SocialLinks = ({ small = false, className = "flex gap-4", iconClassName = " text-void " }: SocialLinksProps) => (
  <section className={className} aria-label="Socials">
    {socials.map(({ name, icon: Icon, url }) => (
      <Link className="hover:animate-pulse" to={url} target="_blank" key={name}>
        <Icon className={`
          ${small ? "size-8" : "size-14"}
          hover:text-rouge transition-colors ${iconClassName}
          `}/>
      </Link>
    ))}
  </section>
)