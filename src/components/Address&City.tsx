import React from 'react'
import Text from './Text'

const AddressCity = () => {
    const [ selectState, setSelectState ] = React.useState<string>('')

    const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectState(event.target.value)
    }


  return (
    <div className='flex flex-col rounded border-[.125rem] border-black py-4 mx-[5rem] bg-[#ffffff]
    border-t-[.01rem]'>

        <Text textForm='Address & City' />

        <form className='flex flex-col items-center justify-center mt-5 text-center shadow-slate-500 space-y-4'>
            <input
                type='text'
                placeholder='Address 1'
                required
                className='py-2 px-4 border-2 border-black mx-3 rounded'
                maxLength={50}
            />
            <input
                type='text'
                placeholder='Address 2'
                required
                className='py-2 px-4 border-2 border-black mx-3 rounded'
                maxLength={50}
            />
            <input
                type='text'
                placeholder='City'
                required
                className='py-2 px-4 border-2 border-black mx-3 rounded'
                maxLength={30}
            />
            <div className='grid grid-cols-2'>
            <label htmlFor='state'>State:</label>
            <select id='state' name='state' required value={selectState} onChange={handleStateChange} className='w-10 h-10 text-black'>
                <option value="">-- Select a state --</option>
                <option value="CT">CT</option>
                <option value="NY">NY</option>
            </select>
            </div>
        </form>
    </div>
  )
}

export default AddressCity