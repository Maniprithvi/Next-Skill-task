import React from 'react'
import Welcome from '../components/Welcome'
import Content from '../components/Content'

const Home = () => {
  return (
   <div className=' w-[100%] h-full mb-10 '>
  <Welcome />
  <Content />
   </div>
  )
}

export default Home