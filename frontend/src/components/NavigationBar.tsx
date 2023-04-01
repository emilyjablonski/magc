import React from "react"
import styles from "./NavigationBar.module.scss"

type NavigationBarProps = {}

const NavItem = (props: { item: string }) => {
  return <span className={styles["navigation-bar-item"]}>{props.item}</span>
}

const NavigationBar = (props: NavigationBarProps) => {
  return (
    <nav className={styles["navigation-bar"]}>
      <NavItem item={"MAGC"}></NavItem>|<NavItem item={"About Us"}></NavItem>
      <NavItem item={"Annual Conference"}></NavItem>
      <NavItem item={"Membership"}></NavItem>
      <NavItem item={"About Genetic Counselors"}></NavItem>
      <NavItem item={"News & Events"}></NavItem>
      <NavItem item={"Job Board"}></NavItem>
      <NavItem item={"Contact Us"}></NavItem>
    </nav>
  )
}

export default NavigationBar
