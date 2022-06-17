import type { PlasmoContentScript } from "plasmo"
import cssText from "../../style.css"

export const config: PlasmoContentScript = {
//   matches: ["https://www.plasmo.com/*"]
matches: ["<all_urls>"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}
window.addEventListener("load", () => {
  console.log("content script loaded")

  document.body.style.background = "blue"
})

export {}
