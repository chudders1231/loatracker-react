import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faHouse } from '@fortawesome/free-solid-svg-icons';

import '../style/navbar.css';

class NavBar extends React.Component {
  onClick = () => {
    const profModal = document.querySelector('.dropdown');
    const state = window.getComputedStyle(profModal, null).display;

    if (state === 'none') {
      // profModal.style.display = 'flex';
    } else {
      // profModal.style.display = 'none';
    }
    console.log('Profile Button Clicked');
  };
  componentDidMount() {
    document
      .querySelector('.user-img')
      .addEventListener('click', this.onClick, false);
  }
  componentWillUnmount() {
    document
      .querySelector('.user-img')
      .removeEventListener('click', this.onClick, false);
  }
  render() {
    return (
      <div className="navbar">
        <div className="logo">LOATracker</div>
        <div className="nav">
          <a href="/" className="nav-item">
            <span className="nav-icon">
              <FontAwesomeIcon icon={faHouse} />{' '}
            </span>
            <span className="nav-item-text"> Home </span>
          </a>

          <a href="/tracker" className="nav-item">
            <span className="nav-icon">
              <FontAwesomeIcon icon={faClipboardList} />{' '}
            </span>
            <span className="nav-item-text"> Tracker </span>
          </a>
        </div>
        <div className="user">
          <img
            className="user-img"
            src="https://i.pinimg.com/564x/d0/ff/30/d0ff30147d968555bbad32a81ddee4aa.jpg"
          ></img>

          <div className="dropdown">
            <span className="name">%%Firstname%% %%Surname%%</span>
            <div className="menu-divider"></div>
            <span className="menu-item">Home</span>
            <span className="name">Tracker</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
