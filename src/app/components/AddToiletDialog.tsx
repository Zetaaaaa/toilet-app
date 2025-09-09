import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
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
import { log } from 'console';
import { Textarea } from '@/components/ui/textarea';

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
              <div className='flex flex-row w-1/1 justify-around gap-10'>
                <Input type='text' onInput={(e)=>setToiletName(e.currentTarget.value)} className='font-geograph-light grow-1' placeholder='Name of the Toilet Point'></Input>
                <Input type='text' onInput={(e)=>{setToiletAddress(e.currentTarget.value)}} className='font-geograph-light grow-2' placeholder='Address'></Input>
              </div>

                <Textarea onInput={(e)=>setToiletDescription(e.currentTarget.value)} placeholder='Write something about the Toilet Point'></Textarea>

                <DialogClose asChild>
                  <Button type="submit" onClick={()=>getData(toiletName,toiletAddress,toiletDescription)} className='justify-self-center w-25'>Confirm</Button>
                </DialogClose>

            </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddToiletDialog