import { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { useWindowSize } from 'rooks'
import { breakpoints } from '/lib/utils'

export default function useDevice() {

  const mobile = useMediaQuery(`(max-width: ${breakpoints.tablet}px)`)
  const desktop = !useMediaQuery(`(min-width: ${breakpoints.desktop}px)`)
  const tablet = !useMediaQuery(`(min-width: ${breakpoints.tablet}px)`)

  const [isMobile, setIsMobile] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const { innerHeight, innerWidth } = useWindowSize()


  useEffect(() => {
    setIsMobile(mobile)
    setIsDesktop(!mobile && !tablet ? true : false)
    setIsTablet(desktop && !mobile ? true : false)
  }, [mobile, desktop, tablet, innerHeight, innerWidth])

  return { isMobile, isDesktop, isTablet }
}

