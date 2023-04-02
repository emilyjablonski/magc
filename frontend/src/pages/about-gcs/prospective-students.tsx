import { useEffect, useState } from "react"
import Navigation from "../../layouts/Navigation"
import PageContent from "@/layouts/PageContent"

export default function ProspectiveStudents() {
  // useEffect(() => {
  //   const getNewsPosts = async () => {
  //     const data = await axios.get("http://localhost:1337/api/news-posts")
  //     setNewsPosts(data.data.data)
  //   }
  //   getNewsPosts()
  // }, [])

  return (
    <Navigation>
      <PageContent title={"Prospective Students"}>
        <h2>How do I become a genetic counselor?</h2>
        <p>
          To practice as a genetic counselor, a two-year Master’s Degree is required. There are over
          50 accredited Genetic Counseling Graduate Programs in the United States and Canada. For a
          complete list, please click here. Although there are many similarities between the program
          in terms of admissions requirements and training requirements, each program is unique.
          There are currently two Genetic Counseling Graduate Programs in Michigan:{" "}
          <a
            href={
              "https://medicine.umich.edu/dept/human-genetics/academics/genetic-counseling-program"
            }
            target={"_blank"}
          >
            University of Michigan
          </a>{" "}
          and{" "}
          <a href={"https://genetics.wayne.edu/education/ms-genetic-counseling"} target={"_blank"}>
            Wayne State University
          </a>
          .
        </p>
        <h2>How can I shadow a genetic counselor?</h2>
        <p>
          Shadowing a genetic counselor is often encouraged prior to entrance into a genetic
          counseling training program. While shadowing opportunities are currently limited, more
          information can be found below:
        </p>
        <ul>
          <li>
            MAGC aims to connect prospective students in the state of Michigan to shadowing
            opportunities.{" "}
            <b>
              Please email <a href={"mailto:shadowing@magcinc.org"}>shadowing@magcinc.org</a> if you
              are interested in shadowing a genetic counselor
            </b>
            . Please be aware, to protect patient and staff safety, institutions may have several
            requirements that must be completed in order to shadow, which might include background
            checks and infectious disease precautions.
          </li>
          <li>
            You can visit{" "}
            <a href={"https://findageneticcounselor.nsgc.org/?reload=timezone"} target={"_blank"}>
              findageneticcounselor.nsgc.org
            </a>{" "}
            to locate a genetic counselor who may be open to student shadowing.
          </li>
          <li>
            NSGC also offers the{" "}
            <a
              href={
                "https://www.nsgc.org/Education-and-Events/Online-Education-Center/Online-Education-Inventory/JEMF-Master-Genetic-Counselor-Series"
              }
              target={"_blank"}
            >
              Master Genetic Counselor Series
            </a>
            , digital recordings of simulated genetic counseling sessions.
          </li>
        </ul>
        <h2>Where can I learn more?</h2>
        <p>
          MAGC hosts an annual informational event for prospective students. For the most recent
          event recording, please visit the{" "}
          <a href={"/news-events"} target={"_blank"}>
            News & Events
          </a>{" "}
          page. You can also follow us on{" "}
          <a href={"https://www.facebook.com/MAGCINC"} target={"_blank"}>
            Facebook
          </a>
          ,{" "}
          <a href={"https://twitter.com/MichiganGC"} target={"_blank"}>
            Twitter
          </a>
          , and{" "}
          <a
            href={
              "https://www.linkedin.com/company/michigan-association-of-genetic-counselors-magc/"
            }
            target={"_blank"}
          >
            LinkedIn
          </a>{" "}
          for updates about events for prospective students and outreach opportunities that might be
          of interest to you. If you would like to be added to the MAGC email list for prospective
          students, please email <a href={"mailto:shadowing@magcinc.org"}>shadowing@magcinc.org</a>.
        </p>
        <p>Other resources include:</p>
        <ul>
          <li>
            Visit the{" "}
            <a href={"https://www.aboutgeneticcounselors.org/"} target={"_blank"}>
              National Society of Genetic Counselors (NSGC)
            </a>{" "}
            website for more information about becoming a genetic counselor.
          </li>
          <li>
            You may find it helpful to contact practicing genetic counselors for an informational
            interview to learn more about their experience applying for programs, training, and
            working as a genetic counselor. You can search for genetic counselors open to student
            contact{" "}
            <a href={"https://findageneticcounselor.nsgc.org/"} target={"_blank"}>
              here
            </a>
            .
          </li>
          <li>
            Additional resources are offered by the{" "}
            <a href={"https://minoritygenetics.org/"} target={"_blank"}>
              Minority Genetic Professionals Network
            </a>{" "}
            which supports diverse students preparing for training and entry into genetics
            professions, including a{" "}
            <a href={"https://mgpn.chronus.com/"} target={"_blank"}>
              mentorship program
            </a>
            .
          </li>
        </ul>
        <h2>MAGC Scholarships for Application Fees</h2>
        <p>
          The Michigan Association of Genetic Counselors (MAGC) offers an annual scholarships for 5
          awardees in the amount of $200 per person to assist in reimbursement of genetic counseling
          training program application costs including Match Services Fee, application fees, travel
          expenses, etc. Michigan residents are eligible to apply.
        </p>
        <p>
          Applications become available in September/October and close on December 31st. Please see
          the{" "}
          <a href={"/news-events"} target={"_blank"}>
            News & Events
          </a>{" "}
          page for more details.
        </p>
      </PageContent>
    </Navigation>
  )
}
