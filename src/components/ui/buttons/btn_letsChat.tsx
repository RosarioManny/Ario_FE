import { RoughBorder } from "../border/roughBorder"
import { Link } from "react-router-dom"

export const LetsChatBtn = () => (

  <Link className="btn-pop" to="/contacts">
    <RoughBorder className="size-fit " fill="#FFC107" stroke="#0C1821">
      <button className="px-4 py-2">
        <p className="comico-font text-2xl text-void whitespace-nowrap">Let's Chat</p>
      </button>
    </RoughBorder>
  </Link>
)




