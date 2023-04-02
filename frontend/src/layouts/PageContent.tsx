import styles from "./PageContent.module.scss"

type PageContentProps = {
  children: React.ReactNode
  title?: string
}

const PageContent = (props: PageContentProps) => (
  <>
    {props.title && (
      <div className={styles["page-header-banner-container"]}>
        <div className={styles["page-header-banner"]}>
          <div className={styles["page-header"]}>
            <h1>{props.title}</h1>
          </div>
        </div>
      </div>
    )}
    <div className={styles["page-content-container"]}>
      <div className={styles["page-content"]}>{props.children}</div>
    </div>
  </>
)
export default PageContent
