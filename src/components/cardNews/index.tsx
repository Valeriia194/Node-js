import React from 'react'
import Link from 'next/link'
import s from "./cardNews.module.scss"

interface Props {
    data: any;
}
const CardNews = (props: Props) => {
    const {data} =props;
  return (
    <>
    <div>
        <h4> {data?.title} </h4>
        <p> {data?.body} </p>
        <Link href={`/news/${data?.title}?id=${data.id}`}>More</Link>
    </div>
    </>
  )
}

export default CardNews