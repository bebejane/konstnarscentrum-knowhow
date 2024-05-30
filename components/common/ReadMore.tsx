import styles from './ReadMore.module.scss'
import { recordToSlug } from '/lib/utils'
import cn from 'classnames'
import Link from 'next/link'
import { useTheme } from 'next-themes'

type Props = {
  message?: string
  link: string,
  invert?: boolean
  regional?: boolean
  external?: boolean
}

export default function ReadMore({ message, link, invert = false, regional, external = false }: Props) {

  const { theme } = useTheme()

  if (!link) return null

  return (
    <Link
      href={recordToSlug(link)}
      className={cn(styles.more, 'small', invert && styles.invert)}
    >
      <div className={cn(styles.square)} data-theme={theme}></div>
      <span data-theme={theme}>{message}</span>
    </Link>
  )
}