import React,{useContext} from 'react'
import Users from './users'
import {practice} from './container'

//#  prop drilling method

// const User = ({style1}) => {
//   return (
//     <div>
//       <h2>
//         User
//       </h2>
//       <Users style2 = {style1}/>
//     </div>
//   )
// }

const User = () => {
    const value = useContext(practice)
    console.log(value)
  return (
    <div> 
      <h2>
        User ,{value}
      </h2>
      <Users />
    </div>
  )
}

export default User