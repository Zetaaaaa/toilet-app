import React from 'react'
// src/components/Map.tsx

import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import localFont from "next/font/local" 
import styles from "../styles/leafMap.module.css"

interface LeafMapProps{
    position: {
        lat: number,
        lng: number,
        alt?: number
    },
    zoom: number
}

const geograph = localFont({
  src: "../fonts/geograph/geographweblight.ttf",
})

function LeafMap({position,zoom}:LeafMapProps) {

    const pos = position
    const mapZoom = zoom

  return (
        <MapContainer center={position} zoom={zoom} zoomControl={false} attributionControl={false} scrollWheelZoom={'center'} className={styles.leafMap} >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position='bottomright'></ZoomControl>
            <Marker position={position}>
                <Popup>
                    Hey! <br /> {"I'm a marker"}
                </Popup>
            </Marker>
           
        </MapContainer>
    
  )
}

export default LeafMap