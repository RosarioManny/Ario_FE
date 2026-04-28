// Home.tsx
import { useLogoSize } from "../../hooks/Logo/useLogoSize"
import { LetsChatBtn } from "../../components/ui/buttons/btn_letsChat"
import { useState } from "react"


export const Home = () => {
  const { logoSize } = useLogoSize()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const isMobile = Boolean(windowWidth <= 600)
  const paddingTop = isMobile ? 10 : 4
  console.log(isMobile)

  return (
    <main className="h-[1400px]">
      <div
        style={{ paddingTop: logoSize - (logoSize / paddingTop)}}
        className="flex flex-col  items-center">
        <p className="hero-header-text text-center">Your next web developer!</p>
        <p className="text-xl epoch-font text-center my-2 opacity-70">
          100% Custom code made by an indie web developer. Authentic, creative & care in every step.
        </p>
        <LetsChatBtn />
      </div>
    </main>
  )
}