import React, { useState } from 'react'
import Input from '../../components/atoms/Input'
import Button from '../../components/atoms/Button'
import { Gap, Link, TextArea, Upload } from '../../components/atoms'
import "./create-blog.scss"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const onSubmit = () => {
    const data = new FormData();
    data.append('title', title);
    data.append('body', body);
    data.append('image', image);

    axios.post('http://localhost:3001/v1/blog/create-blog', data, {
      headers: {  
        'content-type': 'multipart/form-data'
      }
    })
    .then(result => {
      console.log('Post success : ', result);
    })
    .catch(err => {
      console.log('Error : ', err);
    })
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  } 

  return (
    <div className='blog-post'>
        <p className='title'>Content Create Blog Page</p>
        <Input label={"Post Title"} value={title} onChange={(e) => setTitle(e.target.value)}/>
        <Upload onChange={(e) => onImageUpload(e)} image={imagePreview}/>
        <TextArea value={body} onChange={(e) => setBody(e.target.value)}/>
        <Gap height={20}/>
        <div className="btn-wrapper">
          <Link title={'Back'} onClick={() => navigate('/')}/>
          <Button title={"Create Post"} className='btn-create' onClick={onSubmit}/>
        </div>
        <Gap height={50} />
    </div>
  )
}

export default CreateBlog