import s from './MetaSection.module.scss'
import { isEmail } from '/lib/utils'

export type Props = {
  items: {
    title: string
    value: string
  }[]
}

export default function MetaSection({ items = [] }: Props) {

  return (
    <section className={s.meta}>
      <table className="small">
        <tbody>
          {items.filter(({ value, title }) => value && title).map(({ title, value }, idx) =>
            <tr key={idx}>
              <td><span>{title}</span></td>
              <td>{isEmail(value) ? <a href={`mailto:${value}`}>E-post</a> : <>{value}</>}</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  )
}
