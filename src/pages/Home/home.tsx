import { LetsChatBtn } from "../../components/ui/buttons/btn_letsChat"
import { Animated_RoseArioLogo_Large } from "../../components/ui/logo/large_home_logo"

export const Home = () => {
  return (
    <main className="h-[1400px]">
      <div className="flex flex-col align-center items-center">
        <Animated_RoseArioLogo_Large />
        <p className="hero-header-text text-center">Your next web developer!</p>
        <p className="text-xl epoch-font text-center my-2 opacity-70">
          100% Custom code made by an indie web developer. Authentic, creative & care in every step.
        </p>
        <LetsChatBtn />
      </div>
    </main>
  )
}