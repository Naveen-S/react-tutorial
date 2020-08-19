import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css';
export default function Header() {
    return (
        <div className='header'>
            TodoApp!
            <div className="link-container">
                <Link className="link" to="/"> Home </Link> |
                <Link className="link" to="/about"> About </Link>
            </div>
        </div>
    )
}
