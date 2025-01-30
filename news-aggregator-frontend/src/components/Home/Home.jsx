import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"
const Home = () => {
  const navigate= useNavigate();

  const handleNavigation=()=>{
     navigate('/news')
  };
  return (
    <div className=''>
      <section className='banner'>
        <div className='content'>
          <p className='title'>Infonic</p>
          <p className='subtitle'>"Stay Updated with the World’s Headlines in Real-Time!"</p>
        </div>

        <div className='cover'></div>
        <div className='fadeout'></div>

        <button className='readbtn' onClick={handleNavigation}>Read News</button>
      </section>
    </div>
  )
}

export default Home
