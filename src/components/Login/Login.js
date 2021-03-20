import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import './login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { UesContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    var provider = new firebase.auth.GoogleAuthProvider();
    const [shareData, setShareData] = useContext(UesContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }

    const onSubmit = data => {
        if(data.email && data.userPassword){
                firebase.auth().signInWithEmailAndPassword(data.email, data.userPassword)
                .then((userCredential) => {
                    var user = userCredential.user;
                    setShareData(user);
                    history.replace(from);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode,errorMessage)
            });
        }
};

    return (
    <div className='form'>
        <div className='inner-form'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
            
                <input name="email" ref={register({ required: true })} placeholder='You Email' className='input'/>
                {errors.email && <span className='error'>This name is required</span>}
                <input name="userPassword" type='password' ref={register({ required: true })} placeholder='You Password' className='input'/>
                {errors.userPassword && <span className='error'>This password is required </span>}
                <input type="submit" className='submit' value='Log In'/>
            
            </form>
            <p>Don't have an account? <span> <Link to='/signup'> Create an account </Link></span></p>
            <p className='or'>or</p>
            <button className='btn' onClick={handleGoogleSignIn}>Continue with Google</button>
        </div>
    </div>
    )
}
export default Login;