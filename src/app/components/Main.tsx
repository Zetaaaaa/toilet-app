'use client'
import React, { useEffect, useState } from 'react'
import MapComponent from './MapComponent'
import LeafRender from './LeafRender'
import Navbar from '../old components/Navbar'
import Footer from './Footer'
import NavbarNew from './NavbarNew'

function Main() {

  async function fetchMockData() {
      const response = await fetch("api/toilets")
      if(response.ok){
        const result = await response.json()
        // console.log(result);
        setMockData(result)
        setVisible(false)
      }
      

  }

    const [mockData, setMockData]=useState(JSON.parse('{}'))
    const[helpView, setHelpView] = useState(false)
    const [footerVisible, setVisible] = useState(true)
    const [addToilet, setAddToilet] = useState(true)

  useEffect(()=>{

  },[helpView])

  return (
    <div>
        <NavbarNew />
        
        <div>
           {/* <MapComponent></MapComponent> */}
             <LeafRender markerData={mockData}></LeafRender>
        </div>


        {footerVisible?<Footer fetchMockData={fetchMockData}></Footer>:null}
       
    </div>
  )
}

export default Main