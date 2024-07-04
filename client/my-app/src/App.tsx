import React from 'react'
import Home from './Pages/Home'
import {BrowserRouter as Router , Routes , Route, BrowserRouter}  from 'react-router-dom'
import Laptop from './Pages/Laptop'
import Clothes from './Pages/Clothes'
import Tech from './Pages/Tech'
import AddItems from './components/Comp/Additems'

const App: React.FC= () => {
  return (
    <>
       <Router>
           <Routes>
                <Route path ='/' element = {<Home/>}/>
                <Route path ='/api/additem/Laptop' element = {<Laptop/>}/>
                <Route path = '/api/additem/Clothes' element = {<Clothes/>}/>
                <Route path = '/api/additem/Tech' element = {<Tech/>}/>
           </Routes>
       </Router>

    </>
  )
}


export default App