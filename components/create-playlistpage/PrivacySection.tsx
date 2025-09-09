"use client";

import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const PrivacySection = ({ register }: any) => {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center justify-between border-streamr/30 p-4 rounded-md gap-2 border-1">
        <div className='flex flex-col gap-1'>
          <Label htmlFor="option-one">Public</Label>
          <p className='text-sm text-muted-foreground'>Anyone can search for and play this playlist.</p>
        </div>
        <RadioGroupItem value="option-one" id="option-one" {...register("privacy")} />
      </div>

      <div className="flex items-center justify-between border-streamr/30 p-4 rounded-md gap-2 border-1">
        <div className='flex flex-col gap-1'>
          <Label htmlFor="option-two">Private</Label>
          <p className='text-sm text-muted-foreground'>Only you can view this playlist.</p>
        </div>
        <RadioGroupItem value="option-two" id="option-two" {...register("privacy")} />
      </div>
    </RadioGroup>
  )
}

export default PrivacySection

