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
  // windowWidth * scale%, min-size, max-size
  // Small Corner Logo
  ? Math.min(Math.max(windowWidth * 0.1, 100), 400)
  // Large Hero Logo
  : Math.min(Math.max(windowWidth * 0.50, 300), 400)
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