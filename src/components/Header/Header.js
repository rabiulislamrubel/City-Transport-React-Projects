import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h3>City Transport</h3>
            </div>
            <div className='menu'>
                <ul>
                    <li>
                        <Link className='link' to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className='link' to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link className='link' to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className='link' to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className='btn' to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;