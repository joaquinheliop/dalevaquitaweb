import Head from 'next/head'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Template({ children }) {
    return (
        <div>
            <Head>
                <title>Dale Vaquita! Web | Facilitandole la vida al productor Agropecuario</title>
                <meta name="description" content="Aplicacion web" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto relative">
                <Navbar />
                <div className="flex flex-row">
                    <Sidebar />
                    <Content >{children}</Content>
                </div>
            </main>

        </div>
    )
}
