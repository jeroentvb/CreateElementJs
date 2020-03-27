import { ElementConfig } from './types/config.model'

import { addCss } from './helper'

function create (name: string, cssClass: string | string[]) {
  const el = document.createElement(name)

  if (Array.isArray(cssClass)) cssClass.forEach(css => el.classList.add(css))
  if (!Array.isArray(cssClass) && cssClass) el.classList.add(cssClass)

  return el
}

function image (src: string, alt: string, config: ElementConfig) {
  if (!src) throw new Error('No image source specified')
  if (!alt) console.warn('No alt set!')

  const img = document.createElement('img')

  img.src = src
  img.alt = alt

  if (config) addCss(img, config)

  return img
}

// function textNode (content, parent) {
//   const text = document.createTextNode(content)

//   parent.appendChild(text)
// }

// function paragraph () {
  
// }

// function update (el, elements, title) {
//   return new Promise((resolve, reject) => {
//     this.removeChildren(el)

//     if (elements.length === undefined) {
//       if (title) el.appendChild(title)
//       el.appendChild(elements)

//       resolve()
//     } else {
//       if (title) el.appendChild(title)
//       elements.forEach(element => el.appendChild(element))

//       resolve()
//     }
//   })
// }

// function removeChildren (el) {
//   while (el.firstChild) el.removeChild(el.firstChild)
// }

// function appendChildren (el, elements) {
//   elements.forEach(element => el.appendChild(element))
// }

// eslint-disable-next-line no-unused-vars
const element = {
  create,
  image,
  // textNode,
  // update,
  // removeChildren,
  // appendChildren
}
