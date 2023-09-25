import React from 'react'
import bootstrab from '../assests/imgs/bootstrab.PNG'
import bootstrab2 from '../assests/imgs/webbootstrab.PNG'
export default function Bootstrab() {
  return (
    <>
    <div className="container conpro">
       <div className="info">
          <img src={bootstrab} alt="" />
          <div className="caption">
            <div className="content">
              <h2>Bootstrab</h2>
              <p>Web Developement & Design</p>
            </div>
          </div>
        </div>
       <div className="info">
          <img src={bootstrab2} alt="" />
          <div className="caption">
            <div className="content">
              <h2>Bootstrab</h2>
              <p>Web Developement & Design</p>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
