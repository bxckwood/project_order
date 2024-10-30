import React from "react";
import Box from "../../components/Box/Box";
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
