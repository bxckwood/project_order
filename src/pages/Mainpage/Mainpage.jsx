import React from "react";
import Box from "../../components/box/box";
import "./Mainpage.css";
import bag from "./bag.png"

export default function Mainpage() {
  return (
    <>
      <div className="mainpage"> 
        <Box imageUrl={bag} text={"Пополнение AliPay/Wechat"}/>
        <Box imageUrl={bag} text={"Пополнение AliPay/Wechat"}/>
        <Box imageUrl={bag} text={"Пополнение AliPay/Wechat"}/>
        <Box imageUrl={bag} text={"Пополнение AliPay/Wechat"}/>
        <Box imageUrl={bag} text={"Пополнение AliPay/Wechat"}/>
        <Box imageUrl={bag} text={"Пополнение AliPay/Wechat"}/>
      </div>
    </>
  );
}
