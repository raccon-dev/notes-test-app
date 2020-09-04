import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <nav className="navigation">
                    <h1> <a href="/" className="logo">Notes - now you don't forget anything</a></h1>
                </nav>
                <button className="btn btn-addNotes">+</button>
            </div>
        </header>
    );
}

export default Header;
