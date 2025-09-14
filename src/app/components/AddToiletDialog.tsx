import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Wallet,CircleQuestionMark, MapPinHouse, Toilet, NotebookText } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from '@/components/ui/label'
import OpenTimesPopover from './OpenTimesPopover'
interface FormProps{
  getData:(Name:string,Address:string, Description:string)=>void;
}

function AddToiletDialog({getData}:FormProps) {

  const[toiletAddress , setToiletAddress] = useState("")
  const[toiletName, setToiletName] = useState("")
  const[toiletDescription, setToiletDescription] = useState("")
  return (
    <div>
        <Dialog>
            <DialogTrigger asChild>
                <Button className='w-25 h-12 p-5 rounded-lg bg-sky-600 hover:bg-sky-500 font-geograph-light'>Add Toilet</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className='font-geograph-light'> Add Toilet Point</DialogTitle>
                <DialogDescription className='font-geograph-light-italic'> You can add toilet point here - <span className='font-geograph-it-bold text-neutral-900 '>must be logged in to do that! </span></DialogDescription>
              </DialogHeader>
              <Separator className='bg-indigo-200'/>
              <div className='flex flex-row w-1/1 justify-around gap-10'>
              <div className='grow-1'>
                <Toilet className='absolute h-9 left-9'></Toilet>
                <Input type='text' onInput={(e)=>setToiletName(e.currentTarget.value)} className='font-geograph-light-bold grow-1 pl-10' placeholder='Name of the Toilet Point'></Input>

              </div>
              <div className='grow-1'>
                <MapPinHouse className='absolute h-9 left-71'></MapPinHouse>
                <Input type='text' onInput={(e)=>{setToiletAddress(e.currentTarget.value)}} className='font-geograph-light-bold pl-10' placeholder='Address'></Input>
              </div>
             
              </div>
              <div className='flex flex-row w-1/1 justify-around gap-10'>

                <div className='grow-1'>
                  <Wallet className='absolute h-9 left-9'></Wallet>
                  <Input type='text' placeholder='Price' className='font-geograph-light-bold pl-10'></Input>  
                </div>
                <div className='grow-1'>
                  <CircleQuestionMark className='absolute h-9 left-71'></CircleQuestionMark>
                  <Input type='text' placeholder='Placeholder' className='font-geograph-light-bold pl-10'></Input>
                </div>
              </div>
                
                <div>
                  <NotebookText className='absolute h-10 left-9'></NotebookText>
                  <Textarea onInput={(e)=>setToiletDescription(e.currentTarget.value)} className='font-geograph-light-bold pl-10' placeholder='Write something about the Toilet Point...'></Textarea>
                </div>
                  <Separator className='bg-indigo-200'/>
                <div>
                  <DialogDescription className='font-geograph-light-italic mb-2'>Add opening hours: </DialogDescription>
                   
                  <div className='flex flex-row h-10 justify-around'>
                          <OpenTimesPopover day='Monday'></OpenTimesPopover>
                            <Separator className='bg-indigo-300' orientation='vertical'/>
                          <OpenTimesPopover day='Tuesday'></OpenTimesPopover>
                            <Separator className='bg-indigo-300' orientation='vertical'/>
                          <OpenTimesPopover day='Wedensday'></OpenTimesPopover>
                            <Separator className='bg-indigo-300' orientation='vertical'/>
                          <OpenTimesPopover day='Thursday'></OpenTimesPopover>
                            <Separator className='bg-indigo-300' orientation='vertical'/>
                          <OpenTimesPopover day='Friday'></OpenTimesPopover>
                            <Separator className='bg-indigo-300' orientation='vertical'/>
                          <OpenTimesPopover day='Saturday'></OpenTimesPopover>
                            <Separator className='bg-indigo-300' orientation='vertical'/>
                          <OpenTimesPopover day='Sunday'></OpenTimesPopover>
                  </div>
                </div>
               

                <DialogClose asChild>
                  <Button type="submit" onClick={()=>getData(toiletName,toiletAddress,toiletDescription)} className='justify-self-center w-25'>Confirm</Button>
                </DialogClose>

            </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddToiletDialog