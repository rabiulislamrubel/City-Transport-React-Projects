import React, { useEffect, useState } from 'react';
import FakeData from '../FakeData/FakeData';
import VariousTransport from '../VariousTransport/VariousTransport';
import './home.css';


const Home = () => {
    const [transportData, setTransportData] = useState([])
    useEffect(()=>{
        setTransportData(FakeData)
    },[])

    // const history = useHistory();
    // const handleSearch = () =>{
    //     history.push('/search');
    // }

    return (
        <div className='home'>
            <div className='inner-home'>
                {
                    transportData.map(tp => <VariousTransport transport={tp} key={tp.id}></VariousTransport>)
                }
            </div>
        </div>
    );
};

export default Home;