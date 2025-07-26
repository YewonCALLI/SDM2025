'use client'

import { useEffect, useState } from 'react'

export function CountdownBars() {
  const barColors = ['#FFDF80', '#FF60B9', '#FF5E1F', '#FF8E3D']
  const baseHeights = [5, 7, 10, 14]
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0">
      <div className="relative w-full h-full flex flex-col justify-end">
        {Array.from({ length: 4 }, (_, position) => {
          const currentColorIndex = (position + tick) % barColors.length
          const nextColorIndex = (position + tick + 1) % barColors.length
          const currentColor = barColors[currentColorIndex]
          const nextColor = barColors[nextColorIndex]
          const height = baseHeights[position]

          return (
            <div
              key={position}
              className="w-full relative overflow-hidden"
              style={{ height: `${height}vh` }}
            >
              <div
                className="absolute inset-0 transition-transform duration-1000 ease-out"
                style={{
                  backgroundColor: currentColor,
                  transform: `translateY(0%)`,
                }}
              />
              <div
                className="absolute inset-0 transition-transform duration-1000 ease-out"
                style={{
                  backgroundColor: nextColor,
                  transform: `translateY(100%)`,
                  animation: `slideUp-${tick} 1000ms ease-out forwards`,
                }}
              />
              <style jsx>{`
                @keyframes slideUp-${tick} {
                  from {
                    transform: translateY(100%);
                  }
                  to {
                    transform: translateY(0%);
                  }
                }
              `}</style>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CountdownBars