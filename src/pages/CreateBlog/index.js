import React from 'react'
import Input from '../../components/atoms/Input'
import Button from '../../components/atoms/Button'
import { Gap, Link, TextArea, Upload } from '../../components/atoms'
import "./create-blog.scss"
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const navigate = useNavigate();
  return (
    <div className='blog-post'>
        <p className='title'>Content Create Blog Page</p>
        <Input label={"Post Title"}/>
        <Upload/>
        <TextArea/>
        <Gap height={20}/>
        <div className="btn-wrapper">
          <Link title={'Back'} onClick={() => navigate('/')}/>
          <Button title={"Create Post"} className='btn-create'/>
        </div>
        <Gap height={50} />
    </div>
  )
}

export default CreateBlog