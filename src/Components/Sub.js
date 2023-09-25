import React from 'react'
import './Sub.css'
export default function Sub() {
  return (
    <>
      <div className="container consub">
        <div className="carry">
        <h3>Subscribe to our Newsletter<br/>& Never miss latest updates</h3>
        <div className="form">
            <input type="email" placeholder='Email'/>
            <button>Submit</button>
        </div>
        </div>
      </div>
    </>
  )
}
