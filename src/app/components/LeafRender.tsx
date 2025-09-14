"use client"        
import dynamic from 'next/dynamic'
import React, { useMemo } from 'react'


interface ToiletPointData{
        id:number,
        address: string,
        latitude:number,
        longitude:number,
        price:number,
        toilet_name:string,
        description?:string
}

interface LeafRenderProps{
  markerData: ToiletPointData[]
}

function LeafRender({markerData}:LeafRenderProps) {
    const Map = useMemo(() => dynamic(
    () => import('./LeafMap'),
    { 
      loading: () => <p className='justify-self-center'>A map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <div>
        <Map markerData={markerData} position={{lat:50.062616, lng:19.941303}} zoom={3} />
    </div>
  )
}

export default LeafRender