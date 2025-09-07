import React, { ReactElement, useEffect, useState } from 'react'
// src/components/Map.tsx

import { MapContainer, Marker, Popup, TileLayer, useMapEvents, ZoomControl } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import localFont from "next/font/local" 
import styles from "../styles/leafMap.module.css"
import L from "leaflet";

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

    const[pos, setPos]= useState<[number, number]>([0,0])
    const[marks, setMarks]= useState<Position[]>([])

    useEffect(()=>{
    setMarks(randomMarkers())

    },[])
    
    
    function MapClicks(){
  
        const map = useMapEvents({
            click(e) {
                console.log("Clicked at:", e.latlng);

                //Add only ONE marker changing every map click (state changes,the marker also)
                    // setPos([e.latlng.lat,e.latlng.lng]);
                
                //add it permanently to rest of the markers but tbh i don't need it
                        const popup = L.popup().setContent("popup")
                        L.marker(e.latlng)
                            .bindPopup(popup)
                            .addTo(map)
                    },
        });
        return (
                    pos ? 
                        <Marker           
                        key={pos[0]}
                        position={pos}
                        interactive={true} >
                            <Popup><p>Marker</p></Popup>
                        </Marker>
                    : null
                )  
    }


  return (
        <MapContainer center={position} zoom={zoom} zoomControl={false} attributionControl={false}  scrollWheelZoom={'center'} className={styles.leafMap} >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* zoom controls <ZoomControl position='bottomright'></ZoomControl> */}
            
            {/* Mapping functionality */}
            {marks.map((coords,i)=>(<Marker key={i} position={coords}>
                 <Popup>
                    {coords.text}<br/>
                    <p>Lat: {coords.lat}</p> 
                    <p>Lng: {coords.lng}</p>
                </Popup>   
            </Marker>))}
            <MapClicks/>

            
           
        </MapContainer>
    
  )
}

export default LeafMap