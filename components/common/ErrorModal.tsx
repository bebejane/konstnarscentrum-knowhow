import s from "./ErrorModal.module.scss";
import cn from 'classnames'

export type Props = {
  error: Error | string
  onClose: () => void
}

export default function ErrorModal({ error, onClose }: Props) {

  const message = typeof error === 'string' ? error : error?.message

  return (
    <div className={cn(s.overlay, s.transparent)}>
      <div className={s.error}>
        <h3>Det uppstod ett fel</h3>
        <div className={s.message}>{message}</div>
        <button onClick={onClose}>Stäng</button>
      </div>
    </div>
  );
}
