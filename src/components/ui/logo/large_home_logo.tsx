import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useLogoSize } from '../../../hooks/Logo/useLogoSize'

const LOGO_SIZE = 256

export const Animated_RoseArioLogo_Large = () => {
  const { hasScrolled } = useLogoSize()

  const [scale, setScale] = useState<'hidden' | 'big' | 'small' | 'normal'>('hidden')
  const [textVisible, setTextVisible] = useState(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  const playAnimation = () => {
    clearTimers()
    setScale('hidden')
    setTextVisible(false)
    timers.current = [
      setTimeout(() => setScale('big'),      50),
      setTimeout(() => setScale('small'),    400),
      setTimeout(() => setScale('normal'),   700),
      setTimeout(() => setTextVisible(true), 900),
    ]
  }

  const playOut = () => {
    clearTimers()
    setTextVisible(false)
    timers.current = [setTimeout(() => setScale('hidden'), 100)]
  }

  // Play on mount
  useEffect(() => {
    playAnimation()
    return clearTimers
  }, [])

  // Hide when scrolled, reanimate when back at top
  useEffect(() => {
    if (hasScrolled) {
      playOut()
    } else {
      playAnimation()
    }
  }, [hasScrolled])

  return (
    <Link to="/">
      <div 
      className="flex items-center justify-start w-full"
      style={{
        width: '100%',
        padding: '0 48px 28px 0',
        
      }}>
        <img
          src="src/assets/images/design/logo/raining_rose_logo_512x512.png"
          alt="Logo"
          style={{
            width: LOGO_SIZE,
            height: LOGO_SIZE,
            flexShrink: 0,
            transform:
              scale === 'hidden' ? 'scale(0)' :
              scale === 'big'    ? 'scale(1.25)' :
              scale === 'small'  ? 'scale(0.85)' : 'scale(1)',
            opacity: scale === 'hidden' ? 0 : 1,
            transition: 'transform 300ms ease-out, opacity 300ms ease-out',
          }}
        />

        <h1
          style={{
            fontSize: LOGO_SIZE * 0.3,
            marginLeft: -32,
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateX(0)' : 'translateX(-20px)',
            transition: 'transform 700ms ease-out, opacity 500ms ease-out',
            whiteSpace: 'nowrap',
          }}
          className="header-text text-void"
        >
          <span style={{ fontSize: LOGO_SIZE * 0.5 }}>A</span>rio
        </h1>
      </div>
    </Link>
  )
}