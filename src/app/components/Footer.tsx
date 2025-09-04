"use client"
import React, { useEffect, useState } from 'react'
import localFont from 'next/font/local'
import Button from './Button'
import styles from '../styles/footerStyles.module.css'
import { popup } from 'leaflet'

const font = localFont({
        src: "../fonts/geograph/geographweblight.ttf",
})

function addToilet(){
   console.log("add toilet");
}

function Footer() {
      const[popup ,setPopup] = useState(false)

      useEffect(()=>{
        if(popup){
          addToilet()
        }
      },[popup])

  function openForm(){
     
      setPopup(true)
  }
  
  return (
    <div className={styles.container}>
       <Button font={font} text="Add toilet" click={openForm} btWidth='20vw'></Button>
    </div>
  
  )
}

export default Footer