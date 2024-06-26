import React from 'react'
import Home from './Pages/Home'
import {BrowserRouter as Router , Routes , Route}  from 'react-router-dom'
import Laptop from './Pages/Laptop'
import Clothes from './Pages/Clothes'

const App: React.FC= () => {
  return (
    <>
       <Router>
           <Routes>
                <Route path ='/' element = {<Home/>}/>
                <Route path ='/laptop' element = {<Laptop/>}/>
                <Route path = '/clothes' element = {<Clothes/>}/>
                <Route path = '/tech' element = {<Clothes/>}/>
           </Routes>
       </Router>
    </>
  )
}

export default App
