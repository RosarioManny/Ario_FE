import { useState } from "react"
import { PortfolioData } from "./data"
import { _Decorator_PenNib, _Decorator_Line} from "../../assets/SVGs/Decorator_svgs"
import { PortfolioNav } from "./components/portfolioNavbar"
import { RoughBorder } from "../../components/ui/containers/roughBorder"
import { RoughBox } from "../../components/ui/containers/roughBox"


export const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  // Active is shorthand for "the currently selected portfolio item". 
  // Instead of writing PortfolioData[activeIndex].title, PortfolioData[activeIndex].description, etc. 
  // Just write active.title, active.description — cleaner to read.
  const active = PortfolioData[activeIndex] 

  return (
    <main className="w-full max-w-3xl mx-auto px-4 py-8 flex flex-col gap-8">

      {/* HEADER */}
      <section className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-3">
          <_Decorator_PenNib className="animate_decorator text-rouge size-16"/>
          <h1 className=" header-text text-void uppercase tracking-widest">Projects</h1>
        </div>
        <_Decorator_Line className="w-full h-7" strokeWidth={9} />
      </section>

      {/* NAV */}
      <PortfolioNav
        items={PortfolioData}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />

      {/* CATEGORY + PURPOSE */}
      <section className="flex flex-col gap-1">
        <p className="epoch-font text-tide uppercase tracking-widest text-sm font-bold">
          {active.category.join(" & ")} — {active.purpose.join(", ")}
        </p>
        <p className="epoch-font text-void">{active.description}</p>
      </section>

      {/* LOGO CARD */}
      <RoughBorder className="border-rough rounded-md overflow-hidden bg-[#f5efe6] flex items-center justify-center p-10">
        <img
          src={active.logoCard.src}
          alt={active.logoCard.alt}
          className="max-h-64 object-contain"
        />
        {active.logoCard.description && (
          <p className="epoch-font text-center text-sm text-void opacity-60 mt-4">
            {active.logoCard.description}
          </p>
        )}
      </RoughBorder>

      {/* WEBSITE PREVIEW */}
      {active.websiteCard && (
        <section className="flex flex-col gap-2">
          <a
            href={active.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="epoch-font text-tide underline text-sm tracking-wide"
          >
            {active.websiteUrl}
          </a>
          <div className="border-rough rounded-md overflow-hidden">
            <img
              src={active.websiteCard.src}
              alt={active.websiteCard.alt}
              className="w-full object-cover"
            />
          </div>
        </section>
      )}

      {/* SHOWCASE */}
      {active.showcaseCards.length > 0 && (
        <section className="flex flex-col gap-4">
          {active.showcaseDescription && (
            <p className="epoch-font text-void">{active.showcaseDescription}</p>
          )}
          <div className="grid grid-cols-2 gap-4">
            {active.showcaseCards.map((card, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="border-rough rounded-md overflow-hidden">
                  <img src={card.src} alt={card.alt} className="w-full object-cover" />
                </div>
                {card.description && (
                  <p className="epoch-font text-sm text-void opacity-60 text-center">
                    {card.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* MISC CARDS */}
      {active.miscCards && active.miscCards.length > 0 && (
        <section className="grid grid-cols-2 gap-4">
          {active.miscCards.map((card, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="border-rough rounded-md overflow-hidden">
                <img src={card.src} alt={card.alt} className="w-full object-cover" />
              </div>
              {card.description && (
                <p className="epoch-font text-sm text-void opacity-60 text-center">
                  {card.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* TESTIMONIAL */}
      <section className="flex flex-col items-center gap-4 py-4">
        <span className="comico-font text-tide text-5xl ">"</span>
        <blockquote className="epoch-font text-center text-void max-w-md">
          {active.testimonial.quote}
        </blockquote>
        <div className="flex flex-col items-center">
          <h3 className="text-rouge">{active.testimonial.author}</h3>
          {active.testimonial.role && (
            <h4 className="epoch-font text-sm text-void opacity-60">{active.testimonial.role}</h4>
          )}
        </div>
        <span className="comico-font text-tide text-5xl rotate-180">"</span>
      </section>

      {/* CTA */}
      <section className="flex justify-center pb-8">
        <button className="btn-pop border-rough px-8 py-3 bg-flare">
          <span className="comico-font text-void uppercase tracking-widest text-lg">
            {active.ctaLabel ?? "Let's Chat"}
          </span>
        </button>
      </section>

    </main>
  )
}