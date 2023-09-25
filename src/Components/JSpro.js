import React from 'react'
import card from '../assests/imgs/cardjs.PNG'
import clock from '../assests/imgs/clockjs.PNG'
import creative from '../assests/imgs/creactivejs.PNG'
import editimg from '../assests/imgs/editimgjs.PNG'
import moveapp from '../assests/imgs/moveappjs.PNG'
import specialdesign from '../assests/imgs/specialdesignjs.PNG'
export default function JSpro() {
  return (
    <>
          <div className="container conpro">
       <div className="info">
          <img src={card} alt="" />
          <div className="caption">
            <div className="content">
              <h2>Expanding Cards</h2>
              <p>Web Developement & Design</p>
            </div>
          </div>
        </div>
       <div className="info">
          <img src={clock} alt="" />
          <div className="caption">
            <div className="content">
              <h2>Theme Clock</h2>
              <p>Web Developement & Design</p>
            </div>
          </div>
        </div>
       <div className="info">
          <img src={creative} alt="" />
          <div className="caption">
            <div className="content">
              <h2>Creative Page</h2>
              <p>Web Developement & Design</p>
            </div>
          </div>
        </div>
       <div className="info">
          <img src={editimg} alt="" />
          <div className="caption">
            <div className="content">
              <h2>Edit img js</h2>
              <p>Web Developement & Design</p>
            </div>
          </div>
        </div>
       <div className="info">
          <img src={moveapp} alt="" />
          <div className="caption">
            <div className="content">
              <h2>Movie App</h2>
              <p>Web Developement & Design</p>
            </div>
          </div>
        </div>
       <div className="info">
          <img src={specialdesign} alt="" />
          <div className="caption">
            <div className="content">
              <h2>special design</h2>
              <p>Web Developement & Design</p>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
