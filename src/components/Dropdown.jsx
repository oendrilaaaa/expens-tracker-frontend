import React, {useState} from 'react'

const DropdownComp = (props) => {

  return (
    <select 
    //   options={props?.options}
      onChange={e => props?.handleOnChange(e.target.value)}
      className='w-full px-7 mx-1 bg-white border border-gray-900 focus:outline-none rounded-xl'
    >
      {props?.options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  )
}

export default DropdownComp
