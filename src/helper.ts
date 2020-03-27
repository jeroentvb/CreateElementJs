import { ElementConfig } from './types/config.model'

export function addCss(element: Element, config: ElementConfig) {
  if (config.cssClass) {
    if (Array.isArray(config.cssClass)) {
      config.cssClass.forEach(cssClass => element.classList.add(cssClass))
    } else {
      element.classList.add(config.cssClass)
    }
  }

  if (config.id) {
    element.setAttribute('id', config.id)
  }
}
