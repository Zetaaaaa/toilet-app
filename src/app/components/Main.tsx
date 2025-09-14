'use client'
import React, { useEffect, useState } from 'react'
import MapComponent from './MapComponent'
import LeafRender from './LeafRender'
import Navbar from './Navbar'
import Footer from './Footer'
import NavbarNew from './NavbarNew'

function Main() {

  async function fetchMockData() {
      const response = await fetch("api/toilets")
      const result = await response.json()
      // console.log(result);
      
      setMockData(result)
  }

    const [mockData, setMockData]=useState(JSON.parse('{}'))
    const[helpView, setHelpView] = useState(false)
    const [footerVisible, setVisible] = useState(true)
    const [addToilet, setAddToilet] = useState(true)

  useEffect(()=>{

  },[helpView])

  return (
    <div>
        <NavbarNew visible={setVisible}/>
        
        <div>
           {/* <MapComponent></MapComponent> */}
             <LeafRender markerData={mockData}></LeafRender>
        </div>


        {footerVisible?<Footer fetchMockData={fetchMockData}></Footer>:null}
       
    </div>
  )
}

export default Main