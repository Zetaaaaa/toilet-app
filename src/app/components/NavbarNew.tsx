'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import AddToiletDialog from './AddToiletDialog'
import { SearchIcon } from 'lucide-react'
interface NavbarProps{
    visible:(text:boolean)=>void;
}

function Navbar({visible}:NavbarProps) {

    const router  = useRouter() 
    const path = usePathname()

    const [address, setAddress] = useState('')
      function handleClick(route:string){
            
            // setRoute(route)
            router.push(route.split(' ')[0].toLocaleLowerCase())
      }

   

    function logAddress(){
        console.log(address.length);
    }

    function addToilet(){
        console.log("Add Toilet");
        alert("Add Toilet")   
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
                if(e.currentTarget.value.length >0){
                    visible(true)
                }
                else{
                    visible(false)
                }
                
            }} className='h-12 pl-10 inset-shadow-sm bg-white hover:ring-blue-500 inset-shadow-neutral-500 font-geograph-light' placeholder='Search for a Toilet address'></Input>
        </div>
        <div className='w-1/2 flex flex-row justify-around'>
            <Button onClick={()=>handleClick('/about')} className='w-25 h-12 p-5 rounded-lg bg-sky-600 hover:bg-sky-500 font-geograph-light'>About</Button>
            {/* <Button onClick={()=>addToilet()} className='w-25 h-12 p-5 rounded-lg bg-sky-600 hover:bg-sky-500 font-geograph-light'>Add Toilet</Button> */}
            <AddToiletDialog getData={getDialogData}></AddToiletDialog>
            <Button onClick={()=>handleClick('/playground')} className='w-25 h-12 p-5 rounded-lg bg-sky-600 hover:bg-sky-500 font-geograph-light'>Playground</Button>
            <Button onClick={()=>handleClick('/contact')} className='w-25 h-12 p-5 rounded-lg bg-sky-600 hover:bg-sky-500 font-geograph-light'>Contact us</Button>
        </div>
        
    </div>
  )
}

export default Navbar