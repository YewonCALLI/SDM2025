'use client'

import React, { useEffect, useState } from 'react'
import Header from '@/components/coming/Header'
import { Footer } from '@/components/coming/Footer'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import Colon from './Colon'
import TimeUnit from './TimeUnit'
import { CountdownBars } from './CountdownBars'

dayjs.extend(utc)
dayjs.extend(timezone)

export default function ComingSoonSection() {
  const [mounted, setMounted] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [totalDuration, setTotalDuration] = useState(1)

  const targetDate = dayjs.tz('2025-08-22 00:00:00', 'Asia/Seoul')

  useEffect(() => {
    setMounted(true)

    const calculateTime = () => {
      const diff = Math.max(0, targetDate.diff(dayjs(), 'second'))
      return diff
    }

    const initialDiff = calculateTime()
    setSecondsLeft(initialDiff)
    setTotalDuration(initialDiff)

    const timer = setInterval(() => {
      const diff = calculateTime()
      setSecondsLeft(diff)
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const days = Math.floor(secondsLeft / (60 * 60 * 24))
  const hours = Math.floor((secondsLeft % (60 * 60 * 24)) / (60 * 60))
  const minutes = Math.floor((secondsLeft % (60 * 60)) / 60)
  const seconds = secondsLeft % 60

  return (
    <section className='relative isolate w-[100vw] h-[100vh] bg-[#FFF790] text-black text-center overflow-hidden'>
      <CountdownBars />

      <div className='absolute bottom-0 mix-blend-difference left-0 w-full z-10 pointer-events-none'>
        <Footer />
      </div>

      <div className='relative z-20'>
        <Header />
      </div>

      <div className='absolute top-[39.87%] left-1/2 transform -translate-x-1/2 text-[18vw] font-bold flex items-start justify-center'>
        <TimeUnit value={days} />
        <Colon width={24} className="py-6" />
        <TimeUnit value={hours} />
        <Colon width={24} className="py-6"/>
        <TimeUnit value={minutes} />
        <Colon width={24} className="py-6"/>
        <TimeUnit value={seconds} />
      </div>
    </section>
  )
}
