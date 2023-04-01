import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"

type LayoutProps = {
  children: React.ReactNode
  className: string
}

const Layout = (props: LayoutProps) => (
  <div className={props.className}>
    <NavigationBar />
    {props.children}
    <Footer />
  </div>
)
export default Layout
