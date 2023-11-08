import React from "react";
import s from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className={s.header}></header>
      <ul>
        <li>
          <a href={`/`}>Home</a>
        </li>
        <li>
          <a href={`/about`}>About</a>
        </li>
        <li>
          <a href={`/products`}>Products</a>
        </li>
      </ul>
    </>
  );
};

export default Header;
