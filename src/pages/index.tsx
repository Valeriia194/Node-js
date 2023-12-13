import React, { useEffect, useState } from "react";
import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

// importing images
import img from '@/assets/img/Joystick.png'
import img2 from '@/assets/img/Frame1.png'
import img4 from '@/assets/img/41.png'
import img42 from '@/assets/img/42.png'
import img43 from '@/assets/img/43.png'
import img44 from '@/assets/img/44.png'
import semi from '@/assets/img/semi.png'
import fire from'@/assets/img/fire.png'
import cod from '@/assets/img/COD.png'


export default function Home() {
  // store products
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    return await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        return json;
      });
  };

  // call getAllProducts
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ padding: '0 60px' }}>
        
        
         {/*Show product*/}
        {products.length > 0 && (
          <div key={products[0].id} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ marginRight: '50px' }}>
              <h2>{products[0].title}</h2>
              <p>{products[0].description}</p>
              <button style={{ backgroundColor: 'orange', border: 'none', padding: '10px 20px', color: 'white', cursor: 'pointer', borderRadius: '12px' }}>Get more details</button>
            </div>
            <Image src={img} alt="img" />
          </div>
        )}

       {/*Camos text and image*/}
       <div style={{ width: '100%', marginLeft: 80,  top: '809px', left: '161.07px' }}>
          <h2 style={{ opacity: '0.1', position: 'absolute', zIndex: '1', fontSize: 100 }}>Camos</h2>
          <Image src={img2} alt="img" style={{ width: '1370px', height: '610px' }} />
        </div>

        {/*Currently trading Games block*/}
<div style={{ display: 'flex', color: 'orange', flexDirection: 'column', alignItems: 'center', marginTop: '100px', paddingLeft: '60px', paddingRight: '60px' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
    <h2>Currently trading Games</h2>
    <button style={{ backgroundColor: 'orange', border: 'none', padding: '10px 20px', color: 'white', cursor: 'pointer', borderRadius: '12px' }}>See All</button>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '20px' }}>
    <div>
      <Image src={img4} alt="img4" />
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <Image src={fire} alt="followerImg" width={25} height={25} />
        <p> Followers 20</p>
      </div>
    </div>
    <div>
      <Image src={img42} alt="img42" />
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <Image src={fire} alt="followerImg" width={25} height={25} />
        <p> Followers 20</p>
      </div>
    </div>
    <div>
      <Image src={img43} alt="img" />
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <Image src={fire} alt="followerImg" width={25} height={25} />
        <p> Followers 20</p>
      </div>
    </div>
    <div>
      <Image src={img44} alt="img" />
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <Image src={fire} alt="followerImg" width={25} height={25} />
        <p> Followers 20</p>
      </div>
    </div>
  </div>
</div>

 {/*Show product2*/}
 {products.length > 0 && (
  
          <div key={products[1].id} style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 60, paddingTop:150 }}>
            <Image src={cod} alt="img" />
            <div style={{ marginRight: '150px', marginLeft: 100 }}>
              <h2>{products[1].title}</h2>
              <p>{products[1].description}</p>
              <button style={{ backgroundColor: 'orange', border: 'none', padding: '10px 20px', color: 'white', cursor: 'pointer', borderRadius: '12px' }}>Get more details</button>
            </div>
          </div>
        )}


        {/*Full width semi-transparent image*/}
        <div style={{ marginTop: '30px' }}>
        <Image src={semi} alt="img" style={{ marginLeft: 40, width: '90%', opacity: '1.5', filter: 'grayscale(100%)' }} />
        </div>
        
        {/* <Link href="/about">About</Link> */}
      </main>
    </>
  )
}