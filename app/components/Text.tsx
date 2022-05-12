import { ReactNode } from "react"
import {classes} from '../lib/classes'
import {Styles, WithChildren} from '../lib/types'
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

export const Center = ({children}: WithChildren) => (
  <TextStyle classNames={["center_text"]}>
    {children}
  </TextStyle>
)

export { TextStyle } from './Styles'
