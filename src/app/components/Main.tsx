'use client'
import React, { useEffect, useState } from 'react'
import MapComponent from './MapComponent'
import LeafRender from './LeafRender'
import Navbar from './Navbar'
import Footer from './Footer'
import NavbarNew from './NavbarNew'



function Main() {

    const[helpView, setHelpView] = useState(false)
    const [footerVisible, setVisible] = useState(false)
    const [addToilet, setAddToilet] = useState(true)

  useEffect(()=>{

  },[helpView])

  return (
    <div>
        <NavbarNew visible={setVisible}/>
        
        <div>
           {/* <MapComponent></MapComponent> */}
             <LeafRender></LeafRender>
        </div>


        {footerVisible?<Footer></Footer>:null}
       
    </div>
  )
}

export default Main