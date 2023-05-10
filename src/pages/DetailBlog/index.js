import React from 'react'
import {loginBg} from '../../assets'
import './detail-blog.scss'
import { useNavigate } from 'react-router-dom'
import { Link } from '../../components'

const DetailBlog = () => {
  const navigate = useNavigate();
  return (
    <div className='detail-blog'>
        <img src={loginBg} alt="thumb" className='img-cover'/>
        <h1 className='title'>Title Blog</h1>
        <p className='author'>Author - Date Post</p>
        <p className='body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aspernatur at atque accusamus consectetur exercitationem cupiditate nostrum, dolorem dolor vero animi mollitia explicabo? Ipsum non repellendus cumque, soluta error quam cupiditate aperiam atque unde, hic iusto debitis in! Optio eaque dolorum atque dicta labore ratione culpa, at in soluta autem?</p>
        <Link title={"Back"} onClick={() => navigate('/')}/>
    </div>
  )
}

export default DetailBlog