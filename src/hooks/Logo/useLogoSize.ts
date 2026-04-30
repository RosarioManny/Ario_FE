// hooks/useLogoSize.ts
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useLogoSize = () => {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    const handleScroll = () => setHasScrolled(window.scrollY > 50)
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isSmall = !isHome || hasScrolled

const logoSize = isSmall
  ? // Small Corner Logo — 4 breakpoints
    windowWidth >= 769  ? 120 : 100 // tablet / large phone / small
  : // Large Hero Logo — 4 breakpoints
    windowWidth >= 1024 ? 400 :  // desktop
    windowWidth >= 768  ? 350 :  // tablet
    windowWidth >= 480  ? 300 :  // large phone
                          200    // small phone
  return { 
    logoSize, 
    isSmall, 
    isHome, 
    hasScrolled,
    windowWidth, 
    setHasScrolled, 
    setWindowWidth 
  }
}