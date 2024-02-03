import React from 'react'
import Text from './Text'

const PropertyPaint = () => {
    const [ property, setProperty ] = React.useState(false)

    const handlePaint = () => {
        setProperty(!property)
    }

    
  return (
    <div className='flex flex-col rounded border-[.125rem] border-black border-b-0  py-4 mx-[5rem] mt-[5rem] bg-[#ffffff]'>
        <Text textForm='What type of propery needs painting?' />
        <form className='grid grid-cols-2 items-center justify-center mt-5 text-center'>
            <label>
            <input
                type='checkbox'
                name='Residential'
                className='w-4 h-4'
                required
                onChange={handlePaint}
                checked={property}
            />
            Residential 
            </label>
            <label>
            <input
                type='checkbox'
                name='Commericial'
                className='w-4 h-4'
                required
                onChange={handlePaint}
                checked={property}
            />
            Commercial
            </label>
        </form>
    </div>
  )
}

export default PropertyPaint