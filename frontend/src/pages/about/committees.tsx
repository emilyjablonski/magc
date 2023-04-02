import { useEffect, useState } from "react"
import Navigation from "../../layouts/Navigation"
import PageContent from "@/layouts/PageContent"
import styles from "@/styles/committees.module.scss"

export default function Committees() {
  // useEffect(() => {
  //   const getNewsPosts = async () => {
  //     const data = await axios.get("http://localhost:1337/api/news-posts")
  //     setNewsPosts(data.data.data)
  //   }
  //   getNewsPosts()
  // }, [])

  return (
    <Navigation>
      <PageContent title={"Committees"}>
        <div className={styles["committees-container"]}>
          <h2>Education Committee</h2>
          <p>
            The MAGC Education Committee’s (EC) primary responsibility is the planning and execution
            of the Annual Education Conference (AEC). This includes communicating with and
            coordinating potential attendees (MAGC members, non-member genetic counselors,
            prospective genetic counselors); applying for Continuing Education Units (CEUs) from the
            National Society of Genetic Counselors; identifying, contacting, coordinating, and
            compensating speakers; contacting and engaging sponsors; and coordinating vendors
            (venue, catering, printed materials, etc.). The EC works closely with the MAGC treasurer
            and the webmaster, and elicits input from the DEI subcommittee.
          </p>
          <p>
            If you are interested in volunteering or have questions for the Education Committee,
            please email <a href="mailto:education@magcinc.org">education@magcinc.org</a>.
          </p>
          <h2>Genetic Services Committee</h2>
          <p>
            The Genetic Services Committee is charged with taking on projects that further access to
            and development of quality genetic counseling services in Michigan. We also aim to
            spread awareness of the genetic counseling field to prospective students as well as
            members of the community. Projects conducted by the GSC may be designated by the MAGC
            board of directors or suggested by the membership of MAGC. Past GSC projects included
            the creation of surveys to assess the changes to the profession amidst the Covid-19
            pandemic, attending events to support local organizations, hosting events for
            prospective students to learn more about the career, and donating funds in support of
            local charities.
          </p>
          <p>
            If you are a prospective student interested in shadowing opportunities, or a genetic
            counselor able to host observers, please email{" "}
            <a href="mailto:shadowing@magcinc.org">shadowing@magcinc.org</a>.
          </p>
          <p>
            If you are interested in volunteering or have questions for the Genetic Services
            Committee, please email <a href="mailto:clchase@umich.edu">clchase@umich.edu</a>.
          </p>
          <h2>Professional Development Committee</h2>
          <p>
            The primary responsibility of the Professional Development (PD) committee is to plan
            events that enhance the professional development of MAGC members. In the past this has
            included professional talks that were either held in person or, more recently,
            completely virtually. These events typically have CEU credits that can be claimed by
            those interested.
          </p>
          <p>
            In addition, the PD committee includes two subcommittees with vital functions: 1) The
            Licensure Subcommittee which has been working on the licensure bill and application
            process in Michigan; and 2) The Diversity, Equity, and Inclusion (DEI) Subcommittee,
            which aims to bring awareness to DEI issues and to increase tolerance and diversity in
            the practice of genetic counseling in the state of Michigan. Read more about these
            subcommittees below.
          </p>
          <p>
            If you are interested in volunteering or have questions for the Professional Development
            Committee, please email <a href="mailto:renation@umich.edu">renation@umich.edu</a>.
          </p>
          <h2>Diversity, Equity, and Inclusion (DEI) Subcommittee</h2>
          <p>
            The DEI Subcommittee aims to acknowledge the disparities in healthcare experienced by
            individuals with underrepresented identities while also working to build resources to
            promote acceptance and inclusion. In the first year of the subcommittee’s creation, it
            drafted the priorities that guide the activities of the group, hosted two discussion
            events (discussing The Exeter Group’s report of NSGC and a book discussion) and
            supported a presentation during the AEC. The DEI subcommittee plans to collaborate with
            other MAGC committees in hosting 3-4 events a year.
          </p>
          <p>
            If you are interested in volunteering or have questions for the DEI Subcommittee, please
            email <a href="mailto:dei@magcinc.org">dei@magcinc.org</a>.
          </p>
          <h2>Licensure Subcommittee</h2>
          <p>
            The Licensure Subcommittee aims to support activities related to licensure and
            credentialing for genetic counselors in the state of Michigan. These activities include
            ensuring that genetic counselors are educated about genetic counselor licensure rules
            and regulations, scope of practice, and the licensure application process. The
            subcommittee will also help educate genetic counselors about the importance of
            credentialing, the steps to take to pursue credentialing at their places of employment,
            and challenges to becoming credentialed. With the MAGC leadership, the subcommittee will
            evaluate the impact of licensure in Michigan and assess whether any legislative changes
            may be needed.
          </p>
          <p>
            Potential applicants should review the{" "}
            <a
              href={
                "https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/gen-couns"
              }
              target={"_blank"}
            >
              LARA Genetic Counselors website/landing page and application materials
            </a>
            . Should an applicant still have remaining questions, they should reach out to the
            Bureau via <a href="mailto:bplhelp@michigan.gov">bplhelp@michigan.gov</a>.
          </p>
          <h2>Technology and Communications Subcommittee</h2>
          <p>
            This subcommittee aims to support MAGC in activities related to technology and
            communications. Specifically, volunteers assist MAGC in representation on its website
            and social media platforms, communication with the membership on behalf of the Board of
            Directors and their committees, and use of online applications (Google applications,
            videoconferencing, etc.) where possible. Assistance with certain forms of technology may
            not be available depending on volunteer experience and knowledge.
          </p>
          <p>
            Volunteers need not have experience in all subcommittee activities (website development,
            social media management, use of other technology), though some background knowledge in
            their area of interest is preferred. Please email{" "}
            <a href="mailto:info@magcinc.org">info@magcinc.org</a> for more information.
          </p>
        </div>
      </PageContent>
    </Navigation>
  )
}
