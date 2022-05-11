import {Styles} from './types'
// export const classes = (styles: Styles[], classNames: string[][]) => {
// const test = styles.map((style, index) =>  classNames[index].map(className => style[className]).join(" ") )
//   .filter(s => !!s)
//   .join(" ")

//   console.log(test)

//   return test
// }

export const classes = (style?: Styles, classNames?: string[]) => !!style && !!classNames && classNames.map(className => style[className]).filter(s => !!s).join(" ") || ""
