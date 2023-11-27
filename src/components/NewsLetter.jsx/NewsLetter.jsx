import React from 'react'
import './NewsLetter.css'
function NewsLetter() {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Order on Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='Enter your email address here...'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter