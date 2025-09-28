import React from 'react'
import styles from "../styles/buttonStyles.module.css"
import { NextFont } from 'next/dist/compiled/@next/font';



//WHAT ARE INTERFACES AND TYPES
interface ButtonProps {
  font: NextFont;
  text: string;
  btWidth?: string;
  click: (text:string) => void;
}
function Button({font,text,btWidth,click}:ButtonProps) {
  return (
    <div className={`${styles.navButton} ${font.className}`}
    // if btWidth is a prop overwrite module.css style
    style={(btWidth != undefined)?{width:`${btWidth}`}:{}}
   
    onClick={()=>click(text)}>
        <p>{text}</p>
    </div>

  )
}

export default Button