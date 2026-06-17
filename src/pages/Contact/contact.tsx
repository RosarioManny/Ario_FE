import { _Decorator_PenNib } from "../../assets/SVGs/Decorator_svgs"
import { RoughBorder } from "../../components/ui/containers/roughBorder"
import { RoughBox } from "../../components/ui/containers/roughBox"
import { Link } from "react-router-dom"

const quickLinks = [
  { label: "FAQ",               path: "/faq" },
  { label: "Services",          path: "/services" },
  { label: "Privacy & Security",path: "/privacy" },
]

export const Contacts = () => {
  return (
    <main className="flex flex-col items-center gap-8 px-4 py-8 w-full max-w-xl mx-auto">

      {/* HEADER */}
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center uppercase">Let's Get Started</h1>
        <_Decorator_PenNib className="animate_decorator -rotate-45 size-[75px] text-rouge" />
      </div>

      {/* INTRO */}
      <div className="flex flex-col gap-4 text-center opacity-70 w-full">
        <p>
          Got a project in mind? I'm excited to hear it!
          Create a form and let's get started.
        </p>
        <p>
          As a solo developer I respond within 2–3 business days.
          While you wait, the FAQ, Services, and Privacy & Security pages
          cover most common questions.
        </p>
      </div>

      {/* FORM */}
      <RoughBorder className="w-full"> 

      <div className="relative w-full bg-white">

        <form className="flex flex-col items-start justify-start gap-4 p-6 w-full">
          <div className="w-full">
            <label className="epoch-font text-sm" htmlFor="name">Name:</label>
            <RoughBorder >
              <input
                className="bg-mist w-full p-3"
                id="name"
                type="text"
                placeholder="Your name"
                />
            </RoughBorder>
          </div>
          <div className="w-full">
            <label className="epoch-font text-sm" htmlFor="email">Email:</label>
            <RoughBorder >
              <input
                className="bg-mist w-full p-3"
                id="email"
                type="email"
                placeholder="123example@email.com"
                />
            </RoughBorder>
          </div>
          <div className="w-full">
            <label className="epoch-font text-sm" htmlFor="description">Description:</label>
            <RoughBorder >
              <textarea
                className="bg-mist w-full p-3"
                id="description"
                
                rows={8}
                placeholder="A short description of your website. A rough idea is good, we will discuss more via email."
                />
            </RoughBorder>
          </div>

        </form>
      </div>
      </RoughBorder>

      {/* QUICK LINKS */}
      <div className="flex flex-col justify-center items-center gap-3 w-full">
        {quickLinks.map(({ label, path }) => (
          <Link key={path} to={path} className="w-[75%]">
            <RoughBox fill="white" className="w-full flex items-center justify-center py-3 btn-pop">
              <h3 className="text-tide text-center uppercase tracking-widest">{label}</h3>
            </RoughBox>
          </Link>
        ))}
      </div>

    </main>
  )
}