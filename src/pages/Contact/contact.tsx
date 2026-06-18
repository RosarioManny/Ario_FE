import { _Decorator_PenNib, _Decorator_Checkmark_, _Decorator_X_Error_  } from "../../assets/SVGs/Decorator_svgs"
import { RoughBorder } from "../../components/ui/containers/roughBorder"
import { RoughBox } from "../../components/ui/containers/roughBox"
import { Link } from "react-router-dom"
import { useFormHooks } from "./hooks/formDataHooks"
import { FAQCard } from "../../components/ui/questionCard/questionCard"

const quickLinks = [
  { label: "FAQ", path: "/faq" },
  { label: "Services", path: "/services" },
  { label: "Privacy & Security", path: "/privacy" },
]

const quickQuestions = [
  {question: "Is the price negeotiable?", answer: "My packages cover most projects. If something needs adjusting or falls outside a package, we'll find the right fit together. There's flexibility beyond what's listed on the page."},
  {question: "How fast can it be done?", answer: "It depends on what your scope is. Submit a form so we can talk about what your timeframe can be."},
  {question: "Do I need technical skills to have a website?", answer: "You don't need to be tech savvy to have a site. I can manage things for you if you opt for that. It doesn't hurt though"},
  {question: "Am I messaging you directly?", answer: "Yes, I am a solo developer. So I look and respond to everything myself."},
  
]
export const Contacts = () => {
  const { 
    handleSubmit, 
    error,
    formData, 
    handleChange,
    success,
    isSubmitting
  } = useFormHooks()

  return (
    <main className="flex flex-col items-center gap-8 px-4 py-8 w-full max-w-xl mx-auto">

      {/* HEADER */}
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center uppercase text-primary">Let's Get Started</h1>
        <_Decorator_PenNib className="animate_decorator -rotate-45 size-[75px] text-rouge" /> 
      </div>

      {/* INTRO */}
      <div className="flex flex-col gap-4 text-center opacity-70 w-full">
        <p className="text-body">
          Got a project in mind? I'm excited to hear it!
          Fill out the form and let's get started.
        </p>
        <p className="text-sm">
          As a solo developer I respond within 2–3 business days.
          While you wait, the FAQ, Services, and Privacy & Security pages
          cover most common questions.
        </p>
      </div>

{/* @theme {
  --color-void: #0C1821;
  --color-rouge: #B23A48;
  --color-flare: #FFC107;
  --color-tide: #0277BD;
  --color-mist: #DBD5FC;
} */}
      {/* FORM */}
      <RoughBorder className="w-full">
        <div className="relative w-full bg-white">
          <form onSubmit={handleSubmit} className="flex flex-col items-start justify-start gap-4 p-6 w-full">
            
            {/* SUCCESS MESSAGE */}
            {success && (
              <RoughBox  
                // stroke={"#507235"} 
                className="w-full bg-[#51C769] text-white p-4 rounded text-sm ">
                <div className="flex items-center gap-4">
                  <_Decorator_Checkmark_ className={`${success && "animate_decorator"} size-10`}/>
                  <p className="">I'll get back to you in 2-3 business days.</p>
                </div>
              </RoughBox>
            )}

            {/* ERROR MESSAGE */}
            {error && !success && (
              <RoughBox className="w-full bg-rouge/50 text-white p-4">
                <div className="flex items-center justify-start gap-4">
                  <_Decorator_X_Error_ className={`${!error && "animate_decorator"} rotate-90 size-8`}/>
                  <p className=""> {error}</p>
                </div>
              </RoughBox>
            )}

            {/* NAME */}
            <div className="w-full">
              <label className="epoch-font text-sm font-medium text-void" htmlFor="name">
                Name <span className="text-rouge">*</span>
              </label>
              <RoughBorder>
                <input
                  className="bg-mist w-full p-3 outline-none focus:ring-2 focus:ring-rouge/50 transition"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || success}
                />
              </RoughBorder>
            </div>

            {/* EMAIL */}
            <div className="w-full">
              <label className="epoch-font text-sm font-medium text-void" htmlFor="email">
                Email <span className="text-rouge">*</span>
              </label>
              <RoughBorder>
                <input
                  className="bg-mist w-full p-3 outline-none focus:ring-2 focus:ring-rouge/50 transition"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || success}
                />
              </RoughBorder>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full">
              <label className="epoch-font text-sm font-medium text-void" htmlFor="description">
                Message <span className="text-rouge">*</span>
              </label>
              <RoughBorder>
                <textarea
                  className="bg-mist w-full h-full p-3 outline-none focus:ring-2 focus:ring-rouge/50 transition resize-y"
                  id="description"
                  rows={8}
                  placeholder="Tell me about your project..."
                  value={formData.description}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || success}
                />
              </RoughBorder>
            </div>

            {/* SUBMIT BUTTON */}
            <RoughBox 
              className={`p-3 text-white btn-pop w-full transition ${
                isSubmitting || success ? 'opacity-50 pointer-events-none' : ''
              }`} 
              fill={`${success ? " #51C769" : "#0277BD"}`}
            >
              <button type="submit" className="w-full" disabled={isSubmitting || success}>
                <h4 className="text-center">
                  {isSubmitting ? ' Sending...' : success ? 'Successfully Sent!' : 'Submit'}
                </h4>
              </button>
            </RoughBox>

            {/* FORM FOOTER */}
            <p className="text-xs text-void/50 mt-2">
              * Required fields. <br /> Your information will never be shared.
            </p>
          </form>
        </div>
      </RoughBorder>

      {/* QUICK LINKS */}
      <div className="flex flex-col justify-center items-center gap-3 w-full">

        {quickLinks.map(({ label, path }) => (
          <Link key={path} to={path} className="w-[75%]">
            <RoughBox fill="white" className="w-full flex items-center justify-center py-3 btn-pop hover:scale-105 transition-transform">
              <h3 className="text-tide text-center uppercase tracking-widest text-sm">
                {label}
              </h3>
            </RoughBox>
          </Link>
        ))}
      </div>

      {/* Quick Questions  */}
      <div className="flex flex-col justify-center items-center gap-3 w-full">

      <div className="flex flex-col gap-3 w-full">
      {quickQuestions.map(({ question, answer }, idx) => (
        <FAQCard
          key={idx}
          question={question}
          answer={answer}
          index={idx}
        />
      ))}
    </div>
      </div>
    </main>
  )
}