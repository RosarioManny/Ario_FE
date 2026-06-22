import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useLogoSize = () => {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    const handleScroll = () => setHasScrolled(window.scrollY > 150)
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isSmall = !isHome || hasScrolled

  const logoSize = isSmall
    ? windowWidth >= 769 ? 120 : 100
    : windowWidth >= 1024 ? 400
    : windowWidth >= 768  ? 350
    : windowWidth >= 480  ? 300
    : 200

  // Always the large size — never changes on scroll, use for minHeight on the hero wrapper
  const heroSize =
    windowWidth >= 1024 ? 400
    : windowWidth >= 768  ? 350
    : windowWidth >= 480  ? 300
    : 200

  return {
    logoSize,
    heroSize,
    isSmall,
    isHome,
    hasScrolled,
    windowWidth,
    setHasScrolled,
    setWindowWidth,
  }
}