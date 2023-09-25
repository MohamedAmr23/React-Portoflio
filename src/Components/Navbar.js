import {React,useState,useEffect }from 'react';

import './Navbar.css';
import '../App.css';
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // useEffect(() => {
  //   const cont=document.querySelector(".pos")
  //   // window.addEventListener("scroll",()=>{ cont.classList.add("styleheader")})
  //  ///////////////////////////////2
  //  if (window.scrollY > 100) {
  //   const cont=document.querySelector(".pos")
  //   if (cont) {
  //     cont.classList.add("styleheader");
  //   }
  // }
    
  // }, []);
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <div className={`pos ${isScrolled ? 'styleheader' : 'smooth'}`}>
    <div className="container ">
   <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className=" logo"  href="#">Logo</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0"> 
        <li className="nav-item">
          <a className="home" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="skills" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="projects" href="#projects">Projects</a>
        </li>
          
        <li className="nav-item">
          <a className="link1 link" href="https://www.facebook.com/profile.php?id=100030906974430"><i class="fa-brands fa-facebook"></i></a>
        </li>
        <li className="nav-item">
          <a className="link2 link" href="https://www.linkedin.com/in/mohamed-amr-2b4480230/"><i class="fa-brands fa-linkedin"></i></a>
        </li>
        <li className="nav-item">
          <a className="link3 link" href="https://github.com/MohamedAmr23"><i class="fa-brands fa-github"></i></a>
        </li>
      </ul>
      <a href="#btncon"><button className='btncon'>Let's Connect</button></a>
      
    </div>
  </div>
</nav>
</div>
</div>
    </>
  )
}
