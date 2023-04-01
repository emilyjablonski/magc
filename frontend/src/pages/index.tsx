import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
// import Image from 'next/image'
import axios from "axios"
import { Inter } from "next/font/google"
import Layout from "../layouts/layout"
import styles from "@/styles/index.module.scss"

// const inter = Inter({ subsets: ["latin"] })

interface NewsPost {
  title: string
  date: string
  content: string
  updatedAt: string
}

interface NewsResponse {
  attributes: NewsPost
}

export default function Home() {
  const [newsPosts, setNewsPosts] = useState<NewsResponse[]>([])

  useEffect(() => {
    const getNewsPosts = async () => {
      const data = await axios.get("http://localhost:1337/api/news-posts")
      setNewsPosts(data.data.data)
    }
    getNewsPosts()
  }, [])

  return (
    <Layout className={styles["layout"]}>
      <main className={styles.main}>
        <div className={styles["home-image-container"]}>
          <div className={styles["home-image-banner-container"]}>
            <div className={styles["home-image-banner"]}>
              <h1 className={styles["home-image-header"]}>
                Michigan Association of Genetic Counselors, Inc.
              </h1>
            </div>
          </div>
        </div>
        <div className={styles["page-content"]}>
          <div className={styles["home-quote"]}>
            <p className={styles["home-quote-text"]}>
              "Genetic counseling is a critically important component of the appropriate use and
              integration of genetic tests and services"
            </p>
            <p className={styles["home-source"]}>
              ---- Report of the Secretary's Advisory Committee on Genetics, Health, and Society,
              2006
            </p>
          </div>

          <h2>What is MAGC?</h2>
          <p>
            Michigan genetic counselors has met as an informal group for over fifteen years. In
            2006, the Michigan Association of Genetic Counselors, Inc. was formally incorporated. In
            2008, MAGC became a state chapter of the National Society of Genetic Counselors. With
            these two important changes, MAGC is positioned to serve as the recognized, leading
            advocate of quality genetic counseling services in Michigan.
          </p>
          <div className={styles["news-container"]}>
            {newsPosts?.map((post) => {
              return (
                <span className={styles["news-item"]}>
                  <h2>{post.attributes.title}</h2>
                  <p>
                    <ReactMarkdown children={post.attributes.content} />
                  </p>
                </span>
              )
            })}
          </div>
        </div>
      </main>
    </Layout>
  )
}
