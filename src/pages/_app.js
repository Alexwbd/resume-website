import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'

export default function App({ Component, pageProps, router  }) {
  return <Layout>
    <AnimatePresence >
      <Component {...pageProps} key={router.pathname}  />
    </AnimatePresence>
  </Layout>
}
