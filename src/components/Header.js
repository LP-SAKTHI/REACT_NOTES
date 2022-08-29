import React from 'react'

const Header = ({handleDarkMode}) => {
  return (
    <div className='header-sec'>
        <div className='heading'><h1>REACT NOTES</h1></div>
        <div className='toggle-btn'> 
            <button onClick={()=>handleDarkMode((previousDarkMode)=>!previousDarkMode)} className = "toggle">
              <img src = "https://cdn-icons-png.flaticon.com/512/5464/5464048.png"
              alt ="dark-light"
              height = "30px"
              width = "30px"/>
              </button>
        </div>
    </div>
  )
}

export default Header