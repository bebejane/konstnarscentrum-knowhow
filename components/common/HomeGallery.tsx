import s from './HomeGallery.module.scss'
import cn from 'classnames'
import { KCImage as Image } from '/components'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { RevealText } from '/components';
import { sleep } from '/lib/utils'
import blobshape from "blobshape";
import { useWindowSize } from 'rooks'

export type Props = {
  slides: SlideRecord[]
}

const parseRecord = (record: any) => {
  if (!record)
    return { type: '', slug: '/' }
  const { __typename, slug } = record

  switch (__typename) {
    case 'CommissionRecord':
      return { type: 'Uppdrag', slug: `/anlita-oss/uppdrag/${slug}` }
    case 'MemberNewsRecord':
      return { type: 'Aktuellt', slug: `/konstnar/aktuellt/${slug}` }
    case 'NewsRecord':
      return { type: 'Nyheter', slug: `/nyheter/${slug}` }
    case 'AboutRecord':
      return { type: 'Om', slug: `/om/${slug}` }
    case 'ForArtistRecord':
      return { type: 'För konstnärer', slug: `/` }
    default:
      return { type: '', slug: '/' }
  }
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const slideTime = 4000

export default function HomeGallery({ slides }: Props) {

  const [index, setIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [loaded, setLoaded] = useState({})
  const [size, setSize] = useState({ width: 0, height: 0 })
  const ref = useRef<HTMLUListElement | null>(null)
  const { innerWidth, innerHeight } = useWindowSize()

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex(index + 1 > slides.length - 1 ? 0 : index + 1)
    }, slideTime)

    return () => clearInterval(interval)
  }, [index, slides])

  useEffect(() => {
    if (ref.current === null) return
    setSize({
      width: ref.current.clientWidth,
      height: ref.current.clientHeight
    })
  }, [ref, innerWidth, innerHeight])

  useEffect(() => {
    if (loaded[slides[0].id])
      setMounted(true)

  }, [loaded, slides])

  return (
    <section className={cn(s.gallery, mounted && s.show)} id="home-gallery">
      <ul ref={ref}>
        {slides.map(el => ({ ...el, ...parseRecord(el.link) })).map(({
          id,
          headline,
          image,
          slug,
          type,
          blackText
        }, idx) => {

          const isCurrent = index === idx;
          const isNext = (index + 1 > slides.length - 1 ? 0 : index + 1) === idx
          const maskId = `mask${idx}`

          return (
            <li key={id}>
              <Link href={slug} className={cn(isCurrent ? s.current : isNext ? s.next : undefined)}>
                <header className={cn(blackText && s.blackText, !isCurrent && s.hide)}>
                  <h5>{type}</h5>
                  <h2><RevealText start={index === idx}>{headline}</RevealText></h2>
                  <div className={s.fade}></div>
                </header>

                <Image
                  className={cn(s.image, isCurrent && s.pan)}
                  data={image.responsiveImage}
                  onLoad={() => setLoaded((s) => ({ ...s, [id]: true }))}
                  pictureStyle={isNext ? { clipPath: `url(#${maskId})` } : {}}
                  placeholderClassName={s.image}
                  objectFit="cover"
                  lazyLoad={false}
                  fadeInDuration={100}
                />
                <Mask
                  id={maskId}
                  size={size}
                  start={isNext}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

const Mask = ({ id, size, start }) => {

  const numBlobs = 200
  const animationTime = 850
  let timeoutRef = useRef<NodeJS.Timer | undefined>()

  useEffect(() => {
    if (!start) return

    const paths = new Array(numBlobs).fill(0).map((e, idx) => {

      const { path } = blobshape({
        size: randomInt(size.width * (idx / numBlobs), size.width * (idx / numBlobs)),
        growth: randomInt(2, 9),
        edges: randomInt(2, 40),
        seed: null
      })
      return path
    })

    const clipPath = document.getElementById(id)
    if (!clipPath) return

    clipPath.innerHTML = ''

    const blobIt = async () => {
      for (let i = 0; timeoutRef.current && i < paths.length; i++) {
        const path = paths[i];
        clipPath.innerHTML += `<path d="${path}" transform="translate(${randomInt(-200, size.width)},${randomInt(-200, size.height)})"/>`
        await sleep(animationTime / numBlobs)
      }
      await sleep(1000)
      clipPath.innerHTML = ''
    }

    timeoutRef.current = setTimeout(blobIt, slideTime - animationTime)

    return () => {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = undefined
    }

  }, [start, id, size])


  return (
    <div className={s.mask}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${size.width} ${size.height}`}>
        <defs>
          <clipPath id={id}></clipPath>
        </defs>
      </svg>
    </div>
  )
}