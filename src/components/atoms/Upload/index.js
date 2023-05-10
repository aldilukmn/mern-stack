import React from 'react'
import "./upload.scss"
import {registerBg} from "../../../assets"

const Upload = ({image, ...rest}) => {
  return (
    <div className='upload'>
      {image && <img src={image} alt="preview" className='preview'/>}
        <input type="file" {...rest}/>
    </div>
  )
}

export default Upload