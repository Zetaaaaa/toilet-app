import React, { ReactElement } from 'react'
// src/components/Map.tsx

import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import localFont from "next/font/local" 
import styles from "../styles/leafMap.module.css"
import { randomInt } from 'crypto'

type Position = {
  lat: number;
  lng: number;
  alt?: number;
  text?:string //temporary field going to be replaced by onclick layout
};

interface LeafMapProps{
    position: Position
    zoom: number
}


const geograph = localFont({
  src: "../fonts/geograph/geographweblight.ttf",
})

//temporary functions to test functionalities
    function randNum(max:number){
        return Math.floor(Math.random() * max)
    }

    function randLat():number{
        return(50+ Math.random()*0.1)
    }
    function randLng():number{
        return(19.89+ Math.random()*0.11)
    }

     function randomMarkers():Position[]{
        const markersArr : Position[] = []
        for(let i=0;i<=randNum(100);i++){
            markersArr.push(
                {
                    lat:randLat(),
                    lng:randLng(),
                    text: "Marker: "+(i+1)
                })
        }

        return markersArr
    }

    const markers : Position[] = [
        {
            lat: 50.062616, lng: 19.941303,text:"Marker 1" 
        },  
        {
            lat:50.072616,lng:19.971303,text:"Marker 2" 
        },
        {
            lat:50.042616,lng:19.921303,text:"Marker 3" 
        },
        {
            lat:50.092616,lng:19.141303,text:"Marker 4" 
        },
        {
            lat:50.102616,lng:19.831303,text:"Marker 5" 
        }
    ]

   

function LeafMap({position,zoom}:LeafMapProps) {

  
    const arr :Position[] = randomMarkers()

  return (
        <MapContainer center={position} zoom={zoom} zoomControl={false} attributionControl={false} scrollWheelZoom={'center'} className={styles.leafMap} >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position='bottomright'></ZoomControl>
            
            {/* Mapping functionality */}
            {arr.map((coords,i)=>(<Marker key={i} position={coords}>
                 <Popup>
                    {coords.text}<br/>
                    <p>Lat: {coords.lat}</p> 
                    <p>Lng: {coords.lng}</p>
                </Popup>
            </Marker>))}

           
        </MapContainer>
    
  )
}

export default LeafMap