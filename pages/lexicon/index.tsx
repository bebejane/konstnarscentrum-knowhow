import s from './index.module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { GetStaticProps } from "next";
import { AllLexiconsDocument } from "/graphql";
import Link from "next/link";
import React from 'react';
import { RevealText } from '/components';

export type Props = {
  region: Region
  lexicons: LexiconRecord[]
}

export default function Lexicons({ lexicons }: Props) {

  return (
    <div className={s.container}>
      <h1>
        <RevealText>Lexicon</RevealText><sup className="amount">{lexicons.length}</sup>
      </h1>
      <p className="intro">Intro</p>
      <ul>
        {lexicons.map((l) =>
          <li key={l.id}>{l.word}</li>
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