import { useEffect, useState } from "react"
import Navigation from "../../layouts/Navigation"
import PageContent from "@/layouts/PageContent"

export default function VisionMisson() {
  // useEffect(() => {
  //   const getNewsPosts = async () => {
  //     const data = await axios.get("http://localhost:1337/api/news-posts")
  //     setNewsPosts(data.data.data)
  //   }
  //   getNewsPosts()
  // }, [])

  return (
    <Navigation>
      <PageContent title={"Vision & Mission"}>
        <h2>Vision</h2>
        <p>
          The mission of MAGC is to champion quality genetic counseling services in the State of
          Michigan by promoting genetics education, fostering professional development, encouraging
          communication and alliances, and facilitating access to services.
        </p>
        <h2>Mission</h2>
        <p>
          The Vision of MAGC is to be the leading advocate for quality genetic counseling services
          in the State of Michigan.
        </p>
      </PageContent>
    </Navigation>
  )
}
