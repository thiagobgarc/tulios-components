import React from 'react'
import Text from './Text'

const ContactInformation = () => {
  return (
    <div className='flex flex-col rounded border-b-[.01rem] border-[.125rem] border-black py-4 mx-[5rem] bg-[#ffffff] mt-7'>

        <Text textForm='Contact Information' />

        <form className='grid grid-cols-1 items-center justify-center mt-3 text-center space-y-4'>
            <input
                type='text'
                placeholder='First and Last Name'
                required
                className='py-2 px-4 border-2 border-black mx-3 rounded'
                maxLength={50}
            />
            <input
                type='text'
                placeholder='Email'
                required
                className='py-2 px-4 border-2 border-black mx-3 rounded'
                maxLength={50}
            />
            <input
                type='text'
                placeholder='Phone'
                required
                className='py-2 px-4 border-2 border-black mx-3 rounded'
                maxLength={20}
            />
        </form>
    </div>
  )
}

export default ContactInformation