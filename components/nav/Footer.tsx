import s from './Footer.module.scss'
import cn from 'classnames'
import type { MenuItem } from '/lib/menu'
import Logo from '/public/images/logo-round.svg'
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useStore } from '/lib/store'

export type FooterProps = {
	menu: MenuItem[],
	footer: FooterRecord
}

export default function Footer({ menu, footer }: FooterProps) {

	const { theme, setTheme } = useTheme()
	const { inView, ref } = useInView({ threshold: 0.80 })
	const [showMobileMenu] = useStore(({ showMenuMobile }) => [showMenuMobile])

	useEffect(() => {
		setTheme(inView && !showMobileMenu ? 'dark' : 'light')
	}, [inView, setTheme, showMobileMenu])

	return (
		<>
			<footer className={cn(s.footer, s[theme])} id="footer" ref={ref}>
				<section className={s.menu}>
					<nav>
						<ul>
							{menu.map((item, idx) => {
								return (
									<li key={idx}>
										<ul className={s.category}>
											<>
												{item.index ?
													<li>
														<Link scroll={true} href={item.slug} >
															{item.label}
														</Link>
													</li>
													:
													<li>
														{item.label}
													</li>
												}

												{item.sub?.map((subItem, subidx) =>
													<li key={subidx}>
														{item.external ?
															<a href={subItem.slug} target="_new">{subItem.label}</a>
															:
															<Link scroll={true} href={subItem.slug}>
																{subItem.label}
															</Link>
														}

													</li>
												)}
											</>
										</ul>
									</li>
								)
							})}
						</ul>
					</nav>
				</section>

				<section className={s.about}>
					<Markdown>
						{footer?.aboutKc}
					</Markdown>
				</section>

				<section className={s.social}>
					<div>
						<span>Följ oss</span>
						<span><a href="https://www.instagram.com/konstnarscentrum_ost/">Instagram</a></span>
						<span><a href="https://www.facebook.com/profile.php?id=100079288527813">Facebook</a></span>
					</div>
					<div className={s.copyright}>
						<span>Copyright Konstnärscentrum 2024</span><span>GDPR & Cookies</span>
					</div>
				</section>

				<section className={s.support}>
					Med support av Arbetsförmedlingen.
					<div className={cn(s.logo, inView && s.inview)}>
						<a href="https://www.konstnarscentrum.org/" target="new">
							<Logo />
						</a>
					</div>
				</section>
			</footer>
		</>
	)
}