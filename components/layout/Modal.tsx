import ReactDOM from 'react-dom';
import React, { use, useEffect } from 'react'
import { isServer } from '/lib/utils';

type ModalProps = {
  children: React.ReactElement | React.ReactElement[]
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>((props, ref) => {

  const [mounted, setMounted] = React.useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  return ReactDOM.createPortal(props.children, document.body)
})

Modal.displayName = 'Modal'

export default Modal;
