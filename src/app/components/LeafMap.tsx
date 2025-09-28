import React, { ReactElement, useEffect, useState } from 'react'
// src/components/Map.tsx
import { MapContainer, Marker, Popup, TileLayer, useMapEvents, ZoomControl } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import styles from "../styles/leafMap.module.css"
import L from "leaflet";
import ShowToiletInfoDrawer from './ShowToiletInfoDrawer'

type Position = {
  lat: number;
  lng: number;
  alt?: number;
  address?:string //temporary field going to be replaced by onclick layout
};

interface ToiletPointData{
        id:number,
        address: string,
        latitude:number,
        longitude:number,
        price:number,
        toilet_name:string,
        description?:string
}

interface LeafMapProps{
    position: Position
    zoom: number
    markerData: ToiletPointData[]
}


function LeafMap({position,zoom,markerData}:LeafMapProps) {

    const [pos, setPos] = useState<[number, number] | null>(null);
    const[marks, setMarks]= useState<ToiletPointData[]>([])
    const[isDrawerOpen,setisDrawerOpen]= useState(false)
    const [toiletData, setToiletData] = useState<ToiletPointData>({id:0,
        address: "null",
        latitude:0,
        longitude:0,
        price: 0,
        toilet_name:"null",
        description:"null"
    })

     function openDrawer(data:ToiletPointData){
        // console.log("click");
        setToiletData(data)
        setisDrawerOpen(!isDrawerOpen)
    }

    useEffect(()=>{
        console.log("Changed");

       console.log(markerData.length);
       
       if(markerData.length>0){
        const markerArr:ToiletPointData[]=[]
            for(const index in markerData){
                markerArr.push({
                    id: markerData[index].id,
                    toilet_name: markerData[index].toilet_name,
                    price: markerData[index].price,
                    address: markerData[index].address,
                    latitude: markerData[index].latitude,
                    longitude: markerData[index].longitude,
                    description: markerData[index].description
                   
                
                })
            }
            setMarks(markerArr)
        }
    },[markerData])

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

        return (<></>)
//        return (
//             pos && (
//                 <Marker
//                 key={`${pos[0]}-${pos[1]}`} // safer unique key
//                 position={pos}
//                 interactive={true}
//                 >
//                 <Popup>
//                     <p>Marker</p>
//                 </Popup>
//                 </Marker>
//             )
// );
    }

    function setIsOpen(){
        setisDrawerOpen(false)
    }


  return (
        <MapContainer center={position} zoom={zoom} worldCopyJump={true} zoomControl={false} attributionControl={false}  scrollWheelZoom={'center'} className={styles.leafMap} >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* zoom controls <ZoomControl position='bottomright'></ZoomControl> */}
            
            Mapping functionality
            {marks.map((marker,i)=>(<Marker key={i} eventHandlers={{

                click: () =>{
                    // console.log("click"); 
                    const data = {
                        id:marker.id,
                        address: marker.address,
                        latitude:marker.latitude,
                        longitude: marker.longitude,
                        price: marker.price,
                        toilet_name: marker.toilet_name,
                        description: marker.description
                    }
                    openDrawer(data)
                }
            }} position={
                {
                    lat:marker.latitude,
                    lng:marker.longitude
                }}>

                 {/* <Popup>
                    {coords.text}<br/>
                    <p>Lat: {coords.lat}</p> 
                    <p>Lng: {coords.lng}</p>
                </Popup>    */}
            </Marker>))}
            <MapClicks/>

            <ShowToiletInfoDrawer isOpen={isDrawerOpen} setIsOpen={setIsOpen} toiletData={toiletData}></ShowToiletInfoDrawer>

        
        </MapContainer>
    
  )
}

export default LeafMap