
import s from './ToolTip.module.scss'
import { StructuredContent } from '/components'
import ToolTipPopup from 'rc-tooltip'
import { ReactElement } from 'react'

export type Props = {
  lexicon: LexiconRecord
  children: React.ReactNode | React.ReactNode[]
}

export default function ToolTip({ lexicon, children }: Props): ReactElement<any, any> {

  if (!lexicon) return <>{children}</>

  return (
    <ToolTipPopup
      placement={'topLeft'}
      showArrow={false}
      overlay={<StructuredContent id={lexicon.id} record={{}} content={lexicon.desc} />}
      overlayClassName={s.tooltip}
    >
      <a id={lexicon.id} data-tooltip="true">{children}</a>
    </ToolTipPopup>
  );
}