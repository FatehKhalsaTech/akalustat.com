import {Styles} from './types'
export const classes = (style?: Styles, classNames?: string[]) => !!style && !!classNames && classNames.map(className => style[className]).filter(s => !!s).join(" ") || ""
