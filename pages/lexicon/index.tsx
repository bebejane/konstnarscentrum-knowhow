import s from './index.module.scss'
import cn from 'classnames'
import withGlobalProps from "/lib/withGlobalProps";
import { GetStaticProps } from "next";
import { AllLexiconsDocument } from "/graphql";
import { Article, StructuredContent } from '/components'
import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { RevealText, ToolTip } from '/components';
import { render } from 'datocms-structured-text-to-html-string';


export type Props = {
  region: Region
  lexicons: LexiconRecord[]
  lexiconText: LexiconTextRecord
}

export default function Lexicons({ lexicons, lexiconText }: Props) {

  return (
    <Article
      id={'lexicon'}
      title={'Lexicon'}
      content={lexiconText.intro}
    >
      <ul className={s.words}>
        {lexicons.map((l) =>
          <li key={l.id} >
            <ToolTip lexicon={l}>{l.word}</ToolTip>
          </li>
        )}
      </ul>
    </Article>
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