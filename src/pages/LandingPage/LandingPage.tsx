import { LetsChatBtn } from "../../components/ui/buttons/btn_letsChat"
import { Animated_RoseArioLogo_Large } from "../../components/ui/logo/large_home_logo"
import { _Decorator_Lips, _Decorator_Ratears, _Decorator_PenNib, _Decorator_Samosa } from "../../assets/SVGs/Decorator_svgs"
import { RoughBox } from "../../components/ui/containers/roughBox"
import { Link } from "react-router-dom"
import { useInView } from "../../hooks/Observers/useInView"
import {
  services,
  testimonials,
  featuredProjects,
  processSteps,
  RESPONSE_TIME,
  PROJECT_TIMELINE,
  VALUE_PROP
} from "./data"

export const LandingPage = () => {
  const { ref: penNibRef, inView: penNibInView } = useInView(0.8)
  const { ref: ratearsRef, inView: ratearsInView } = useInView(0.8)
  const { ref: lipsRef, inView: lipsInView } = useInView(0.8)
  const { ref: samosaRef, inView: samosaInView } = useInView(0.8)


  return (
    <main className="w-full flex flex-col items-center">

      {/* ============== HERO ============== */}
      <section className="w-full flex flex-col items-center justify-center gap-6 py-12 px-4">
        <Animated_RoseArioLogo_Large />
        <h1 className="special-text text-center text-void">Your Next Web Developer!</h1>
        
        <div className="md:w-[50%] w-full text-center flex items-center flex-col opacity-70 px-4 gap-3">
          <p className="comico-font text-lg text-void">
            {VALUE_PROP}
          </p>
          <p className="epoch-font text-void">
            100% custom code made by an indie web developer — authentic, creative & care in every step.
          </p>
        </div>

        <LetsChatBtn />
      </section>
      <div ref={penNibRef}>
        <_Decorator_PenNib 
          className={`size-20 text-rouge -rotate-45 ${penNibInView ? 'animate_decorator' : 'opacity-0'}`} 
        />
      </div>
      
       {/* ============== FEATURED PORTFOLIO ============== */}
      <section className="w-full max-w-4xl mx-auto px-4 py-12 gap-8 flex flex-col">
        <h2 className="text-secondary text-void text-center">Featured Work</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <Link key={idx} to={`${project.link}`}>
              <RoughBox fill="white" className="h-full p-4 btn-pop hover:scale-105 transition-transform">
                <div className="flex flex-col gap-3 h-full justify-between">
                  <div className="max-h-[300px] flex flex-col gap-3">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full object-cover rounded"
                    />
                    <div>
                      <h4 className="comico-font text-void">{project.title}</h4>
                      <p className="epoch-font text-xs text-tide uppercase tracking-widest">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  {project.description && (
                    <p className="epoch-font text-sm text-void opacity-60">
                      {project.description}
                    </p>
                  )}
                </div>
              </RoughBox>
            </Link>
          ))}
        </div>
      </section>
      
      <div ref={ratearsRef}>
        <_Decorator_Ratears 
          strokeWidth={8} 
          className={`size-20 text-rouge -rotate-15 ${ratearsInView ? 'animate_decorator' : 'opacity-0'}`} 
        />
      </div>
      {/* ============== SERVICES ============== */}
      <section className="w-full max-w-4xl mx-auto px-4 py-12 gap-8 flex flex-col">
        <h2 className="text-secondary text-void text-center">What I Build</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <RoughBox key={idx} fill="white" className="p-6">
              <div className="flex flex-col gap-2">
                <h3 className="comico-font text-tertiary text-rouge">{service.name}</h3>
                <p className="epoch-font text-void opacity-70 text-sm">
                  {service.description}
                </p>
              </div>
            </RoughBox>
          ))}
        </div>
      </section>

      {/* ============== RESPONSE TIME & TIMELINE ============== */}
      <section className="w-full max-w-4xl mx-auto px-4 py-12 gap-6 flex flex-col md:flex-row md:justify-around md:items-center">
        <div className="flex flex-col items-center gap-2 text-center">
          <h4 className="comico-font text-4xl text-tide">{RESPONSE_TIME}</h4>
          <p className="epoch-font text-void opacity-70 text-sm">Response time</p>
        </div>
        <hr style={{ filter: 'url(#rough-dot)'}}  className="border-0 h-12 bg-rouge w-1" />
        {/* <div className="hidden md:block w-1 h-12 bg-rouge " /> */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h4 className="comico-font text-4xl text-tide">{PROJECT_TIMELINE}</h4>
          <p className="epoch-font text-void opacity-70 text-sm">Project timeline</p>
        </div>
      </section>

      {/* ============== PROCESS ============== */}
      <section className="w-full max-w-4xl mx-auto px-4 py-12 gap-8 flex flex-col">
        <h2 className="text-secondary text-void text-center">How It Works</h2>
        
        <div className="grid md:grid-cols-4 gap-4">
          {processSteps.map((step, idx) => (
            <RoughBox key={idx} fill="white" className="p-6">
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-tide flex items-center justify-center">
                  <span className="comico-font text-white text-lg">{step.number}</span>
                </div>
                <h4 className="comico-font text-void">{step.title}</h4>
                <p className="epoch-font text-sm text-void opacity-70">
                  {step.description}
                </p>
              </div>
            </RoughBox>
          ))}
        </div>
      </section>
      <div ref={lipsRef}>
        <_Decorator_Lips 
          strokeWidth={9} 
          className={`size-20 text-rouge rotate-15 ${lipsInView ? 'animate_decorator' : 'opacity-0'}`} 
        />
      </div>
      {/* ============== CTA ============== */}
      <section className="w-full max-w-4xl mx-auto px-4 py-12 gap-6 flex flex-col items-center text-center">
        <h2 className="text-secondary text-void">Ready to Get Started?</h2>
        <p className="epoch-font text-void opacity-70 md:w-[60%]">
          Let's chat about your project. I respond within {RESPONSE_TIME} and would love to hear about your vision.
        </p>
        <LetsChatBtn />
      </section>

       {/* ============== TESTIMONIALS ============== */}
      <section className="w-full max-w-4xl mx-auto px-4 py-12 gap-8 flex flex-col">
        <h2 className="text-secondary text-void text-center">What Clients Say</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <RoughBox key={idx} fill="#f5efe6" className="p-6 h-full" align="start">
              <div className="flex flex-col h-full justify-between gap-4">
                <div>
                  <span className="comico-font text-5xl text-tide leading-none">"</span>
                  <p className="epoch-font text-void opacity-80 italic">
                    {testimonial.quote}
                  </p>
                </div>
                
                <div className="flex flex-col gap-1 pt-4 border-t border-void">
                  <p className="comico-font text-void font-semibold">{testimonial.author}</p>
                  {testimonial.role && (
                    <p className="epoch-font text-sm text-void opacity-60">{testimonial.role}</p>
                  )}
                  {testimonial.projectName && (
                    <p className="epoch-font text-xs text-tide opacity-70">{testimonial.projectName}</p>
                  )}
                </div>
              </div>
            </RoughBox>
          ))}
        </div>
      </section>
      <div ref={samosaRef}>
        <_Decorator_Samosa 
          strokeWidth={8} 
          className={`size-20 text-rouge  ${samosaInView ? 'animate_decorator' : 'opacity-0'}`} 
        />
      </div>
    </main>
  )
}