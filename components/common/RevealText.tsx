import s from './RevealText.module.scss'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export type Props = {
  children: React.ReactNode | string,
  start?: boolean,
  className?: string
  delay?: number
  speed?: number
  opacity?: number
}

export default function RevealText({ children, className, start, delay = 0.0, speed = 0.65, opacity = 0.0 }: Props) {

  const text = typeof children === 'string' ? children : children.props.children
  const [delays, setDelays] = useState([])
  const [startAnimation, setStartAnimation] = useState(false)
  const { inView, ref } = useInView({ triggerOnce: true, trackVisibility: false, skip: start === undefined ? false : true })

  useEffect(() => {
    const delays = new Array(text.length).fill(0).map((el, idx) => (idx + 1) * (speed / text.length)).sort(() => Math.random() > 0.5 ? 1 : -1)
    setDelays(delays)
    if (!inView && !start) return
    setStartAnimation(start === true ? true : start === false ? false : start === undefined && inView)
  }, [setDelays, text, inView, speed, start])

  return (
    <>
      {text.split('').map((c, idx) =>
        <span
          key={idx}
          ref={idx === 0 ? ref : undefined}
          className={s.char}
          style={{
            animationName: startAnimation ? 'show' : undefined,
            animationDelay: `${delays[idx] + delay}s`,
            opacity
          }}
        >{c}</span>
      )}
    </>
  )
}