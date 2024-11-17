import React from "react";
import style from "./Banner.module.css";

export function Banner() {
  return (
    <div className={style.banner}>
      <img src="/image/banner.png" alt="Banner" />
    </div>
  );
}
