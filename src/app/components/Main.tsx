'use client'
import React, { useEffect, useState } from 'react'
import MapComponent from './MapComponent'
import LeafRender from './LeafRender'
import Navbar from './Navbar'
import Footer from './Footer'
import NavbarNew from './NavbarNew'
// import Popup from './Popup'


function Main() {

    const[helpView, setHelpView] = useState(false)
    const [footerVisible, setVisible] = useState(false)

  useEffect(()=>{

  },[helpView])

  return (
    <div >
        <NavbarNew visible={setVisible}/>

        {/* <div className={styles.footer}>
          <Footer/>
        </div> */}
        
        <div>
           {/* <MapComponent></MapComponent> */}
             <LeafRender></LeafRender>
        </div>

        {footerVisible?<Footer></Footer>:null}
       
    </div>
  )
}

export default Main