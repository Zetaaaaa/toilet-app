"use client"
import React, { useEffect, useRef } from "react";
import styles from "../styles/mapComponent.module.css"
import localFont from "next/font/local" 
import { Loader } from "@googlemaps/js-api-loader"


const geograph = localFont({
  src: "../fonts/geograph/geographweblight.ttf",
})


function MapComponent() {
  const mapRef  = React.useRef<HTMLDivElement>(null)
  useEffect(()=>{
    const initMap = async ()=>{
      
      console.log("init");
      
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version : "weekly"
      })

      const { Map } = await loader.importLibrary('maps')
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
      
      
      const position = {
        lat: 50.0760055,
        lng: 19.9600629
      }

       const position2 = {
        lat: 50.0760055,
        lng: 19.9700629
      }

      //map options
      const mapOptions : google.maps.MapOptions = {
          center: position,
          zoom: 17,
          mapId:  "TOILETPOINT_MAP",
          colorScheme:"dark",
          fullscreenControl: false,
          mapTypeControl:false
      }

    
      //Set up Map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

      const marker = new AdvancedMarkerElement({
        map,
        position: position2,
        title:"witam",
  
      });

    }
    initMap()
  },[])

  return (
   <div className={`${styles.MapComponent} ${geograph.className}`}>
        <div style={mapStyles} ref={mapRef}/>
    </div>
  )
}

export default MapComponent

const mapStyles = {
      width: "100vw",
      height: "100vh",
}