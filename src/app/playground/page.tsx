'use client'
import { POST } from '../api/toilets/route'
import Navbar from './components/Navbar'
import { Button } from '@/components/ui/button'


  async function getQuery() {
    const response = await fetch('api/toilets',)
    const result = await response.json()
    console.log(result);
  }

function page() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='font-geograph-web-light-italic'>There&apos;s not much here for now</div>
      <Button onClick={()=>getQuery()}>witam</Button>
      
    </div>

  )
}

export default page