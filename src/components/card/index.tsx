import React from 'react'
import s from "./card.module.css";
import img from "@/assets/img/Joystick.png";

const card = (props:any) => {
  return (
    <>
    {props.data.map((item:any) => (
        <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>Get more details</button>
        </div>
    ))}
    <img src={"@/assets/img/Joystick.png"} alt="контроллер" />
</>
  )
}

export default card