import { RoughBox } from "../containers/roughBox"
import { Link } from "react-router-dom"

export const LetsChatBtn = () => (

  // <Link className="btn-pop" to="/contacts">
  <Link className="btn-pop" to="/#footer">
    <RoughBox className="size-full " fill="#FFC107" stroke="#0C1821">
      <button className="px-4 py-2">
        <h3 className="comico-font text-2xl text-void whitespace-nowrap">Let's Chat</h3>
      </button>
    </RoughBox>
  </Link>
)




