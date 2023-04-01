import Head from 'next/head'
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
// import Image from 'next/image'
import axios from "axios"
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

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
  console.log({newsPosts})
 
  useEffect(() => {
    const getResult = async () => {
      const data = await axios.get("http://localhost:1337/api/news-posts")
      setNewsPosts(data.data.data)
      return 
    }
    getResult()
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.grid}>
          {newsPosts?.map((post) => {
            return (
              <span>
          
            <h2 className={inter.className}>
              {post.attributes.title} <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            <ReactMarkdown children={post.attributes.content} />
            </p>

          </span>
            )
          })}
         
        </div>
      </main>
    </>
  )
}
