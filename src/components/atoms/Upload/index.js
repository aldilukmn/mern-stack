import React from 'react'
import "./upload.scss"
import {registerBg} from "../../../assets"

const Upload = () => {
  return (
    <div className='upload'>
        <img src={registerBg} alt="preview" className='preview'/>
        <input type="file"/>
    </div>
  )
}

export default Upload