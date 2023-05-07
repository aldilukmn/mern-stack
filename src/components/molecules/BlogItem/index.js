import React from 'react'
import "./blogItem.scss"
import { registerBg } from '../../../assets'
import { Button } from '../../atoms'

const BlogItem = () => {
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={registerBg} alt="post"/>
        <div className='content-detail'>
          <p className='title'>Title Blog</p>
          <p className='author'>Author - Date Post</p>
          <p className='body'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam alias illo sapiente quis amet optio culpa inventore fugiat dolorum eligendi facere reprehenderit obcaecati deleniti dolorem nam, tempora non quia quae consequatur est iusto. Vel officiis dolorem explicabo rem voluptatem sequi?</p>
        </div>
    </div>
  )
}

export default BlogItem