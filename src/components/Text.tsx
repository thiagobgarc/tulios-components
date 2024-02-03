import React from 'react'

const Text: React.FC<{textForm: string}> = ({textForm}) => {
  return (
    <div className='text-xl font-bold text-center'>
        {textForm}
    </div>
  )
}

export default Text