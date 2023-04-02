import { useEffect, useState } from "react"
import Navigation from "../../layouts/Navigation"
import styles from "@/styles/strategic-plan.module.scss"
import PageContent from "@/layouts/PageContent"

export default function StrategicPlan() {
  // useEffect(() => {
  //   const getNewsPosts = async () => {
  //     const data = await axios.get("http://localhost:1337/api/news-posts")
  //     setNewsPosts(data.data.data)
  //   }
  //   getNewsPosts()
  // }, [])

  return (
    <Navigation>
      <PageContent title={"Strategic Plan and Funding Efforts"}>
        <div>
          <div className={styles["list-title"]}>
            The Michigan Association of Genetic Counselors (MAGC) Strategic Plan includes:
          </div>
          <ul className={styles["list"]}>
            <li>
              Provide opportunities for members to network, develop professionally, and further
              their education in order to maintain, grow and strengthen our organization overall.
            </li>
            <li>
              Develop mechanisms to enhance the impact that genetic counselors in the state of
              Michigan have on the populations they serve by increasing awareness of community and
              professional initiatives, facilitating relationships with and between stakeholders,
              and creating opportunities for engagement.
            </li>
            <li>
              Explore, identify and pursue ways to help increase access to genetic counseling
              services in the state of Michigan including but not limited to, licensure
              implementation, and supporting membership efforts to bill for and receive
              reimbursement for genetic counseling clinical services.
            </li>
          </ul>
        </div>

        <div>
          <div className={styles["list-title"]}>
            MAGC is proud to re-invest in its membership as well as in the Michigan genetics
            community. Annual funding efforts include:
          </div>
          <ul className={styles["list"]}>
            <li>
              Organization of Professional Development Events, including the Annual Educational
              Conference, where CEUs are available. CEU fees have been covered by MAGC for select
              events.
            </li>
            <li>
              Provision of funding for research and project grants for full members and current
              genetic counseling students of Michigan genetic counseling programs.
            </li>
            <li>
              Offering scholarship via random lottery for current students of Michigan genetic
              counseling programs to cover NSGC membership fees for their second year of training.
            </li>
            <li>
              Offering scholarships for prospective genetic counseling students who reside in
              Michigan to aid in expenses related to applying to genetic counseling programs.
            </li>
            <li>
              Donations to organizations whose goals and values align with the strategic priorities
              of MAGC.
            </li>
          </ul>
        </div>
      </PageContent>
    </Navigation>
  )
}
