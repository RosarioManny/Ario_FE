import { LetsChatBtn } from "../../components/ui/buttons/btn_letsChat"
export const Home = () => {
  return (
    <main className="my-32">
      <div  className="flex flex-col items-center">
        <h2 className="hero-header-text text-center">Your next web developer!</h2>
        <p className="epoch-font text-center my-4 opacity-70">
          100% Custom code made by an indie web developer. Authentic, creative & care in every step.
        </p>
        <LetsChatBtn />
      </div>
    </main>
  )
}