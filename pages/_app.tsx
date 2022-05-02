import '../styles/globals.css'
import type { AppContext, AppInitialProps, AppLayoutProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ReactNode } from 'react'
import { NextComponentType } from 'next/types'

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;