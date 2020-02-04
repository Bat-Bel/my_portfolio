import React from 'react';
import Utils from '../../utils/index';
import './Header.scss';
import './HeaderMobile.scss';

const FirstSectionHeader = () => (
  <div className='first-section header-menu'>
    <span>
      <h1 className='menu-name'>
        Yasser
      </h1>
    </span>
    <p className='menu-message'>
      {'<Enthusiastic developer />'}
    </p>
  </div>
)

const headerList = () => (
  <ul className='menu-list'>
    {Utils.getSections().map((section, index) => (
      <li className='menu-item' key={index}>
        <a className='menu-link' href={`#${section}`}>
          {section}
        </a>
      </li>
    ))}
  </ul>
)

const SecondSectionHeader = () => (
  <div className='second-section header-menu'>
    {headerList()}
  </div>
)

// const MenuButtonHeader = () => (
//   <a href="#menu" class="box-shadow-menu">
//     Menu
//   </a>
// )


const Header = () => {
  return (
    <div className='header-container'>
      <div className='header'>
        <FirstSectionHeader />
        <SecondSectionHeader />
        {/* <MenuButtonHeader /> */}
      </div>
    </div>
  );
}

export default Header;