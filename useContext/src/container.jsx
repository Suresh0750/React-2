

import React,{createContext} from 'react'
import User from './user'
// const container = ({style}) => {
//   return (
//     <div>
//       <h2>Container</h2>
//       <User style1 = {style}/>
//     </div>
//   )
// }
export const practice = createContext()
const container = () => {
  return (
    <practice.Provider value = {'pranva'}>
      <h2>Container</h2>
      <User/>
    </practice.Provider>
  )
}

export default container
