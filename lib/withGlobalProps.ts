import { apiQuery, apiQueryAll, SEOQuery } from "dato-nextjs-utils/api";
import { GetStaticProps } from 'next'
import type { TypedDocumentNode } from "@apollo/client/core/types.js";
import { GlobalDocument, FooterDocument, AllAboutsMenuDocument, AllLexiconsDocument } from "/graphql";
import { buildMenu } from "/lib/menu";

export default function withGlobalProps(opt: any, callback: Function): GetStaticProps {

  const revalidate: number = parseInt(process.env.REVALIDATE_TIME)
  const queries: TypedDocumentNode[] = [GlobalDocument, FooterDocument, AllAboutsMenuDocument]

  if (opt.query)
    queries.push(opt.query)
  if (opt.queries)
    queries.push.apply(queries, opt.queries)
  if (opt.seo)
    queries.push(SEOQuery(opt.seo))

  return async (context) => {

    const props = await apiQuery(queries, { preview: context.preview });
    props.menu = await buildMenu()

    //const { lexicons } = await apiQueryAll(AllLexiconsDocument, { preview: context.preview });
    //props.lexicons = lexicons

    if (callback)
      return await callback({ context, props: { ...props }, revalidate });
    else
      return { props: { ...props }, context, revalidate };
  }
}