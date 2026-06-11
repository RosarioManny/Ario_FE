import { Link } from "react-router-dom"
import { socials } from "./socialsdata"

interface SocialLinksProps {
  className?: string
  iconClassName?: string
}

export const SocialLinks = ({ className = "flex gap-4", iconClassName = "size-10 text-void hover:text-rouge transition-colors" }: SocialLinksProps) => (
  <section className={className} aria-label="Socials">
    {socials.map(({ name, icon: Icon, url }) => (
      <Link className="hover:animate-pulse" to={url} target="_blank" key={name}>
        <Icon className={iconClassName} />
      </Link>
    ))}
  </section>
)