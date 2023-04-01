import React from "react"
import styles from "./Footer.module.scss"

type FooterProps = {}

const Footer = (props: FooterProps) => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-col"]}>
          <h2>About MAGC</h2>
          ----
          <p>
            Michigan genetic counselors had met as an informal group for over fifteen years. In
            2006, the Michigan Association of Genetic Counselors, Inc. was formally incorporated. In
            2008, MAGC became a state chapter of the National Society of Genetic Counselors. With
            these two important changes, MAGC is positioned to serve as the recognized, leading
            advocate of quality genetic counseling services in Michigan.
          </p>
        </div>
        <div className={styles["footer-col"]}>
          <h2>Quick Links</h2>
          <div>
            <div>Link 1</div>
            <div>Link 2</div>
            <div>Link 3</div>
            <div>Link 4</div>
            <div>Link 5</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
