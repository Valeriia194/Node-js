import React, { useEffect, useState } from "react";
import Link from "next/link";
// import components
import { News } from "@/modules/news";
import CardNews from "@/components/cardNews";

const news = () => {
      //init
      const n = new News()
      // states
      const [news, setNews] = useState<any>([])
      //load
      useEffect(()=>{
        n.getData("posts").then((data:any)=>{
          setNews(data)
        })
      })
  return (

    <>
      <h2>All News</h2>
      {
        news.map((item:any)=>{
          return <CardNews data={item} key={item.id} />
        })
      }
      <h3>Card News</h3>
    </>
  );
};

export default news;
