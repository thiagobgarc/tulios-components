import React from 'react'
import Text from './Text'

const ScheduleEstimate = () => {
  return (
    <div className='flex flex-col rounded border-[.125rem] border-black py-4 mx-[5rem] bg-[#ffffff] mt-[-.05rem]'>

        <Text textForm='Schedule Estimate' />

        <form className='grid grid-cols-1 items-center justify-center mt-5 text-center space-y-4'>
            <label>What type of appointment will this be?</label>
            <label className='flex flex-row items-center justify-center'>
                <input
                    type='checkbox'
                    name='Onsite'
                    className='w-4 h-4'
                />
                Onsite
            </label>
            <label>
                <input
                    type='checkbox'
                    name='Virtual'
                    
                />
                Virtual
            </label>
            <label>Select your preferred date and time</label>
            <div className='space-x-2'>
                <label>
                    date:
                </label>
            <input
                type='date'
                required
                className='w-64 h-10 border-2 border-black rounded'
            /> 
            
            </div>
            <div className='space-x-2'>
            <label>
                time:
            </label>
            <input
                type='time'
                required
                className='w-64 h-10 border-2 border-black rounded'
            />
            
            </div>
        </form>
    </div>
  )
}

export default ScheduleEstimate