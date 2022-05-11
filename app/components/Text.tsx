import { ReactNode } from "react"
import {classes} from '../utils/classes'
import {Styles, WithChildren} from '../utils/types'
// import utilStyles from '../../styles/utils.module.css'
import { UtilStyle, TextStyle } from './Styles'


type TextProps = {
  children: ReactNode
  style?: Styles,
  styleClassNames?: string [],
}
export const Text = ({children, style, styleClassNames}: TextProps) => (
  //@ts-ignore
  <div className={classes(style, styleClassNames)}>
  {children}
  </div>
)


export const Debug = ({children}: WithChildren) => (
  <UtilStyle classNames={["debug"]} >
    {children}
  </UtilStyle>
)
export const Punjabi = ({children}: WithChildren) => (
    <TextStyle classNames={["punjabi"]}>
      {children}
    </TextStyle>
)

export const PunjabiCaligraphy = ({children}: WithChildren) => (
  <TextStyle classNames={["punjabi_caligraphy"]}>
    {children}
  </TextStyle>
)

export { TextStyle } from './Styles'
