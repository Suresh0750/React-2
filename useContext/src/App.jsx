

// key worde  : rafce
import React,{useState,useMemo,createContext} from 'react'
import Container from './container.jsx'

export const ThemeContext = createContext()
const App = () => {

  const [theme,setTheme]= useState('light')

  console.log(theme)

  const style = useMemo(()=>{
    // console.log('style change')
   return {
      backgroundColor: theme==="light" ? 'white' : 'black',
      color : theme ==="light" ? 'black' : 'white'
  }
  },[theme])
  return (
      <ThemeContext.Provider value={{
        style     
    }}>
    <h1>App</h1>
    <button onClick={()=>setTheme((curr)=> (curr=="light" ? 'dark' : 'light'))}>change theme</button>
    <Container style = {style}/>
    </ThemeContext.Provider>
  )
}

export default App
