import {React,useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import './Header.css'
export default function Header() {
  
  useEffect(()=>{
    const al=document.querySelector(".alllink")
    al.style.color="red"

    const react1=document.querySelector(".reactlink")
    react1.addEventListener("click",()=>{
      al.style.color="white"
    })
    const jslink=document.querySelector(".jslink")
    jslink.addEventListener("click",()=>{
      al.style.color="white"
    })
    const htmllink =document.querySelector(".htmllink ")
    htmllink.addEventListener("click",()=>{
      al.style.color="white"
    })
    const bootstrab =document.querySelector(".bootstrab ")
    bootstrab.addEventListener("click",()=>{
      al.style.color="white"
    })
    const python =document.querySelector(".python")
    python.addEventListener("click",()=>{
      al.style.color="white"
    })
  },[])
  
      return (
    <>
        <div className="box">
          <Link className='alllink style after' to="/all">All</Link> 
          <Link className='reactlink style after' to="/react">React</Link> 
          <Link className='jslink style after' to="/js">JS</Link> 
          <Link className='htmllink style after' to="/htmlcss">HTML&CSS</Link> 
          <Link className='bootstrab style after' to="/bootstrab">Bootstrab</Link> 
          <Link className='python style' to="/python">Python</Link> 
          </div>
    </>
  )
}
