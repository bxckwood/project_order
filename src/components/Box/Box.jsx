import React from 'react'
import "./Box.css";

export default function Box({ imageUrl, text }) {
  return (
    <div className='box'>
      <img src={imageUrl} className='box_photo'/>
      <p className='box_text'>{text}</p>
    </div>
  )
}
