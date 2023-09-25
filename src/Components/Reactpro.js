import React from 'react'
import p1 from '../assests/imgs/portflio.PNG'
import p2 from '../assests/imgs/3dpotflioreact.PNG'
export default function Reactpro() {
  return (
    <>
      <div className="container conpro">
       <div className="info">
          <img src={p1} alt="" />
          <div className="caption">
            <div className="content">
              <h2>Portflio Website</h2>
              <p>Web Developement & Design</p>
            </div>
          </div>
        </div>
       <div className="info">
          <img src={p2} alt="" />
          <div className="caption">
            <div className="content">
              <h2>3D Portflio Website</h2>
              <p>Web Developement & Design</p>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
