import React from 'react'
import { CheckBadgeIcon } from '@heroicons/react/16/solid'
import Text from './Text'

const PaintForm = () => {
    const [ isPainted, setIsPainted ] = React.useState(false)

    const handlePaint = () => {
        setIsPainted(!isPainted)
    }


  return (
    <div className='flex flex-col rounded border-t-[.01rem] border-[.125rem] border-black py-4 mx-[5rem] bg-[#ffffff]'>

        <Text textForm='What type of paint job do you want?' />

        <form className='grid grid-cols-3 items-center justify-center mt-5 text-center shadow-slate-500'>
            <label>
            <input
                type='checkbox'
                name='Exterior'
                onChange={handlePaint}
                checked={isPainted}
                required
                className='w-4 h-4'
                
            />
            Exterior
            </label>
            {isPainted && <CheckBadgeIcon className='w-6 h-6 text-blue-500' />}

            <label>
            <input
                type='checkbox'
                name='Exterior'
                onChange={handlePaint}
                checked={isPainted}
                required
                className='w-4 h-4 border border-gray-500 rounded bg-gray-50 focus:ring-3  dark:focus:ring-blue-600 dark:ring-offset-gray-800 px-7 py-5 text-black'
                
            />
            Interior
            </label>
            {isPainted && <CheckBadgeIcon className='w-8 h-6 text-blue-500' />}

            <label>
            <input
                type='checkbox'
                name='Exterior'
                onChange={handlePaint}
                checked={isPainted}
                required
                className='w-4 h-4 border border-gray-500 rounded bg-gray-50 focus:ring-3  dark:focus:ring-blue-600 dark:ring-offset-gray-800 px-7 py-5 text-black'
                
            />
            Both
            </label>
            {isPainted && <CheckBadgeIcon className='w-8 h-6 text-blue-500' />}
        </form>
    </div>
  )
}

export default PaintForm