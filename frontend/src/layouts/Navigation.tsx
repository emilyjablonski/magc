import Head from "next/head"
import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"
import styles from "./Navigation.module.scss"

type NavigationProps = {
  children: React.ReactNode
}

const Navigation = (props: NavigationProps) => (
  <>
    <Head>
      <title>MAGC</title>
      <meta name="description" content="Michigan Association of Genetic Counselors, Inc (MAGC)" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles["layout"]}>
      <NavigationBar />
      {props.children}
      <Footer />
    </div>
  </>
)
export default Navigation
