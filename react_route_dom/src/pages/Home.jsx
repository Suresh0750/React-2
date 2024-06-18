import React from 'react'
import {useParams} from 'react-router-dom'

const Home = () => {
  const {userName} = useParams()
  return (
    <div>
      <h1>
        Wellcome to Home Page : {userName}
        <p></p>
      </h1>
    </div>
  )
}

export default Home
