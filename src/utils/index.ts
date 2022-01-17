import { CreateStyleSheetType } from './interface'

export function getId(length = 7) {
  let result = 'm'
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export function isObject(checkVariable: any) {
  return (
    typeof checkVariable === 'object' &&
    !Array.isArray(checkVariable) &&
    checkVariable !== null
  )
}

export function createStyleSheet(data: CreateStyleSheetType) {
  console.log('style-engine-call')

  const styles: any = data.styles
  const moreCss: string[] = []

  function generateCss(obj: any, property: string) {
    let css = ''
    css += `${property} {`
    for (const innerProperty in obj[property]) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj[property].hasOwnProperty(innerProperty)) {
        if (isObject(obj[property][innerProperty])) {
          moreCss.push(generateCss(obj[property], innerProperty))
        } else {
          css += ` ${innerProperty}: ${obj[property][innerProperty]};`
        }
      }
    }
    css += `}`
    return css
  }

  function addMoreCss(property: string) {
    let cssString = ''
    moreCss.forEach((c: string) => {
      cssString += `\n${property}${c}`
    })
    return cssString
  }

  let css: any = ''

  for (const property in styles) {
    // eslint-disable-next-line no-prototype-builtins
    if (styles.hasOwnProperty(property) && styles[property]) {
      // it is a class
      css = generateCss(styles, property)
      css += addMoreCss(property)
    }
  }

  const head = document.head || document.getElementsByTagName('head')[0]
  const styleSheet = document.createElement('style')
  head.appendChild(styleSheet)
  styleSheet.appendChild(document.createTextNode(css))
}
