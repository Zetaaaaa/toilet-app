"use client"
import React, { useEffect, useState } from 'react'
import localFont from 'next/font/local'
import { Button } from '@/components/ui/button'
import styles from '../styles/footerStyles.module.css'
import { popup } from 'leaflet'

const font = localFont({
        src: "../fonts/geograph/geographweblight.ttf",
})

interface footerProps{
  fetchMockData: ()=>void;
}

function Footer({fetchMockData}:footerProps) {
    function search(){
      console.log("Witam");
    }
  
  return (
    <div className='flex flex-row justify-center font-geograph-web-light-italic bottom-2 align-center w-1/1 h-1/20 absolute z-2'>
       <Button onClick={()=>{
        fetchMockData()
        }}>Fetch mock data</Button>
    </div>
  
  )
}

export default Footer