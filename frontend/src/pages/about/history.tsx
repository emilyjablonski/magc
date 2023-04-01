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
            <h1>History of MAGC</h1>
          </div>
        </div>
      </div>
      <div className={styles["page-content"]}>
        <p>
          Michigan genetic counselors met as an informal group, known as the Michigan Association of
          Genetic Counselors (MAGC) for over fifteen years. In the “early days,” meetings were held
          in the homes of genetic counselors across the state. For many years, this informal
          structure was sufficient in providing Michigan genetic counselors an opportunity for
          professional networking. As licensure emerged as a top priority for the MAGC, the need to
          formalize the group became apparent. Feedback from lobbyists and legislators stressed that
          if the MAGC was going to be taken seriously, we needed to organize and present ourselves
          as a legitimate, united, focused and financially sound group of professionals. A formal
          organization would allow the counselors in the state to establish credibility among
          statewide stakeholders in the healthcare field, the state legislature, the governor’s
          office, and the National Society of Genetic Counselors (NSGC).
        </p>

        <p>
          The process of formalizing the MAGC would ultimately take over two years to fully
          accomplish. The process started in the fall of 2005 with the drafting of vision and
          mission statements and the creation of a “transition team” charged with establishing a
          governance structure, drafting bylaws, developing a slate of candidates and conducting the
          first election. The first board of directors was elected in May, 2006 and in July, 2006
          MAGC became a nonprofit corporation by filing its Articles of Incorporation with the state
          of Michigan. We also secured an Employer Identification Number with the IRS and in
          February 2007, the first set of bylaws was ratified by the membership. While a great deal
          had been accomplished, more work remained, including obtaining tax exempt status with the
          IRS and securing appropriate insurance coverage for our organization and its officers. It
          was at this point that the opportunity to become a state chapter became a reality. After a
          mutually agreeable affiliation agreement was developed by NSGC and with the approval of
          our membership, the MAGC became a state chapter of the NSGC in January 2008.
        </p>

        <p>
          The MAGC is proud of its accomplishments over the past ten years. In that time, the
          membership has grown to over 100 members, the annual education conference has attracted
          out-of-state genetic counselors and non-genetic counseling professionals, events have been
          launched for professional development and networking amongst genetic counselors in the
          state, and licensure efforts continue to be a top priority. We are anticipating a bright
          future for MAGC and the genetic counseling community in the state of Michigan.
        </p>
      </div>
    </Layout>
  )
}
