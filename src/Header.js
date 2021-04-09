import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className = "header">
           <h1 className = "header__left">I am from Header </h1>
           <h1 className = "header__mid">I am from Header </h1>
           <h1 
              className = "header__right"
              >Hey guys how are you</h1>
        </div>
    )
}

export default Header;
