import { AppProps } from 'next/app'
import '@assets/main.css'
import 'keen-slider/keen-slider.min.css'

import { UIProvider, useUI } from "@components/ui/context"

const Noop: React.FC = ({ children }) => <>{children}</>

const App = ({
    Component,
    pageProps,
}: AppProps & { Component: { Layout: React.FC } }) => {
    const ui = useUI()

    const Layout = Component.Layout ?? Noop
    return (
        <UIProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </UIProvider>
    )
}
export default App
