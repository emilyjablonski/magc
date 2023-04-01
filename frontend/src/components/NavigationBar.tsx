import React from "react"
import styles from "./NavigationBar.module.scss"
import { GiHamburgerMenu } from "react-icons/gi"

type NavigationBarProps = {}

const NavItem = (props: { item: string }) => {
  return <span className={styles["navigation-bar-item"]}>{props.item}</span>
}

const NavigationBar = (props: NavigationBarProps) => {
  const navigationItems = [
    "MAGC",
    "About",
    "Annual Conference",
    "Membership",
    "About GCs",
    "News & Events",
    "Jobs",
    "Contact Us",
  ]
  return (
    <nav className={styles["navigation-bar"]}>
      <div className={styles["navigation-bar-content"]}>
        <div className={styles["navigation-bar-left"]}>
          {navigationItems.map((text) => {
            return <NavItem item={text} />
          })}
        </div>
        <div className={styles["navigation-bar-right"]}>
          <div className={styles["navigation-bar-desktop"]}>
            <NavItem item={"Login"}></NavItem>
          </div>
          <div className={styles["navigation-bar-mobile"]}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
