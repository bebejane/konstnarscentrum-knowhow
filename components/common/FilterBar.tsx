import s from './FilterBar.module.scss'
import cn from 'classnames'
import { useEffect, useState } from 'react'


type FilterOption = {
  id: string,
  label: string
}

type Props = {
  options: FilterOption[],
  multi?: boolean,
  onChange: (value: string[] | string) => void
}

export default function FilterBar({ options = [], onChange, multi = false }: Props) {

  const [selected, setSelected] = useState<FilterOption[]>([])

  useEffect(() => {
    onChange(multi ? selected.map(({ id }) => id) : selected[0]?.id)
  }, [selected])

  return (
    <nav className={s.filter}>

      <ul>
        <li>Visa:</li>

        {options.map((opt, idx) =>
          <li
            key={idx}
            onClick={() => setSelected(selected.find(({ id }) => id === opt.id) ? selected.filter(({ id }) => id !== opt.id) : multi ? [...selected, opt] : [opt])}
            className={cn(selected?.find(({ id }) => id === opt.id) && s.selected)}
          >
            {opt.label}
          </li>
        )}
      </ul>
      <div className={s.background}></div>
    </nav>
  )
}

