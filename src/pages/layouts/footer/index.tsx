import React from "react";
import s from "./footer.module.css";
import Image from "next/image";

//import img
import img3 from '@/assets/img/logo1.png'

const Footer = () => {
  return (
    <>
     {/*Footer*/}
     <footer style={{ display: 'flex', justifyContent: 'space-between', padding: '30px', borderTop: '1px solid #ddd', backgroundColor: 'black', color: 'white', paddingLeft: '60px', paddingRight: '60px' }}>
        <div>
          <Image src={img3} alt="img" />
          <p>Lorem ipsum</p>
        </div>
        <div>
          <h3>About us</h3>
          <ul style={{ listStyle: 'none', textAlign: 'left'}}>
            <li><a href="#" style={{ color: 'white' }}>Zeux</a></li>
            <li><a href="#" style={{ color: 'white' }}>Portfolio</a></li>
            <li><a href="#" style={{ color: 'white' }}>Careers</a></li>
            <li><a href="#" style={{ color: 'white' }}>Contact us</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact us</h3>
          <p>Lorem Ipsum</p>
          <p>+38099999999</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;