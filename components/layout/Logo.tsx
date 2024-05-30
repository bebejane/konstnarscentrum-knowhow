import s from './Logo.module.scss'
import cn from 'classnames'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export type Props = {

}

export default function Logo({ }: Props) {

  return (
    <div className={cn(s.logo)}>
      <Link href="/">Logo</Link>
    </div>
  )
}