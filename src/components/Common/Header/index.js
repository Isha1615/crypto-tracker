import React from 'react';
import Button from '../Button';
import AnchorTemporaryDrawer from './drawer';
import "./styles.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='navbar'>
      <h1 className='logo'>CryptoTracker</h1>
      <div className='links'>
        <Link to="/"> 
          <p className='link'>Home</p>
        </Link>
        <Link to="/compare">
          <p className='link'>Compare</p>
        </Link>
        {/* <Link to="/watchlist">
          <p className='link'>Watchlist</p>
        </Link> */}
        <Link to="/dashboard">
          <Button 
          text={"Dashboard"} onClick={() => console.log("btn clicked")}
          />
        </Link>
      </div>
      <div className="mobile-drawer">
        <AnchorTemporaryDrawer />
      </div>
    </div>
  )
}

export default Header;