'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function Navbar() {

    const [address, setAddress] = useState('')

    function logAddress(){
        console.log(address);
    }
  return (
    <div className='flex flex-row w-full m-5 '>
        <div className='w-1/2'>
            <Input onInput={(e)=>{
                setAddress(e.currentTarget.value)
            }} className='h-12 inset-shadow-sm  inset-shadow-neutral-900 font-geograph-light' placeholder='Search for a Toilet address'></Input>
        </div>
        <div className='w-1/2 flex flex-row justify-around'>
            <Button className='w-25 h-12 p-5 rounded-lg hover:bg-sky-900 font-geograph-light'>About</Button>
            <Button onClick={
                ()=>logAddress()
            } className='w-25 h-12 p-5 rounded-lg bg-sky-700 hover:bg-neutral-900 font-geograph-light'>Playground</Button>
            <Button className='w-25 h-12 p-5 rounded-lg hover:bg-sky-700 font-geograph-light'>Contact us</Button>
        </div>
        
    </div>
  )
}

export default Navbar