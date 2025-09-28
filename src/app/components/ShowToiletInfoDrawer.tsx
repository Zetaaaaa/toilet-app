import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Separator } from '@radix-ui/react-separator';
import React, { useEffect, useState } from 'react'


interface ToiletPointData{
        id:number,
        address: string,
        latitude:number,
        longitude:number,
        price:number,
        toilet_name:string,
        description?:string
}

interface ToiletInfoProps{
    isOpen: boolean;
    setIsOpen: ()=>void
    toiletData: ToiletPointData
}



function ShowToiletInfoDrawer({isOpen, setIsOpen,toiletData}:ToiletInfoProps) {
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(isOpen)

    useEffect(()=>{
        console.log(toiletData);
        
                setIsDrawerOpen(isOpen)
    },[isOpen])

  return (
   
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger>Open</DrawerTrigger>
        
        <DrawerContent>

            <DrawerHeader>
                <DrawerTitle className='font-geograph-it-bold'>Toilet Point {toiletData.toilet_name}</DrawerTitle>
                <DrawerDescription className='font-geograph-web-light-italic'>
                    Toilet description {toiletData.description}
                </DrawerDescription>
            </DrawerHeader>

            <div className='self-center font-geograph-web-light '>
                  Toilet Price: {toiletData.price}<Separator/>
                    Toilet Id :{toiletData.id} <Separator/>
                    Toilet Latitude: {toiletData.latitude}<Separator/>
                    Toilet Longitude: {toiletData.longitude}<Separator/>

            </div>

            <DrawerFooter>
                <Button className='w-40 self-center' variant='default'>Submit</Button>
                <DrawerClose asChild onClick={()=>setIsOpen()}>
                           <Button className='w-40 self-center' variant='secondary'> close</Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
  )
}

export default ShowToiletInfoDrawer