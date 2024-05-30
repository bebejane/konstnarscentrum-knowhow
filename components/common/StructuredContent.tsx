import { StructuredText, renderNodeRule } from 'react-datocms/structured-text';
import { isParagraph, isRoot } from 'datocms-structured-text-utils';
import ToolTip from '/components/common/ToolTip'

import Block from '/components/blocks';

export type Props = {
  id: string
  content: any
  record: any
  className?: string
  styles?: { [key: string]: string }
  onClick?: (imageId: string) => void
}

export default function StructuredContent({ record, content, onClick, className, styles }: Props) {

  if (!content)
    return null

  return (
    <StructuredText
      data={content}
      renderBlock={({ record: block }) => {
        return <Block data={block} record={record} onClick={(id) => onClick?.(id)} />
      }}
      renderInlineRecord={({ record }) => {
        switch (record.__typename) {
          default:
            return null;
        }
      }}
      renderLinkToRecord={({ record, children, transformedMeta }) => {
        switch (record.__typename) {
          case 'LexiconRecord':
            return <ToolTip lexicon={record as LexiconRecord}>{children}</ToolTip>
          default:
            return null;
        }
      }}
      renderText={(text) => {
        // Replace nbsp
        return text?.replace(/\s/g, ' ');
      }}

      customNodeRules={[
        /* Wrap <a> with nextjs Link
        renderNodeRule(isLink, ({ adapter: { renderNode }, node, children, key, ancestors }) => {
          return <Link href={node.url}>{children}</Link>
        }),
        */
        // Clenup paragraphs
        renderNodeRule(isParagraph, ({ adapter: { renderNode }, node, children, key, ancestors }) => {

          const firstChild = node.children[0]
          const lastChild = node.children[node.children.length - 1]

          // Remove trailing <br>
          if (isRoot(ancestors[0]) && lastChild.type === 'span' && lastChild.value?.endsWith('\n')) {

            let index = node.children.length;

            while (index >= 0 && firstChild.type === 'span' && firstChild.value[index] === '\n') index--;

            // remove trailing br
            if (children && Array.isArray(children) && typeof children[0] === 'object')
              Array.isArray(children[0].props.children) && children[0].props.children.splice(index)
          }

          ////@ts-ignore // Remove leading <br>
          if (isRoot(ancestors[0]) && firstChild.type === 'span' && firstChild.value.startsWith('\n')) {
            let index = 0;

            while (index < firstChild.value.length && firstChild.value[index] === '\n') index++;

            if (children && Array.isArray(children) && typeof children[0] === 'object')
              Array.isArray(children[0].props.children) && children[0].props.children?.splice(0, index + 1)
          }

          // Filter out empty paragraphs
          children = children?.filter(c => !(typeof c === 'object' && c.props.children?.length === 1 && !c.props.children[0]))

          // If no children remove tag completely
          if (!children?.length) return null

          const classNames = []

          isRoot(ancestors[0]) && className && classNames.push(className)
          node.style && styles?.[node.style] && classNames.push(styles[node.style])

          node.style && !styles?.[node.style] && console.warn(node.style, 'does not exist in styles', 'P')

          // Return paragraph with sanitized children
          return renderNode('p', {
            key,
            className: classNames.length ? classNames.join(' ') : undefined,
          }, children)

        }),
      ]}

    />
  );
}