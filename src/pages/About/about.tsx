import { RoughBorder } from "../../components/ui/border/roughBorder"
import { _Decorator_Ratears } from "../../assets/SVGs/Decorator_svgs"
import { useInView } from "../../hooks/Observers/useInView"

const bio = [
  "In 2024, I made a decision that changed everything.",
  "I was an art teacher — spending my days helping kids see the world creatively, develop their own voice, and express something real. I loved it. But I wanted to build something new for myself, so I did.",
  "I trained at General Assembly, picked up full-stack development, and quickly realized: building websites isn't that different from making art. Both are about guiding people somewhere, making them feel something, and solving a problem beautifully.",
  "Now I build custom websites for small businesses — people with real products, real customers, and real stories that deserve to be seen online. My background means I think about design differently than most developers. I care about how things look just as much as how they work.",
]

export const About = () => {
  const { ref, inView } = useInView(0.8)

  return (
    <main className="flex flex-col items-center">

      <h1 className="header-text text-void text-center px-4 tracking-wide py-6">About Me!</h1>

      <div className="relative w-full">

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

      </div>
    </main>
  )
}