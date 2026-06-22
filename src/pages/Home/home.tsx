import { LetsChatBtn } from "../../components/ui/buttons/btn_letsChat"
import { Animated_RoseArioLogo_Large } from "../../components/ui/logo/large_home_logo"

export const Home = () => {
  return (
    <main className="h-[1400px]">
      <div className="flex flex-col align-center items-center">
        <Animated_RoseArioLogo_Large />
        <h4 className="special-text text-center">Your next web developer!</h4>
        <div className="md:w-[50%] text-center flex items-center flex-col opacity-70 p-2">
          <h4 >
            Custom by standard. Independent by choice. 
          </h4>
          <h4 >100% custom code made by an indie web developer — authentic, creative & care in every step.</h4>
        </div>
        <LetsChatBtn />
      </div>
    </main>
  )
}