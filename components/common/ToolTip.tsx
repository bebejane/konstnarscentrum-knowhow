'use client';

import s from './ToolTip.module.scss';
import { Content } from '@/components';
import ToolTipPopup from 'rc-tooltip';
import { ReactElement } from 'react';

export type Props = {
	lexicon: LexiconRecord;
	children: React.ReactNode | React.ReactNode[];
};

export default function ToolTip({ lexicon, children }: Props): ReactElement<any, any> {
	if (!lexicon) return <>{children}</>;

	return (
		<ToolTipPopup
			placement={'bottomLeft'}
			showArrow={false}
			overlay={<Content id={lexicon.id} content={lexicon.desc} />}
			overlayClassName={s.tooltip}
		>
			<a data-tooltip='true' suppressHydrationWarning={true}>
				{children}
			</a>
		</ToolTipPopup>
	);
}
