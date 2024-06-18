import React,{useContext} from 'react'
import { ThemeContext } from './App'

const users = () => {
    const {style} = useContext(ThemeContext)

    console.log("style",style)
  return (
        <h4 style={style}>users</h4>
  )
}

export default users
