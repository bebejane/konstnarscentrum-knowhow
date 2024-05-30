import s from './index.module.scss'
import cn from 'classnames'
import withGlobalProps from "/lib/withGlobalProps";
import { GetStaticProps } from "next";
import { AllLexiconsDocument } from "/graphql";
import { StructuredContent } from '/components'
import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { RevealText } from '/components';
import { render } from 'datocms-structured-text-to-html-string';
import ToolTip from 'rc-tooltip'

export type Props = {
  region: Region
  lexicons: LexiconRecord[]
  lexiconText: LexiconTextRecord
}

export default function Lexicons({ lexicons, lexiconText }: Props) {


  return (
    <div className={s.container}>
      <h1>
        <RevealText>Lexicon</RevealText><sup className="amount">{lexicons.length}</sup>
      </h1>
      <StructuredContent content={lexiconText.intro} id={lexiconText.id} record={lexiconText} />
      <ul className={s.words}>
        {lexicons.map(({ id, word, desc }) =>
          <li key={id} >
            <ToolTip
              placement={'right'}
              showArrow={false}
              overlay={<StructuredContent id={id} record={{}} content={desc} />}
              overlayClassName={s.overlay}
            >
              <a href="#" id={id} >{word}</a>
            </ToolTip>
          </li>
        )}
      </ul>
    </div>
  );
}

Lexicons.page = { crumbs: [{ slug: 'lexicon', title: 'Lexicon' }] } as PageProps

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [AllLexiconsDocument] }, async ({ props, revalidate, context }: any) => {


  return {
    props: {
      ...props
    },
    revalidate
  };
});