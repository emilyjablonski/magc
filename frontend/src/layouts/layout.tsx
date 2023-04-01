import Head from "next/head"
import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"

type LayoutProps = {
  children: React.ReactNode
  className: string
}

const Layout = (props: LayoutProps) => (
  <>
    <Head>
      <title>MAGC</title>
      <meta name="description" content="Michigan Association of Genetic Counselors, Inc (MAGC)" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={props.className}>
      <NavigationBar />
      {props.children}
      <Footer />
    </div>
  </>
)
export default Layout
