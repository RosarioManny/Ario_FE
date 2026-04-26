// Home.tsx
import { useLogoSize } from "../../hooks/Logo/useLogoSize"
import { LetsChatBtn } from "../../components/ui/buttons/btn_letsChat"

export const Home = () => {
  const { logoSize } = useLogoSize()

  return (
    <main className="h-[1400px]">
      <div
        style={{ paddingTop: logoSize - 32 }}
        className="flex flex-col items-center">
        <h2 className="hero-header-text text-center">Your next web developer!</h2>
        <p className="text-xl epoch-font text-center my-2 opacity-70">
          100% Custom code made by an indie web developer. Authentic, creative & care in every step.
        </p>
        <LetsChatBtn />
      </div>
    </main>
  )
}