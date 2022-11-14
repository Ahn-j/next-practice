import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    {/* pages폴더안의 컴포넌트들 */}
    <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
