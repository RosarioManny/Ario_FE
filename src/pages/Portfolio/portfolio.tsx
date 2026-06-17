import { useState } from "react"
import { PortfolioData } from "./data"
import { _Decorator_PenNib, _Decorator_Line, _Decorator_External_Link_} from "../../assets/SVGs/Decorator_svgs"
import { PortfolioNav } from "./components/portfolioNavbar"
import { RoughBorder } from "../../components/ui/containers/roughBorder"
import { LetsChatBtn } from "../../components/ui/buttons/btn_letsChat"

// Reusable linked image card with hover overlay
const SiteLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative block "
  >
    {children}
    <div className="
      absolute inset-0 bg-void/50
      flex items-center justify-center
      opacity-0 group-hover:opacity-100
      group-focus:opacity-100
      transition-opacity duration-200
      rounded-md z-90
    ">
      <h4 className="comico-font flex items-center justify-center gap-4 text-flare tracking-widest text-lg">
        Go to Website <_Decorator_External_Link_ strokeWidth={12} className="size-[20px] md:size-[28px]"/>
      </h4>
    </div>
  </a>
)

export const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const RoughBorderWidth = 8
  const active = PortfolioData[activeIndex]

  return (
    <main className="w-full max-w-3xl mx-auto px-4 py-8 flex flex-col gap-8">

      {/* HEADER */}
      <section className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-3">
          <_Decorator_PenNib className="animate_decorator text-rouge size-16"/>
          <h1 className="header-text text-void uppercase tracking-widest">Projects</h1>
        </div>
        <_Decorator_Line className="animate_decorator w-full h-8" strokeWidth={15} />
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
      <SiteLink href={active.websiteUrl}>
        <RoughBorder  strokeWidth={RoughBorderWidth} className={`rounded-md overflow-hidden bg-[linear-gradient(135deg,#FFF6E7,#EAA000)] flex items-center justify-center p-10`}>
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
      </SiteLink>

      {/* WEBSITE PREVIEW */}
      {active.websiteCard && (
        <SiteLink href={active.websiteUrl}>
          <RoughBorder strokeWidth={RoughBorderWidth} className="rounded-md overflow-hidden">
            <img
              src={active.websiteCard.src}
              alt={active.websiteCard.alt}
              className="w-full object-cover max-h-[750px]"
            />
          </RoughBorder>
        </SiteLink>
      )}

      {/* SHOWCASE */}
      {active.showcaseCards.length > 0 && (
        <section className="flex flex-col gap-4">
          {active.showcaseDescription && (
            <p className="epoch-font text-void">{active.showcaseDescription}</p>
          )}
          <div className="flex flex-col gap-4">
            {active.showcaseCards.map((card, i) => (
              <div key={i} className="flex flex-col gap-2">
                <SiteLink href={active.websiteUrl}>
                  <RoughBorder strokeWidth={RoughBorderWidth} className="max-h-[350px] rounded-md overflow-hidden">
                    <img src={card.src} alt={card.alt} className="w-full object-cover" />
                  </RoughBorder >
                </SiteLink>
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
              <SiteLink href={active.websiteUrl}>
                <RoughBorder strokeWidth={RoughBorderWidth} className="rounded-md overflow-hidden">
                  <img src={card.src} alt={card.alt} className="w-full object-cover" />
                </RoughBorder>
              </SiteLink>
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
        <span className="comico-font text-tide text-5xl">"</span>
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
      <section className="flex items-center justify-center">
        <LetsChatBtn />
      </section>

    </main>
  )
}