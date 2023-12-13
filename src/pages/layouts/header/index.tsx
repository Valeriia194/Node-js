import React from 'react'
import s from "./header.module.css";

const Header = () => {
  return (
    <>
    <div className={s.header}>
        <div>GameCOM</div>
        <nav>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Portfolio</a>
            <a href="#">News</a>
            <button style={{ backgroundColor: 'orange', border: 'none', padding: '10px 20px', color: 'white', cursor: 'pointer', borderRadius: '12px' }}>Contact us</button>
        </nav>
    </div>
    </>
  )
}

export default Header