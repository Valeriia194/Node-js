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
            <a href="#">Contact Us</a>
        </nav>
    </div>
    </>
  )
}

export default Header