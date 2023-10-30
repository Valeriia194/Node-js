import React from 'react'
//import styles
import style from "./card.module.css"

const card = () => {
    return (
        <>
            <div className={style.card}>
                <h2>title card</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio modi nisi quam aperiam placeat 
                    voluptatem rerum, deserunt ut fugiat neque doloremque nam consequuntur accusantium ratione officiis 
                    possimus ipsa sit! Eveniet.
                </p>
            </div>
        </>
    )
}

export default card