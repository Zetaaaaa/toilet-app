'use client'
import React, { useEffect, useState } from 'react'
import MapComponent from './MapComponent'
import styles from '../styles/mainStyles.module.css'
import LeafRender from './LeafRender'
import Navbar from './Navbar'
import Footer from './Footer'
import Popup from './Popup'


function Main() {

  const[helpView, setHelpView] = useState(false)

  useEffect(()=>{

  },[helpView])

  return (
    <div className={styles.container}>
        <Navbar/>

        {/* <div className={styles.footer}>
          <Footer/>
        </div> */}

        {(helpView)? (<Popup/>): (null)}
       
       
      
        <div className={styles.mapComponent}>
           {/* <MapComponent></MapComponent> */}
             <LeafRender></LeafRender>
        </div>
       
         <Footer/>
    </div>
  )
}

export default Main