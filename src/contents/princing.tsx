import type { PlasmoContentScript } from "plasmo"
// import cssText from "../../style.css"
import cssText from "data-text:~/Desktop/programs/madMail/test-chrome-extension/peacemail/style.css"

export const config: PlasmoContentScript = {
  matches: ["<all_urls>"]
}


export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}
// querySelector('input[name="pwd"]')
// export const getMountPoint = async () => document.querySelector("#pricing")
export const getMountPoint = async () => document.querySelector('input[type="email"]')

const PlasmoPricingExtra = () => {
  return (
    <div
      // style={{
      //   background: "white",
      //   padding: 12
      // }}
      className="bg-pink-800"
      >
      HELLO WORLD
    </div>
  )
}

export default PlasmoPricingExtra