import Head from "next/head";
import Link from "next/link";


const Layout = ({title, description = '', children}) => {
    return (
        <>
            <Head>
                <title>{title} || Blog NextJS</title>
                <meta name='description' content={description || 'simple blog NextJS'}/>
                <meta property='description' content={description || 'simple blog NextJS'}/>
            </Head>

            <header>
                <Link href='/'>
                    Main
                </Link>
            </header>

            <div className='container'>
                {children}
            </div>

            <footer>2023 &copy; Blog NextJS</footer>
        </>
    )
}

export default Layout;