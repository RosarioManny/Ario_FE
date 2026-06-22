import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const SmoothScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if ( hash ) {
      const element = document.querySelector(hash)
      if (element ) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }, [pathname, hash])

  return null
}