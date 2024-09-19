import '/styles/index.scss'
import 'rc-tooltip/assets/bootstrap_white.css'
import { Layout } from '/components';
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"
import { useRouter } from 'next/router';
import { DefaultDatoSEO } from 'dato-nextjs-utils/components';
import { PageProvider } from '/lib/context/page';
import { sv } from 'date-fns/locale'
import setDefaultOptions from 'date-fns/setDefaultOptions';

setDefaultOptions({ locale: sv })

function App({ Component, pageProps }) {

  setDefaultOptions({ locale: sv })

  const router = useRouter()
  const page = (Component.page || {}) as PageProps
  const { menu, footer, site, pageTitle, lexicons, session } = pageProps;
  const errorCode = parseInt(router.pathname.replace('/', ''))
  const isError = (!isNaN(errorCode) && (errorCode > 400 && errorCode < 600)) || router.pathname.replace('/', '') === '_error'

  if (isError) return <Component {...pageProps} />

  const title = pageTitle ?? page?.title ?? page?.crumbs?.[0].title

  return (
    <>
      <DefaultDatoSEO
        site={site}
        path={router.pathname}
        siteTitle="KnowHow"
        title={title}
      />
      <SessionProvider session={session}>
        <PageProvider value={{ ...page, lexicons }}>
          <ThemeProvider defaultTheme="light" themes={['light', 'dark']} enableSystem={false}>
            <Layout title={pageTitle} menu={menu || []} footer={footer}>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </PageProvider>
      </SessionProvider>
    </>
  );
}

export default App;
