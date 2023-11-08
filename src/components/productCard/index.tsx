import React from 'react'
import Link from 'next/link'
// interfaces
import { Product } from '@/interfaces'

interface Props {
    data:Product
}


const Card = ({data}: Props) => {
    const {title, price, description, id} = data;
  return (
    <>
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>{price}</div>
        <Link href={`/products/$[id]`}>More</Link>
    </div>
    </>
  )
}

export default Card