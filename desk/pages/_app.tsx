import Layout from '@/src/commons/libraries/layout'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import ApolloSetting from 'src/commons/libraries/apollo'
import ChakraUISetting from 'src/commons/libraries/chakraUI'
import '../config/recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <ChakraUISetting>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraUISetting>
      </ApolloSetting>
    </RecoilRoot>
  )
}

export default MyApp
