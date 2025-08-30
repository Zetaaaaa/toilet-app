"use client"
import React from 'react'
import Searchbar from './Searchbar'
import MapComponent from './MapComponent'
import styles from '../styles/mainStyles.module.css'
import Button from './Button'
import localFont from 'next/font/local'
import LeafRender from './LeafRender'

 const geographlight = localFont({
    src: "../fonts/geograph/geographweblight.ttf",
  })

function main() {

  function handleClick(){
    console.log("click");
  }


  return (
    <div className={styles.body}>

        <div className={styles.topBar}>
          <div className={styles.searchBar}>
                <Searchbar font={geographlight} text={"Search for an address of a Toilet Point"}></Searchbar>
               </div>
               <div className={styles.navButtons}>
                <Button font={geographlight} text={"IDK"} click={handleClick}></Button>
                <Button font={geographlight} text={"Options"} click={handleClick}></Button>
               </div>
        </div>

        <div className={styles.mapComponent}>
           {/* <MapComponent></MapComponent> */}
             <LeafRender></LeafRender>
        </div>
      
      
         

    </div>
  )
}

export default main