import { useEffect, useState } from "react"
import Navigation from "../../layouts/Navigation"
import PageContent from "@/layouts/PageContent"

export default function NewsAndEvents() {
  // useEffect(() => {
  //   const getNewsPosts = async () => {
  //     const data = await axios.get("http://localhost:1337/api/news-posts")
  //     setNewsPosts(data.data.data)
  //   }
  //   getNewsPosts()
  // }, [])

  return (
    <Navigation>
      <PageContent title={"News & Events"}>
        MAGC is committed to increasing awareness about professional development opportunities as
        well as upcoming educational events. If your group would like your event to be considered
        for advertisement on the MAGC News and Events page or via email blast, please submit this
        request to{" "}
        <a href={"https://forms.gle/sce1gyBsUvxpnuut9"} target={"_blank"}>
          this form
        </a>
        . For listing other news or research opportunities, please email{" "}
        <a href={"mailto:info@magcinc.org"}>info@magcinc.org</a>.
      </PageContent>
    </Navigation>
  )
}
