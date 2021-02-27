import { useState, useEffect } from "react"

export const useScrollHandler = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 40
      if (scrollCheck !== scroll) {
        setIsScrolled(scrollCheck)
      }
    }

    document.addEventListener("scroll", onScroll)

    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [isScrolled, setIsScrolled])

  return isScrolled
}