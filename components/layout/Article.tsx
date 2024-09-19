import s from './Article.module.scss'
import cn from 'classnames'
import React from 'react'
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components'
import { StructuredContent, RevealText } from "/components";
import { KCImage as Image } from '/components'
import BalanceText from 'react-balance-text'
import { useScrollInfo } from 'dato-nextjs-utils/hooks';
import { usePage } from '../../lib/context/page';

export type ArticleProps = {
  id: string,
  children?: React.ReactNode | React.ReactNode[]
  title?: string,
  blackHeadline?: boolean,
  text?: string,
  image?: FileField
  showImage?: boolean,
  content?: any
  editable?: any
  noBottom?: boolean
  className?: string
  onClick?: (id: string) => void
}

export default function Article({
  id,
  children,
  title,
  blackHeadline = false,
  text,
  image,
  content,
  showImage = true,
  className,
  editable,
  onClick,
}: ArticleProps, record: ArticleProps) {

  const { lexicons } = usePage()
  const { scrolledPosition } = useScrollInfo()
  const hideCaption = scrolledPosition > 100;
  const haveImage = image?.responsiveImage !== undefined

  return (

    <div className={cn(s.article, 'article', className)}>
      {showImage &&
        <header>
          {title &&
            <h1 className={cn(s.title, haveImage && s.absolute, (blackHeadline || !haveImage) && s.black)}>
              <RevealText>
                <BalanceText>
                  {title}
                </BalanceText>
              </RevealText>
              {haveImage && <div className={s.fade}></div>}
            </h1>
          }

          {haveImage &&
            <>
              <figure data-editable={editable} onClick={() => onClick?.(image?.id)}>
                <>
                  <Image
                    className={s.image}
                    data={image.responsiveImage}
                    objectFit="cover"
                    placeholderClassName={s.placeholder}
                  />
                  <figcaption className={cn(hideCaption && s.hide)}>
                    <Markdown>{image.title}</Markdown>
                  </figcaption>
                </>
              </figure>
              <div className={s.colorBg} style={{ backgroundColor: image.responsiveImage.bgColor }} />
            </>
          }
        </header>
      }
      {text &&
        <Markdown className="intro" disableBreaks={true}>
          {text}
        </Markdown>
      }
      {children}
      {content &&
        <StructuredContent
          id={id}
          record={record}
          content={content}
          onClick={(imageId) => onClick?.(imageId)}
          lexicons={lexicons}
        />
      }
    </div>

  )
}