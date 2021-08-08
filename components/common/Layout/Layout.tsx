import { Navbar, Footer } from '@components/common'
import { Sidebar } from "@components/ui"
import { CartSidebar } from "@components/cart"
import s from './Layout.module.css'
import { useUI } from '@components/ui/context'
import { ApiProvider } from '@framework'

export const Layout: React.FC = ({ children }) => {
    const { isSidebarOpen, closeSidebar } = useUI()
    return (
        <ApiProvider>
            <div className={s.root}>
                <Navbar />
                <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen}>
                    <CartSidebar />
                </Sidebar>
                <main className="fit">
                    {children}
                </main>
                <Footer />
            </div>
        </ApiProvider>
    )
}