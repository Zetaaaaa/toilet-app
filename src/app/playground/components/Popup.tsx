'use client'
import React from 'react'
import styles from '../styles/popupStyles.module.css'
import { error } from 'console';

function Popup() {
   async function sendToiletInfo(){
        console.log("submit");

        //validate input logic here !!!


        //create fetchData here:
        const fetchData =  JSON.stringify({
            test1:"abc",
            test2:"abc",
            test3:"abc"
          })

        const response = await fetch('http://123.223.111.1:3000/addToilets', {
          method: "POST",
          body: fetchData,
          headers:{
            "Content-Type": "application/json",
          }
        })

        if(!response.ok){
          throw new Error(`Fetch failed: ${response.status} `)
        }
        
        
    }
  return (
    //adding marker going to be done from map click
    <div className={styles.container}>

        <form action="/addToilets" method='POST' onSubmit={(e)=>{
            e.preventDefault()
            sendToiletInfo()
        }} >
        <input type='submit'/>
        </form>
    </div>
  )
}

export default Popup