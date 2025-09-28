import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import React from 'react'

interface PopoverTimeProps{
    day:string;
}


function OpenTimesPopover({day}:PopoverTimeProps) {
  return (
    <Popover>
        <PopoverTrigger asChild>
          <Button className='bg-sky-500' variant="default">{day.slice(0, 3)}</Button>
        </PopoverTrigger>
          <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium font-geograph-web-light">Opening hours - {day}</h4>
            <p className="text-muted-foreground text-sm font-geograph-web-light-italic">
              Set the opening time for {day}
            </p>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label className='font-geograph-web-light' htmlFor='time-open'>Opening time</Label>
                  <Input
                  type="time"
                  id="time-open"
                  step="1"
                  defaultValue="10:30:00"
                  className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
                  <Label className='font-geograph-web-light' htmlFor='time-close'>Closing time</Label>
                  <Input
                  type="time"
                  id="time-close"
                  step="1"
                  defaultValue="10:30:00"
                  className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
                {/* add + icon here */}
                <Button className='col-span-2'>Add Breaks during work hours</Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default OpenTimesPopover