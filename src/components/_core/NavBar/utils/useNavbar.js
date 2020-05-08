import { useState, useEffect, useRef } from 'react'

function useNavbar () {
  const [isScrolled, setIsScrolled] = useState(false)

  const navBarRef = useRef(null)

  const handleScroll = e => {
    const offset = e.srcElement.scrollingElement.scrollTop

    if (navBarRef.current) {
      setIsScrolled(offset > navBarRef.current.clientHeight)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  return {
    navBarRef,
    isScrolled
  }
}

export default useNavbar
