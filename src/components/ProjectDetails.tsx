import React from 'react'
import Text from './Text'

const ProjectDetails = () => {
  return (
    <div className='flex flex-col rounded border-[.125rem] border-t-0 border-black py-4 mx-[5rem] bg-[#ffffff] mt-[-.05rem]'>
        <form className='grid grid-cols-1 items-center justify-center space-y-4 text-center'>
        <Text textForm='Project Details' />
        <textarea
            placeholder='Project Details'
            required
            className='px-4 h-52 my-3 rounded-lg border border-black py-2 mx-3'
            maxLength={2000}
        />
        </form>
    </div>
  )
}

export default ProjectDetails