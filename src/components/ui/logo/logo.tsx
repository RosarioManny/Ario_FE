import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLogoSize } from '../../../hooks/Logo/useLogoSize'

export const RoseArioLogo = () => {
  const { logoSize, isSmall, isHome } = useLogoSize()

  const [popStage, setPopStage] = useState<'hidden' | 'big' | 'normal'>('hidden')
  const [textVisible, setTextVisible] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setPopStage('big'), 100)
    const t2 = setTimeout(() => setPopStage('normal'), 500)
    const t3 = setTimeout(() => setTextVisible(true), 800)
    return () => [t1, t2, t3].forEach(clearTimeout)
  }, [])

  const leftPosition = isSmall
    ? 12 : (window.innerWidth / 2) 

    console.log("LP >> ", leftPosition)
    console.log("LS >>",logoSize)
  const topPosition = isSmall
    ? 12 : window.innerHeight * 0.18
    
  const textHiddenLeft = logoSize * 0.4
  const textVisibleLeft = logoSize * 0.82

  return (
    <Link to="/">
      <div
        style={{
          position: 'fixed',
          width: logoSize,
          top: topPosition,
          left: leftPosition,
          transform: isSmall ? 'translateX(0)' : 'translateX(-75%)',
          transition: 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}>

        <h1
          style={{
            position: 'absolute',
            left: textVisible && isHome ? textVisibleLeft : textHiddenLeft,
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: logoSize * 0.18,
            opacity: textVisible && isHome ? 1 : 0,
            transition: 'all 1000ms ease-out',
            whiteSpace: 'nowrap',
            zIndex: 0,
          }}
          className="header-text text-void">
          <span style={{ fontSize: logoSize * 0.25 }}>A</span>rio
        </h1>

        <img
          style={{
            width: logoSize,
            height: logoSize,
            position: 'relative',
            zIndex: 10,
            transition: 'all 300ms ease-out',
            transform:
              popStage === 'hidden' ? 'scale(0)' :
              popStage === 'big'    ? 'scale(1.3)' : 'scale(1)',
            opacity: popStage === 'hidden' ? 0 : 1,
          }}
          src="src/assets/images/design/logo/raining_rose_logo_512x512.png"
          alt="Logo"
        />
      </div>
    </Link>
  )
}