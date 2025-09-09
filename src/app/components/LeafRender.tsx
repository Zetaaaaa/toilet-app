"use client"

        
import dynamic from 'next/dynamic'
import React, { useMemo } from 'react'

function LeafRender() {
    const Map = useMemo(() => dynamic(
    () => import('./LeafMap'),
    { 
      loading: () => <p className='justify-self-center'>A map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <div>
        <Map position={{lat:50.062616, lng:19.941303}} zoom={11} />
    </div>
  )
}

export default LeafRender