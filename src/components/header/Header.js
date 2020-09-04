import React from 'react';
import './header.css';
import { notesHandler } from '../../redux/actions/setNotes';
import { useDispatch } from 'react-redux'

const Header = () => {

    const dispatch = useDispatch();
    
    const onAddHandler = () => {
        dispatch(notesHandler('', 'POST', {
            "notesBody": 'Start type something',
            "noteColor": "white"
        }))
    }

    return (
        <header id="header">
            <div className="container">
                <nav className="navigation">
                    <h1> <a href="/" className="logo">Notes - now you don't forget anything</a></h1>
                </nav>
                <button onClick={e => onAddHandler()} className="btn btn-addNotes">+</button>
            </div>
        </header>
    );
}

export default Header;
