import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import './_app.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
