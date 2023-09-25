import React from 'react'
import gym from '../assests/imgs/profile.PNG'
import student from '../assests/imgs/studentpy.PNG'
export default function Python() {
  return (
    <>
              <div className="container conpro">
       <div className="info">
          <img src={gym} alt="" />
          <div className="caption">
            <div className="content">
              <h2>Gold Gym</h2>
              <p>Python Developer</p>
            </div>
          </div>
        </div>
       <div className="info">
          <img src={student} alt="" />
          <div className="caption">
            <div className="content">
              <h2>Student Registration</h2>
              <p>Web Developement & Design</p>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
