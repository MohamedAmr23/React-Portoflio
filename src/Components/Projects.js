import {React,useEffect,useState} from 'react'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './Projects.css'
import Allpro from './Allpro'
import Header from './Header'
import Reactpro from './Reactpro'
import JSpro from './JSpro'
import Htmlcsspro from './Htmlcsspro'
import Bootstrab from './Bootstrab'
import Python from './Python'
export default function Projects() {
  useEffect(()=>{
    window.onload=()=>{
      <Route path="/" element={<Allpro/>}/>

    }
  },[])
  return (
    <>
      <div className="con-pro text-center" id='projects'>
        <h1 className='h1pro'>Projects</h1>
        <p className='ppro'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur placeat fugiat atque! Quisquam nihil consectetur error itaque nisi, aliquam iure quam magni, veritatis accusantium ut illum rerum, temporibus eaque doloremque!</p>
        <Router>
            <Header/>
        <Routes>
      
            <Route path="/" element={<Allpro/>}/>
            <Route path='/all' element={<Allpro/>}/>
            <Route path='/react' element={<Reactpro/>}/>
            <Route path='/js' element={<JSpro/>}/>
            <Route path='/htmlcss' element={<Htmlcsspro/>}/>
            <Route path='/bootstrab' element={<Bootstrab/>}/>
            <Route path='/python' element={<Python/>}/>

        </Routes>
        </Router>
      </div>
    </>
  )
}
