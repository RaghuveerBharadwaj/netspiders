import React from 'react'
import { useSpring, animated as a } from 'react-spring'

export const Hamburger = ({
  open,
  setOpen
}) => {
  const { l1transform, l3transform, l2opacity, left, top1, top3 } = useSpring({
    l1transform: `rotate(${open ? 315 : 0}deg)`,
    top1: open ? '8px' : '0px',
    top3: open ? '-8px' : '0px',
    l2opacity: open ? 0 : 1,
    left: open ? '-20px' : '0px',
    l3transform: `rotate(${open ? -315 : 0}deg)`,
    config: { mass: 5000, tension: 2000, friction: 1000, duration: 500 }
  })

  const closeMenu = () => {
    setOpen(!open)
  }
  return (
      <div onClick={closeMenu} className={open ? "hamburger" : "hamburger open"}>
        <a.span style={{ transform: l1transform, top: top1 }} />
        <a.span style={{ opacity: l2opacity, left }} />
        <a.span style={{ transform: l3transform, top: top3 }} />
      </div>
  )
}