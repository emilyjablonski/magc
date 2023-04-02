import { useEffect, useState } from "react"
import Navigation from "../../layouts/Navigation"
import PageContent from "@/layouts/PageContent"

export default function WhatIsAGC() {
  // useEffect(() => {
  //   const getNewsPosts = async () => {
  //     const data = await axios.get("http://localhost:1337/api/news-posts")
  //     setNewsPosts(data.data.data)
  //   }
  //   getNewsPosts()
  // }, [])

  return (
    <Navigation>
      <PageContent title={"What is a Genetic Counselor?"}>
        <p>
          Genetic Counselors bring unique knowledge and skills to health care as they provide
          information and support to families who have members with birth defects or genetic
          disorders and to families who may be at risk for a variety of inherited conditions.
          Genetic Counselors generally work as members of a health care or laboratory team in
          collaborative relationships with clinical geneticists, and other physicians, as well as
          other allied health care professionals. For more information, please see{" "}
          <a href={"https://www.nsgc.org/"}>www.nsgc.org/</a>.
        </p>
      </PageContent>
    </Navigation>
  )
}
