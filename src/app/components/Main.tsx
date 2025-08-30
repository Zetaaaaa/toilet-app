import React from 'react'
import MapComponent from './MapComponent'
import styles from '../styles/mainStyles.module.css'
import LeafRender from './LeafRender'
import Navbar from './Navbar'


function main() {

  return (
    <div className={styles.body}>
        <Navbar/>
        <div className={styles.mapComponent}>
           {/* <MapComponent></MapComponent> */}
             <LeafRender></LeafRender>
        </div>
    </div>
  )
}

export default main