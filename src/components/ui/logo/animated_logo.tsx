import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useLogoSize } from '../../../hooks/Logo/useLogoSize'

const LOGO_SIZE = 128

  // --color-void: #0C1821;
  // --color-rouge: #B23A48;
  // --color-flare: #FFC107;
  // --color-tide: #0277BD;
  // --color-mist: #DBD5FC;
export const Animated_RoseArioLogo = ({ lightText = false}) => {
  const { isHome, hasScrolled } = useLogoSize()
  const [scale, setScale] = useState<'hidden' | 'big' | 'small' | 'normal'>('hidden')
  const [textVisible, setTextVisible] = useState(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  // console.log(lightText)

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

  // Non-home pages: pop in once on mount
  useEffect(() => {
    if (!isHome) playAnimation()
    return clearTimers
  }, [isHome])

  // Home page: react to hasScrolled
  useEffect(() => {
    if (!isHome) return
    if (hasScrolled) {
      playAnimation()
    } else {
      playOut()
    }
  }, [isHome, hasScrolled])

  return (
    <Link to="/">
      <div style={{ position: 'relative', width: LOGO_SIZE }}>
        <h1
          style={{
            position: 'absolute',
            left: textVisible ? LOGO_SIZE * 0.85 : LOGO_SIZE * 0.1,
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: LOGO_SIZE * 0.3,
            opacity: textVisible ? 1 : 0,
            transition: 'left 700ms ease-out, opacity 500ms ease-out',
            whiteSpace: 'nowrap',
            zIndex: 0,
            
          }}
          className={`header-text ${lightText ? 'text-mist' : 'text-void'}`}
        >
          <span style={{ fontSize: LOGO_SIZE * 0.5 }}>A</span>rio
        </h1>

        <img
          src="src/assets/images/design/logo/raining_rose_logo_512x512.png"
          alt="Logo"
          style={{
            width: LOGO_SIZE,
            height: LOGO_SIZE,
            position: 'relative',
            zIndex: 10,
            transform:
              scale === 'hidden' ? 'scale(0)' :
              scale === 'big'    ? 'scale(1.25)' :
              scale === 'small'  ? 'scale(0.85)' : 'scale(1)',
            opacity: scale === 'hidden' ? 0 : 1,
            transition: 'transform 300ms ease-out, opacity 300ms ease-out',
          }}
        />
      </div>
    </Link>
  )
}