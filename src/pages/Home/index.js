import React, { useEffect, useState } from 'react'
import { Button, BlogItem, Gap } from '../../components'
import "./home.scss"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setDataBlog } from '../../config/redux/action'

const Home = () => {
  const [counter, setCounter] = useState(1)
  const navigate = useNavigate();
  const {dataBlog, page} = useSelector(state => state.homeReduser);
  const dispatch = useDispatch();

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
    console.log(counter);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
    console.log(counter);
  }

  useEffect(() => {
    dispatch(setDataBlog(counter))
  }, [counter, dispatch])

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
                  image={`http://localhost:3001/${blog.image}`}
                  title={blog.title}
                  body={blog.body}
                  name={blog.author.name}
                  date={blog.createdAt}/> 
        })}
        </div>
        <div className="pagination-wrapper">
          <Button title="Previous" onClick={previous}/>
          <Gap width={40}/>
          <p className='text-pagination'>{page.currentPage} / {page.totalPage}</p>
          <Button title="Next" onClick={next}/>
        </div>
          <Gap height={20}/>
    </div>    
  )
}

export default Home