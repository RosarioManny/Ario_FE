import { RoughBorder } from "../../components/ui/border/roughBorder"
import { _Decorator_Ratears } from "../../assets/SVGs/Decorator_svgs"
import { useInView } from "../../hooks/Observers/useInView"
import { bio, socials, techStack } from "./data"
import { Link } from "react-router-dom"



export const About = () => {
  const { ref, inView } = useInView(0.8)

  return (
    <main className="flex flex-col items-center">

      <h1 className="header-text text-void text-center px-4 tracking-wide py-6">About Me!</h1>
      {/* About Me Description & Image */}
      <section className="relative w-full">

        <RoughBorder fill="#B23A48" className="w-full">
          <div className="w-full h-[450px] flex items-center justify-center">
            <span className="text-white">Image of Me</span>
          </div>
        </RoughBorder>

        <div className="relative -mt-16 mx-auto max-w-[85vw] z-10">
          <RoughBorder fill="white" className="p-6">

            <div ref={ref} className="flex items-center gap-2 mb-4">
              <_Decorator_Ratears className={`size-20 text-rouge -rotate-15 ${inView ? 'animate_decorator' : 'opacity-0'}`} />
              <h2 className="text-3xl text-rouge tracking-wide pl-2">Artist Turn Web Dev</h2>
            </div>

            <div className="flex flex-col gap-4">
              {bio.map((paragraph, i) => (
                <p key={i} className="text-lg leading-5 text-void">{paragraph}</p>
              ))}
            </div>

          </RoughBorder>
        </div>
      </section>
      <section aria-label="Socials">
        {socials.map(({name, icon, url}) => (
          <Link to={url} target="_blank">
              <img src={icon} alt={`${name} icon`} className="size-6" />
          </Link>
        ))}
      </section>
      {/* Tech Stack */}
      <section aria-label="Tech Stack" className="min-w-[60vw] my-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
        {techStack.map(({name, icon }) => (
          <RoughBorder fill="white" className="  flex items-center justify-center p-2">
            <img src={icon} alt={`${name} icon`} className="size-10" />
            {/* <span>{name}</span> */}
          </RoughBorder>
        ))}
      </section>
    </main>
  )
}