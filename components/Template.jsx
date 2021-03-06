import Head from 'next/head'
import Content from '../components/Content/Content'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

export default function Template({ children }) {
    return (
        <div>
            <Head>
                <title>Dale Vaquita! Web | Facilitandole la vida al productor Agropecuario</title>
                <meta name="description" content="Aplicacion web" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container">
                <Navbar />
                <div className="flex flex-row w-screen">
                    <Sidebar />
                    <Content >{children}</Content>
                </div>
            </main>

        </div>
    )
}
