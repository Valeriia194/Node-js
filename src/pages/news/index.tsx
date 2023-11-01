import { useState, useEffect, useMemo } from "react"
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
// import components
import Card from "@/components/card";

export default function Home() {
  const data = [
    { id:1, title: "Test1", description: "Lorem1" },
    { id: 2, title: "Test2", description: "Lorem2" },
    { id: 3, title: "Test3", description: "Lorem3" },
    { id: 4, title: "Test4", description: "Lorem4" },
    { id:5, title: "Test5", description: "Lorem5" },
  ];
// states
const [number, setNumber] = useState(0);

// on loan
useEffect(()=>{

}, [number]);

// calc
const adult = useMemo(()=>{
  if (number>=18){
    return "Adult"
  }
  else{
    return "Not adult!"
  }
}, [number])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        HELLO WORLD!
        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li></li>
          </ul>
        </nav>
        <div>
          <button onClick={()=>{
            setNumber(number+1)
          }}>+</button>
          <button onClick={()=>{
            setNumber(number-1)
          }}>-</button>
        </div>
        {data.map((e: any) => {
          return <Card num={number} data={e} key={e} />;
        })}
      </main>
    </>
  );
}