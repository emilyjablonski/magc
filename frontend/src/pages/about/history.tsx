import { useEffect, useState } from "react"
import Layout from "../../layouts/layout"
import styles from "@/styles/history.module.scss"

export default function Home() {
  // useEffect(() => {
  //   const getNewsPosts = async () => {
  //     const data = await axios.get("http://localhost:1337/api/news-posts")
  //     setNewsPosts(data.data.data)
  //   }
  //   getNewsPosts()
  // }, [])

  return (
    <Layout className={styles["layout"]}>
      <div className={styles["page-header-banner-container"]}>
        <div className={styles["page-header-banner"]}>
          <div className={styles["page-header"]}>
            <h1> History of MAGC</h1>
          </div>
        </div>
      </div>
      <div className={styles["page-content"]}></div>
    </Layout>
  )
}
