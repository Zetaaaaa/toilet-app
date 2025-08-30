"use client"
import React from 'react'
import localFont from 'next/font/local'
import Button from './Button'
import styles from '../styles/navBar.module.css'
import Searchbar from './Searchbar'

const geographlight = localFont({
        src: "../fonts/geograph/geographweblight.ttf",
})
function handleClick(){
      console.log("click");
}
function Navbar() {
  
  return (
      <div className={styles.topBar}>
          <div className={styles.searchBar}>
                <Searchbar font={geographlight} text={"Search for an address of a Toilet Point"}></Searchbar>
               </div>
               <div className={styles.navButtons}>
                <Button font={geographlight} text={"IDK"} click={handleClick}></Button>
                <Button font={geographlight} text={"Options"} click={handleClick}></Button>
               </div>
        </div>
  )
}

export default Navbar
