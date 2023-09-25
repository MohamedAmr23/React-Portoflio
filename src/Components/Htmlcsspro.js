import React from 'react'
import web1 from '../assests/imgs/1web.PNG'
import effect from '../assests/imgs/effecthtml.PNG'
import messi from '../assests/imgs/messiweb.PNG'
import oldport from '../assests/imgs/old portfliohtml.PNG'
import t3 from '../assests/imgs/t3html.PNG'
import t4 from '../assests/imgs/t4html.PNG'
import youtube from '../assests/imgs/youtubehtml.PNG'
export default function Htmlcsspro() {
  return (
    <div>
          <div className="container conpro">
            <div className="info">
                <img src={web1} alt="" />
                <div className="caption">
                  <div className="content">
                    <h2>project web</h2>
                    <p>Web Developement & Design</p>
                  </div>
                </div>
              </div>
          <div className="info">
              <img src={effect} alt="" />
              <div className="caption">
                <div className="content">
                  <h2>Effect Dashboard</h2>
                  <p>Web Developement & Design</p>
                </div>
              </div>
            </div>
          <div className="info">
              <img src={messi} alt="" />
              <div className="caption">
                <div className="content">
                  <h2>who are champion?</h2>
                  <p>Web Developement & Design</p>
                </div>
              </div>
            </div>
          <div className="info">
              <img src={oldport} alt="" />
              <div className="caption">
                <div className="content">
                  <h2>Portflio</h2>
                  <p>Web Developement & Design</p>
                </div>
              </div>
            </div>
          <div className="info">
              <img src={t3} alt="" />
              <div className="caption">
                <div className="content">
                  <h2>Template 3</h2>
                  <p>Web Developement & Design</p>
                </div>
              </div>
            </div>
          <div className="info">
              <img src={youtube} alt="" />
              <div className="caption">
                <div className="content">
                  <h2>Youtube Website</h2>
                  <p>Web Developement & Design</p>
                </div>
              </div>
            </div>
          <div className="info">
              <img src={t4} alt="" />
              <div className="caption">
                <div className="content">
                  <h2>Dashboard Website</h2>
                  <p>Web Developement & Design</p>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}
