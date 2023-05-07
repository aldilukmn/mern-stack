import React from 'react'
import './input.scss'

const Input = ({label, ...rest}) => {
  return (
    <div className='input-wrapper'>
        <label for={label}>{label}</label>
        <input type="text" id={label} {...rest}/>
    </div>
  )
}

export default Input