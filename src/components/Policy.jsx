import React from 'react'
import { ArrowLongUpIcon, ArrowLongDownIcon } from '@heroicons/react/24/outline';

const Policy = () => {
  return (
    <div className='flex p-20 text-indigo-950 pb-10 sm:flex-row'>
    <div className='flex flex-col gap-3'>
      <h3 className='flex'><ArrowLongUpIcon class="h-6 w-6" />Upgrade Policy</h3>
      <p>If you upgrade to a higher plan, you are charged the difference between your current plan and the new one.</p>
    </div>
    <div className='flex flex-col gap-3'>
      <h3 className='flex'><ArrowLongDownIcon className='h-6 w-6' /> Downgrade Policy</h3>
      <p>If you downgrade to a lesser plan, all your responses that exceed plan limits are safe until you return to the higher plan.</p>
    </div>
  </div>
  )
}

export default Policy