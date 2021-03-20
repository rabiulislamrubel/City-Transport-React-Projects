import React, { useEffect, useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import './search.css';
import fakedatatwo from '../FakeData/FakeData';
import { useParams } from 'react-router';

const Search = () => {
    const [fakeData, setFakeData] = useState({});

    const {fakeId} = useParams();

    useEffect(()=> {
        const num = Number(fakeId);
        const first = fakedatatwo.find(value => value.id === num);
        setFakeData(first);
    },[fakeId]);

    return (
        <div className='search'>
            <div className="inner-left">
                <SearchInput fakeData = {fakeData}></SearchInput>
            </div>
            <div className="inner-right">
                <img src='https://i.ibb.co/7Xm336C/Map.png' alt=""/>
            </div>
        </div>
    );
};

export default Search;