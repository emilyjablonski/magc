import React, { useState } from "react"
import styles from "./NavigationBar.module.scss"
import { GiHamburgerMenu } from "react-icons/gi"

type NavigationBarProps = {}

type NavigationLink = {
  title: string
  href?: string
}

interface NavigationItem extends NavigationLink {
  dropdownItems?: NavigationItem[]
}

const navigationItems: Array<NavigationItem> = [
  { title: "MAGC", href: "/" },
  {
    title: "About",
    dropdownItems: [
      { title: "History of MAGC", href: "/about/history" },
      { title: "Vision & Mission" },
      { title: "Board of Directors" },
      { title: "Strategic Plan and Funding Efforts" },
      { title: "Committees" },
    ],
  },
  {
    title: "Annual Conference",
    dropdownItems: [{ title: "Attend Conference" }, { title: "Sponsorship Information" }],
  },
  {
    title: "Membership",
    dropdownItems: [
      { title: "Membership Types & Benefits" },
      { title: "Become a Member" },
      { title: "Member Login" },
    ],
  },
  {
    title: "About GCs",
    dropdownItems: [
      { title: "What is a Genetic Counselor?" },
      { title: "Prospective Students" },
      { title: "Genetic Services in Michigan" },
    ],
  },
  { title: "News & Events" },
  { title: "Jobs" },
  { title: "Contact Us" },
]

const NavigationBar = (props: NavigationBarProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const onNavItemMouseEnter = (title: string) => {
    setOpenDropdown(title)
  }

  const onNavItemMouseLeave = (title: string) => {
    setOpenDropdown(null)
  }

  const NavItem = (props: { title: string; href?: string }) => {
    const item = (
      <span
        className={styles["navigation-bar-item"]}
        onMouseEnter={() => onNavItemMouseEnter(props.title)}
        onMouseLeave={() => onNavItemMouseLeave(props.title)}
      >
        {props.title}
      </span>
    )
    return <>{props.href ? <a href={props.href}>{item}</a> : item}</>
  }

  const DropdownItem = (props: { title: string; href?: string }) => {
    return (
      <a href={props.href} className={styles["navigation-bar-dropdown-item"]}>
        <span>{props.title}</span>
      </a>
    )
  }

  const DropdownMenu = (props: { parentTitle: string; children: React.ReactNode }) => {
    if (props.parentTitle !== openDropdown) return null
    return (
      <div
        className={styles["navigation-bar-dropdown"]}
        onMouseEnter={() => onNavItemMouseEnter(props.parentTitle)}
        onMouseLeave={() => onNavItemMouseLeave(props.parentTitle)}
      >
        {props.children}
      </div>
    )
  }

  return (
    <nav className={styles["navigation-bar"]}>
      <div className={styles["navigation-bar-content"]}>
        <div className={styles["navigation-bar-left"]}>
          {navigationItems.map((navItem) => {
            return (
              <div className={styles["navigation-item-container"]}>
                <NavItem title={navItem.title} href={navItem.href} />
                {navItem.dropdownItems && (
                  <DropdownMenu parentTitle={navItem.title}>
                    {navItem.dropdownItems.map((dropdownItem) => {
                      return <DropdownItem title={dropdownItem.title} href={dropdownItem.href} />
                    })}
                  </DropdownMenu>
                )}
              </div>
            )
          })}
        </div>
        <div className={styles["navigation-bar-right"]}>
          <div className={styles["navigation-bar-desktop"]}>
            <NavItem title={"Login"}></NavItem>
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
