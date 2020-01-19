import React from 'react';
import { images } from '../../assets/index';
import './Home.scss'

const Home = () => {
  return (
    <div className='home container-item' id='home'>
      <div className='home-left'>
        <div className='home-left-top'>
          <h1 className='home-title'>hello !!</h1>
          <h3 className='home-subtitle'>a bit about me:</h3>
        </div>

        <div className='home-left-bottom'>
          <p className='home-paragraph'>
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
      </div>

      <div className='home-right'>
        <img className='home-image' src={images.yasser} alt='Yasser Batas' />
      </div>
    </div>
  )
}

export default Home;