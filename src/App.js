import React from 'react'
import "./App.css"
import background from "./images/memory.jpg"
import Cards from './Components/Cards'
const App = () => {
  return (

    <div className='full' style={{ 
      backgroundImage:`url(${background})`,
        backgroundSize:'cover',
        backgroundRepeat  : 'no-repeat',
    }}>
      <Cards/>
    </div>
  )
}

export default App
