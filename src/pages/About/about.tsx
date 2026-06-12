import { RoughBox } from "../../components/ui/containers/roughBox"
import { _Decorator_Ratears } from "../../assets/SVGs/Decorator_svgs"
import { useInView } from "../../hooks/Observers/useInView"
import { bio, socials, techStack } from "./data"
import { Link } from "react-router-dom"
import { BookshelfCarousel } from "../../components/ui/bookshelf/bookshelfCarousel"
import { SocialLinks } from "../../components/ui/socials/socialLinks"

export const About = () => {
  const { ref, inView } = useInView(0.8)
  const isLargeScreen = window.innerWidth > 738

  return (
    <main className="flex flex-col items-center">
      <h1 className="header-text text-void text-center px-4 tracking-wide py-6">About Me!</h1>

      <section className="relative w-full">
        <RoughBox fill="#B23A48" className="w-full">
          <div className="w-full h-[450px] flex items-center justify-center">
            <span className="text-white">Image of Me</span>
          </div>
        </RoughBox>

        <div className="relative -mt-16 mx-auto max-w-[85vw] z-20">
          <RoughBox fill="white" className="p-6">
            <div ref={ref} className="flex items-center gap-2 mb-4">
              <_Decorator_Ratears className={`size-20 text-rouge -rotate-15 ${inView ? 'animate_decorator' : 'opacity-0'}`} />
              <h2 className="text-3xl text-rouge tracking-wide pl-2">Artist Turn Web Dev</h2>
            </div>
            <div className="flex flex-col gap-4">
              {bio.map((paragraph, i) => (
                <p key={i} className="text-lg leading-5 text-void">{paragraph}</p>
              ))}
            </div>
          </RoughBox>
        </div>
      </section>

      <section className="flex gap-4 my-16 items-center" aria-label="Socials">
        <SocialLinks />
      </section>

      <section 
        aria-label="Tech Stack" 
        className="
        items-center justify-center 
        min-w-[50vw]
        grid grid-cols-4 md:grid-cols-5
        gap-4 px-4  my-12">
        {techStack.map(({ name, icon }) => (
          <RoughBox key={name} fill="white" className="p-3">
            <div className="flex items-center justify-start gap-1">
              <img src={icon} alt={`${name} icon`} className="size-10" />
              {isLargeScreen && <p className="text-md text-void">{name}</p>}
            </div>
          </RoughBox>
        ))}
      </section>

      <BookshelfCarousel />
    </main>
  )
}