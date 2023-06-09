import React, { useEffect, useState } from 'react'

type TTimerProps = {
  mm: number
  ss: number
}

const Timer = ({ mm, ss }: TTimerProps) => {
  const [minutes, setMinutes] = useState(mm)
  const [seconds, setSeconds] = useState(ss)

  useEffect(() => {
    setMinutes(3)
    setSeconds(0)
  }, [mm])

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown)
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => clearInterval(countdown)
  }, [minutes, seconds])

  return (
    <span>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </span>
  )
}

export default Timer
