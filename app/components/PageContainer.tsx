import { WithChildren } from "../lib/types"
import PageStyles from '../../styles/lib/page.module.css'
import { classes } from "../lib/classes"

export const BorderPage = ({children}: WithChildren) => (
  <div className={PageStyles.container}>
    <div className={classes(PageStyles, ["main", "border"])}>
      <div className={classes(PageStyles, ["children"])}>
      {children}
      </div>
    </div>
  </div>
)



export const NormalPage = ({children}: WithChildren) => (
  <div className={PageStyles.container}>
    <div className={classes(PageStyles, ["main"])}>
      {children}
    </div>
  </div>
)