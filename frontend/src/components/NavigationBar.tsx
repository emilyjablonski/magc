import React, { useState } from "react"
import styles from "./NavigationBar.module.scss"
import { GiHamburgerMenu } from "react-icons/gi"

type NavigationBarProps = {}

const navigationItems: Array<{ [key: string]: string[] }> = [
  { MAGC: [] },
  {
    About: [
      "History of MAGC",
      "Vision & Mission",
      "Board of Directors",
      "Strategic Plan and Funding Efforts",
      "Committees",
    ],
  },
  { "Annual Conference": ["Attend Conference", "Sponsorship Information"] },
  { Membership: ["Membership Types & Benefits", "Become a Member", "Member Login"] },
  {
    "About GCs": [
      "What is a Genetic Counselor?",
      "Prospective Students",
      "Genetic Services in Michigan",
    ],
  },
  { "News & Events": [] },
  { Jobs: [] },
  { "Contact Us": [] },
]

const NavigationBar = (props: NavigationBarProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const onNavItemMouseEnter = (title: string) => {
    setOpenDropdown(title)
  }

  const onNavItemMouseLeave = (title: string) => {
    setOpenDropdown(null)
  }

  const NavItem = (props: { title: string }) => {
    return (
      <span
        className={styles["navigation-bar-item"]}
        onMouseEnter={() => onNavItemMouseEnter(props.title)}
        onMouseLeave={() => onNavItemMouseLeave(props.title)}
      >
        {props.title}
      </span>
    )
  }

  const DropdownItem = (props: { title: string }) => {
    return <span className={styles["navigation-bar-dropdown-item"]}>{props.title}</span>
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
            const title = Object.keys(navItem)[0]

            return (
              <div className={styles["navigation-item-container"]}>
                <NavItem title={title} />
                {!!navItem[title].length && (
                  <DropdownMenu parentTitle={title}>
                    {navItem[title].map((dropdownItem) => {
                      return <DropdownItem title={dropdownItem} />
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
