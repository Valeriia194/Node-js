import React from "react";
import s from "./banner.module.scss";

interface Props {
  title: string;
  description: string;
  reverseProps: any;
}

const banner = ({ title, description, reverseProps }: Props) => {
  return (
    <>
      <div className={s.banner}>
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={reverseProps("test")}>Click On</button>
      </div>
    </>
  );
};

export default banner;