import React from "react"
import styles from "./Footer.module.scss"

type FooterProps = {}

const Footer = (props: FooterProps) => {
  const footerLinks = [
    { title: "Attend Conference", href: "/conference/attend" },
    { title: "Become a Member", href: "/membership/become-a-member" },
    { title: "What is a Genetic Counselor?", href: "/about-gcs/what-is-a-gc" },
    { title: "How Do I Become a Genetic Counselor?", href: "/about-gcs/prospective-students" },
    { title: "Contact Us", href: "/contact" },
  ]
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-col"]}>
          <h2>About MAGC</h2>
          <p>
            Michigan genetic counselors has met as an informal group for over fifteen years. In
            2006, the Michigan Association of Genetic Counselors, Inc. was formally incorporated. In
            2008, MAGC became a state chapter of the National Society of Genetic Counselors. With
            these two important changes, MAGC is positioned to serve as the recognized, leading
            advocate of quality genetic counseling services in Michigan.
          </p>
        </div>
        <div className={styles["footer-col"]}>
          <h2>Quick Links</h2>
          <div className={styles["footer-links"]}>
            {footerLinks.map((item, index) => {
              return (
                <a className={styles["footer-link"]} href={item.href} key={index}>
                  {item.title}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
