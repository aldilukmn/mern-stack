import React from 'react'
import "./link.scss"

const Link = ({title, onClick}) => {
  return (
    <div className="link">
        <a onClick={onClick }>{title}</a>
    </div>
  )
}

export default Link