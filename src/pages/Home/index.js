import React, { useEffect } from 'react'
import { Button, BlogItem, Gap } from '../../components'
import "./home.scss"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const navigate = useNavigate();
  const url = 'http://localhost:3000/v1/blog/posts?page=1&perPage=4';
  const {dataBlog} = useSelector(state => state.homeReduser);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(url)
    .then(result => {
      const resAPI = result.data;
      dispatch({type: 'UPDATE_DATA_BLOG', payload: resAPI.data})
    })
    .catch(err => {
      console.log("Error : ", err);
    })
  }, [])

  return (
    <div className='home-page-wrapper'>
        <div className="create-wrapper">
          <Button title={"Create blog"} onClick={() => navigate('/create-blog')}/>
        </div>
        <Gap height={25}/>
        <div className="content-wrapper">
        {dataBlog.map(blog => {
          return <BlogItem 
                  key={blog._id} 
                  image={`http://localhost:3000/${blog.image}`}
                  title={blog.title}
                  body={blog.body}
                  name={blog.author.name}
                  date={blog.createdAt}/> 
        })}
        </div>
        <div className="pagination-wrapper">
          <Button title="Previous"/>
          <Gap width={40}/>
          <Button title="Next"/>
        </div>
          <Gap height={20}/>
    </div>    
  )
}

export default Home