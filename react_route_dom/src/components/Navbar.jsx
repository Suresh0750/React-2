import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  const style = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  }
  return (
    <div style={style}>
      <h1>
        Titan
      </h1>
      <ul>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/contact">Contect</Link>
      </ul>
    </div>
  )
}

export default Navbar
