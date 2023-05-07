import React from 'react'
import { Button, BlogItem, Gap } from '../../components'
import "./home.scss"

const Home = () => {
  return (
    <div className='home-page-wrapper'>
        <div class="create-wrapper">
          <Button title={"Create blog"}/>
        </div>
        <Gap height={25}/>
        <div class="content-wrapper">
          <BlogItem/>
          <BlogItem/>
          <BlogItem/>
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