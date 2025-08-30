import dynamic from 'next/dynamic'
import React, { useMemo } from 'react'

function LeafRender() {
    const Map = useMemo(() => dynamic(
    () => import('./LeafMap'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <div>
        <Map position={{lat:50.062616, lng:19.941303}} zoom={6} />
    </div>
  )
}

export default LeafRender