"use client"
import React, { useEffect, useState } from 'react'
import localFont from 'next/font/local'
import { Button } from '@/components/ui/button'
import styles from '../styles/footerStyles.module.css'
import { popup } from 'leaflet'

const font = localFont({
        src: "../fonts/geograph/geographweblight.ttf",
})

function addToilet(){
   console.log("add toilet");
}

function Footer() {
    function search(){
      console.log("Witam");
    }
  
  return (
    <div className='flex flex-row justify-center font-geograph-light-italic bottom-2 align-center w-1/1 h-1/20 absolute z-2'>
       <Button onClick={search}>Search</Button>
    </div>
  
  )
}

export default Footer