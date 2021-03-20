import React, {useState } from 'react';
import { useForm } from 'react-hook-form';
import './searchinput.css';



const SearchInput = (props) => {
    const {name, photo}= props.fakeData;
    const [searchData, setSearchData] = useState({});
    
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
    setSearchData(data);
};
const {pick_from,pick_to} = searchData;

const handleClear = () => {
    setSearchData({});
}

return (
    <div>
        {!pick_from && <form onSubmit={handleSubmit(onSubmit)} className='search-form'>
            <label>Pick From</label>
            <input name="pick_from" ref={register({ required: true })} className='input'/>
            {errors.pick_from && <span  className='error'>Pick From is required</span>}
        
            <label>Pick to</label>
            <input name="pick_to" ref={register({ required: true })} className='input'/>
            {errors.pick_to  && <span  className='error'>Pick To is required</span>}
            
            <input type="submit" className='submit' value='Search'/>
        </form>}
        {pick_from && <div className="show-search-data">
            <div className="pick-from-to">
                <ul>
                <li>{pick_from}</li>
                <li>{pick_to}</li>
                </ul>
            </div>

            <div className="rent">
                <div className="rent-detail">
                    <img src={photo} alt=""/>
                    <span>{name}</span>
                    <span>
                        <img src="https://i.ibb.co/dKjc2S0/peopleicon.png" alt=""/>
                        <span>4</span>
                    </span>
                    <span>$67</span>
                </div>
                
                <div className="rent-detail">
                    <img src={photo} alt=""/>
                    <span>{name}</span>
                    <span>
                        <img src="https://i.ibb.co/dKjc2S0/peopleicon.png" alt=""/>
                        <span>4</span>
                    </span>
                    <span>$67</span>
                </div>
                
                <div className="rent-detail">
                    <img src={photo} alt=""/>
                    <span>{name}</span>
                    <span>
                        <img src="https://i.ibb.co/dKjc2S0/peopleicon.png" alt=""/>
                        <span>4</span>
                    </span>
                    <span>$67</span>
                </div>
            </div>

            <div className="search-btn">
                <button onClick={handleClear}>Search</button>
            </div>
        </div>}
    </div>
  );
};

export default SearchInput;