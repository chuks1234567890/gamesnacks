import React from 'react'
import home_icon from "./home-icon.svg"
const Header = () => {
  return (
    <header>
        <div className="logo"><img src={home_icon} alt="logo"/></div>
        <div className="more-options">
            <button className="btn-dark">Play</button>
        </div>
    </header>
  )
}

export default Header