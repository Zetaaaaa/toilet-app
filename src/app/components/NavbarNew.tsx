'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import AddToiletDialog from './AddToiletDialog'
import { SearchIcon } from 'lucide-react'

function Navbar() {

    const router  = useRouter() 
    const path = usePathname()

    const [address, setAddress] = useState('')
    const[loggedIn, setLoggedIn] = useState()

    function setRoute(route:string){
            
        // setRoute(route)
        // console.log(route);
        console.log(route.split(' ')[0].toLocaleLowerCase());
        
    
        // router.push(route.split(' ')[0].toLocaleLowerCase())
        router.push(route)
    }

    function logAddress(){
        console.log(address.length);
    }

    function getDialogData(Name:string, Address:string,Description:string){
        console.log(`Name: ${Name}`);
        console.log(`Address ${Address}`);
        console.log(`Description ${Description}`);


        const jsonFetchData ={
            Name: Name,
            Address: Address,
            Description: Description
        }
        console.log(jsonFetchData);
        
    }

  return (
    <div className='flex flex-row w-full p-5 bg-transparent absolute z-2'>
        <div className='w-1/2'>
        <div className='bg-sky-900'> <SearchIcon className='absolute h-12 left-8' /></div>
        
            <Input onInput={(e)=>{
                console.log('input');
                setAddress(e.currentTarget.value)
            }} className='h-12 pl-10 inset-shadow-sm bg-white hover:ring-blue-500 inset-shadow-neutral-500 font-geograph-light' placeholder='Search for a Toilet address'></Input>
        </div>
        <div className='w-1/2 flex flex-row justify-around'>
            <Button onClick={()=>setRoute('/about')} className='w-25 h-12 p-5 rounded-lg bg-sky-600 hover:bg-sky-500 font-geograph-light'>About</Button>
            {/* <Button onClick={()=>addToilet()} className='w-25 h-12 p-5 rounded-lg bg-sky-600 hover:bg-sky-500 font-geograph-light'>Add Toilet</Button> */}
            <AddToiletDialog text={"Add toilet"} getData={getDialogData}></AddToiletDialog>
            <Button onClick={()=>setRoute('/playground')} className='w-25 h-12 p-5 rounded-lg bg-sky-600 hover:bg-sky-500 font-geograph-light'>Playground</Button>
 
            {loggedIn?
                <>
                <Button onClick={()=>setRoute('/contact')} className='w-25 h-12 p-5 rounded-lg bg-sky-600 hover:bg-sky-500 font-geograph-light'>Contact us</Button>
                <Button className='w-25 h-12 p-5 rounded-lg bg-sky-600 hover:bg-sky-500 font-geograph-light'> My account</Button>
                </>
                :
                <Button onClick={()=>setRoute('/login')} className='w-25 h-12 p-5 rounded-lg bg-sky-600 hover:bg-sky-500 font-geograph-light'>Log in</Button>}
        </div>
        
    </div>
  )
}

export default Navbar