import {React,useState,useEffect} from 'react'
import header from '../assests/imgs/header-img.svg'
import './Home.css'
export default function Home() {
const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const [text, setText] = useState("");
const [delta, setDelta] = useState(300 - Math.random() * 100);
const swap=["Frontend Developer","Python Developer","Backend Developer"]
const fullname=()=>{
    let i=loopNum  % swap.length
    let fullText=swap[i]
    let update=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1)
    setText(update)

    if(isDeleting){
        setDelta((prevDelta) => prevDelta / 2);
    }
    if(!isDeleting&&update==fullText){
        setIsDeleting(true)
    }
    else if(isDeleting&&update==""){
        setIsDeleting(false)
        setLoopNum(loopNum+1)
        setDelta(500);
    }
}
useEffect(()=>{
   let repeat=setInterval(()=>{
    fullname()
   },delta) 
   return () => {
    clearInterval(repeat);
  };
}, [text]);

  return (
    <>
    <div className='container' id='home'>
      <span class="welcome">Welcome to my portoflio.</span>
      <h2 className='hi'>Hi I'm Mohamed, <span>{text}</span> </h2>
      <p className='phome'>I'm a Frontend Web Developer specializing in creating visually stunning and user-friendly websites. With a passion for clean code and responsive design, I bring expertise in HTML, CSS, JavaScript, Bootstrap and React to every project.</p>
      <a href="#btncon">
      <button className='bhome connect'>Let's Connect</button>
      <i class="fa-solid fa-circle-right ihome connect"></i>
      </a>
      <img  className="imghome"src={header} alt="lazy" />
    </div>
    
    </>
  )
}
