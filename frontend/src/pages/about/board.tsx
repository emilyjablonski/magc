import { useEffect, useState } from "react"
import Navigation from "../../layouts/Navigation"
import PageContent from "@/layouts/PageContent"

export default function Board() {
  // useEffect(() => {
  //   const getNewsPosts = async () => {
  //     const data = await axios.get("http://localhost:1337/api/news-posts")
  //     setNewsPosts(data.data.data)
  //   }
  //   getNewsPosts()
  // }, [])

  return (
    <Navigation>
      <PageContent title={"Board of Directors"}>Content</PageContent>
    </Navigation>
  )
}
