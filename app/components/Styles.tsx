import {Styles} from '../lib/types'
import {classes} from '../lib/classes'
import { ReactNode } from 'react'

import UtilStyles from '../../styles/lib/utils.module.css'
import TextStyles from '../../styles/lib/text.module.css'

type StyleProps = {
  style: Styles,
  classNames: string[]
  children: ReactNode
}

export const PageStyle = ({style, classNames, children}: StyleProps) => (
  <div className={classes(style, classNames)}>
    {children}
  </div>
)

type UtilStyleProps = {
  classNames: string[]
  children: ReactNode
}
export const UtilStyle = ({classNames, children}: UtilStyleProps) => (
  <div className={classes(UtilStyles, classNames)}>
    {children}
  </div>
)
type TextStyleProps = {
  classNames: string[]
  children: ReactNode
}
export const TextStyle = ({classNames, children}: TextStyleProps) => (
  <div className={classes(TextStyles, classNames)}>
    {children}
  </div>
)
