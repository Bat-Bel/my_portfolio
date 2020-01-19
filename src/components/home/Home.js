import React from 'react';
import { images } from '../../assets/index';
import './Home.scss'

const Home = () => {
  return (
    <div className='home container-item'>
      <div className='home-left'>
        <h1 className='home-title'>hello !!</h1>
        <h3>a bit about me:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
      <div className='home-right'>
        <img src={images.yasser} alt='Yasser Batas' />
      </div>
    </div>
  )
}

export default Home;