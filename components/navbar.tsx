import * as React from 'react';
import '../style/main.css';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">LOATracker</div>
      <div className="nav">
        <a className="nav-item">Home</a>
        <a className="nav-item">Tracker</a>
      </div>
      <div className="user">
        <img
          className="user-img"
          src="https://i.pinimg.com/564x/d0/ff/30/d0ff30147d968555bbad32a81ddee4aa.jpg"
        ></img>
      </div>
    </div>
  );
}
