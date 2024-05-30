import s from './User.module.scss'
import cn from 'classnames'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import UserIcon from '/public/images/user.svg'
import { useSession } from 'next-auth/react'

export default function User({ }) {

  const { data, status } = useSession()

  if (status === 'unauthenticated' || status === 'loading')
    return null

  return (
    <div className={s.container}>
      <Link href={'/konstnar/konto'}>
        <UserIcon />
      </Link>
    </div>
  )
}