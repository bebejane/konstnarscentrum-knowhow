import s from './BackgroundImage.module.scss'
import React from 'react'

export type BackgroundImageProps = {
  image: FileField,
}

export default function BackgroundImage({ image }: BackgroundImageProps) {

  return (
    <div
      className={s.background}
      // @ts-ignore
      style={{ '--background': `url(${image?.url}?w=1000)` }}
    ></div>
  )
}