'use client'

import { useState, useEffect, useRef } from 'react'

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i

    setIsMobile(mobileRegex.test(userAgent))
  }, [])

  return isMobile
}

//디바이스 너비값 실시간으로 가져오기
export const useDeviceWidth = (): number => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return width
}

interface ComponentSize {
  width: number
  height: number
}

export const useComponentSize = (): [React.RefObject<HTMLDivElement>, ComponentSize] => {
  const [size, setSize] = useState<ComponentSize>({ width: 0, height: 0 })
  const componentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      const { width, height } = componentRef.current?.getBoundingClientRect() ?? {
        width: 0,
        height: 0,
      }
      setSize({ width, height })
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return [componentRef, size]
}

export const useScrollAtBottom = (threshold = 10) => {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight

      // 스크롤이 바닥에 닿았는지 확인 (threshold 값만큼 여유 포함)
      if (scrollTop + clientHeight >= scrollHeight - threshold) {
        setIsAtBottom(true)
      } else {
        setIsAtBottom(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return isAtBottom
}
