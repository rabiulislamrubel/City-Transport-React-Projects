import React from 'react';
import { Link } from 'react-router-dom';
import './variousTransport.css';

const VariousTransport = (props) => {
    const {name, photo,id} = props.transport;
    return (
        <Link to={`/search/${id}`} className='transport-link'>
            <div className='transport'>
                <img src={photo} alt=""/>
                <h2>{name}</h2>
            </div>
        </Link>
    );
};

export default VariousTransport;