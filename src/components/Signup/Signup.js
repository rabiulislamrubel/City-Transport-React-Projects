import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";


const Signup = () => {
        const { register, handleSubmit, errors } = useForm();
        const [showSignUp, setSignUp] = useState([]);

        const onSubmit = data => {
            if(data.email && data.password){
                    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                    .then((userCredential) => {
                        var user = userCredential.user;
                        console.log('user data',user)
                        setSignUp(user);
                    })
                    .catch((error) => {
                        var errorMessage = error.message;
                        console.log(errorMessage);
                    });
            }
        };
        return (
            <div className='form'>
                <div className='inner-form'>
                    <h2>Sign Up</h2>
                    {showSignUp.email && <h4 style={{color: 'green'}}>Your Sign Up is Completed, please Login</h4>}
                    <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
                        <input name="name" ref={register({ required: true })} className='input'  placeholder='Full Name'/>
                        {errors.name && <span className='error'>This name is required</span>}
                    
                        <input name="email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} className='input'  placeholder='Email'/>
                        {errors.email && <span className='error'>This email is required</span>}
                    
                        <input name="password" type='password' ref={register({ required: true, pattern: /\d{1}/, minLength: 6 })} className='input'  placeholder='Password'/>
                        {errors.password && <span className='error'>This password is required</span>}
                        
                        <input type="submit"  className='submit' value='Sign Up'/>
                    </form>
                    <p>Already have an account? <span> <Link to='/login'> Log In </Link></span></p>
                </div>
            </div>
        );
};

export default Signup;