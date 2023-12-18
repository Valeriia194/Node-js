import { Component, ReactNode } from "react";
import Image from "next/image";
import s from "./about.module.css";

import img from '@/assets/img/pagetwo.png'
import img2 from '@/assets/img/pagetwoo.png'
import fire from '@/assets/img/fire.png'

interface State {
  counter: number;
}

interface Props {}

class About extends Component<Props, State>{
  constructor(props: Props){
    super(props);
    this.state = {
      counter: 0
    }
  }
  increment = () => {
    this.setState((prevState)=>({
      counter: prevState.counter +1
    }))
  };
  decrement = () =>{
    this.setState((prevState)=>({
      counter: prevState.counter - 1
    }))
  }
  render():ReactNode {
    return (
      <div className={s.pageBackground}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 60 }}>
            <Image src={img} alt="Image 1" style={{ margin: '10px'}} />
            <button onClick={this.increment} style={{ backgroundColor: 'orange', border: 'none', padding: '10px 20px', color: 'black', cursor: 'pointer', borderRadius: '12px' }}>Join smash</button>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Image src={fire} alt="fire" />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'red', fontWeight: 'bold' }}>
                {this.state.counter}
              </div>
            </div>
            <h2 className={s.textColor}>Lorem ipsum text about really interesting news</h2>
            <p style={{ marginRight: 80 }} className={s.textColor}>Lorem ipsum text about really interesting news, lorem ipsum text about really interesting news, lorem ipsum text about really interesting news</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Image src={img2} alt="Image 1" style={{ margin: '10px'}} />
            <button onClick={this.increment} style={{ backgroundColor: 'orange', border: 'none', padding: '10px 20px', color: 'black', cursor: 'pointer', borderRadius: '12px' }}>Join smash</button>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Image src={fire} alt="fire" />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'red', fontWeight: 'bold' }}>
                {this.state.counter}
              </div>
            </div>
            <h2 className={s.textColor}>Lorem ipsum text about really interesting news</h2>
            <p style={{ marginRight: 80 }} className={s.textColor}>Lorem ipsum text about really interesting news, lorem ipsum text about really interesting news, lorem ipsum text about really interesting news</p>
          </div>
        </div>
      </div>

    )
  }
}

export default About;