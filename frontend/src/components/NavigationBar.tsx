import React, { useState } from "react"
import styles from "./NavigationBar.module.scss"

type NavigationBarProps = {}

type NavigationLink = {
  title: string
  href?: string
}

interface NavigationItem extends NavigationLink {
  dropdownItems?: NavigationItem[]
}

const navigationItems: Array<NavigationItem> = [
  {
    title: "About",
    dropdownItems: [
      { title: "History of MAGC", href: "/about/history" },
      { title: "Vision & Mission", href: "/about/vision-mission" },
      { title: "Board of Directors", href: "board" },
      { title: "Strategic Plan and Funding Efforts", href: "/about/strategic-plan" },
      { title: "Committees", href: "/about/committees" },
    ],
  },
  {
    title: "Annual Conference",
    dropdownItems: [
      { title: "Attend Conference", href: "/conference/attend" },
      { title: "Sponsorship Information", href: "/conference/sponsorship" },
    ],
  },
  {
    title: "Membership",
    dropdownItems: [
      { title: "Membership Types & Benefits", href: "/membership/types-benefits" },
      { title: "Become a Member", href: "/membership/become-a-member" },
      { title: "Member Login", href: "/membership/member-login" },
    ],
  },
  {
    title: "About GCs",
    dropdownItems: [
      { title: "What is a Genetic Counselor?", href: "/about-gcs/what-is-a-gc" },
      { title: "Prospective Students", href: "/about-gcs/prospective-students" },
      { title: "Genetic Services in Michigan", href: "/about-gcs/services" },
    ],
  },
  { title: "News & Events", href: "/news-events" },
  { title: "Jobs", href: "/jobs" },
  { title: "Contact", href: "/contact" },
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
          <a href={"/"} className={styles["logo-link"]}>
            <img src={"/magc-logo.png"} className={styles["logo"]} />
          </a>
          {navigationItems.map((navItem, index) => {
            return (
              <div className={styles["navigation-item-container"]} key={index}>
                <NavItem title={navItem.title} href={navItem.href} />
                {navItem.dropdownItems && (
                  <DropdownMenu parentTitle={navItem.title}>
                    {navItem.dropdownItems.map((dropdownItem, index) => {
                      return (
                        <DropdownItem
                          title={dropdownItem.title}
                          href={dropdownItem.href}
                          key={index}
                        />
                      )
                    })}
                  </DropdownMenu>
                )}
              </div>
            )
          })}
        </div>
        <div className={styles["navigation-bar-right"]}>
          <div className={styles["navigation-bar-desktop"]}>
            <NavItem title={"Login"} href={"/login"} />
          </div>
          <div className={styles["navigation-bar-mobile"]}>+</div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
