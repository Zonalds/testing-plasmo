import { useReducer } from "react"

import "../style.css"

function IndexPopup() {
  const [count, increase] = useReducer((c) => c + 1, 0)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <button
        onClick={() => increase()}
        type="button"
        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Count:
        <span className="inline-flex items-center justify-center w-8 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
          {count}
        </span>
      </button>
    </div>
  )
}

export default IndexPopup












// import { useState } from "react"

// function IndexPopup() {
//   const [data, setData] = useState("")

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         padding: 16
//       }}>
//       <h1>
//         Welcomex to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
//       </h1>
//       <input onChange={(e) => setData(e.target.value)} value={data} />
//     </div>
//   )
// }

// export default IndexPopup




