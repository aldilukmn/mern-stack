import React from 'react'
import "./text-area.scss"

const TextArea = ({...rest}) => {
  return (
    <div>
        <textarea cols="30" rows="10" className='text-area' {...rest}></textarea>
    </div>
  )
}

export default TextArea