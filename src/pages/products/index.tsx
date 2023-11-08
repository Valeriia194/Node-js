import React, { useEffect, useState } from 'react'
//styles
import s from "./products.module.scss"
import { Product } from '@/interfaces';

import Card from '@/components/productCard';


const getAllProducts = async () => {
  return await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((json) => {
      return json;
    });
}

const Products = () => {
  const [products, setProducts] = useState<{}[] | null>(null)
  useEffect(() => {
    getAllProducts().then((data: Product[]) => setProducts(data));
  }, []);
  return (
    <>
      <div className={s.products}>Products</div>
      {
        products ? (
          products.map((product: Product) => {
        return <Card key={product.id} data={product} />}
      )
        ) : (<div>Products Loading...</div>)}
    </>
  )
}

export default Products