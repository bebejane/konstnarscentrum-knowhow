import s from './index.module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { GetStaticProps } from "next";
import { AllLexiconsDocument } from "/graphql";
import { Article, StructuredContent } from '/components'
import { ToolTip } from '/components';


export type Props = {
  region: Region
  lexicons: LexiconRecord[]
  lexiconText: LexiconTextRecord
}

export default function Lexicons({ lexicons, lexiconText }: Props) {

  return (
    <Article
      id={'lexicon'}
      title={'Lexikon'}
    >
      <StructuredContent
        id={lexiconText.id}
        record={lexiconText}
        content={lexiconText.intro}
        className={"intro"}
      />
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