import React, { useContext, useEffect } from 'react';
import './login.css'

import img1 from "../../../assets/others/authentication1.png"
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
    const navigate = useNavigate()
    const { loginUser, setUser } = useContext(AuthContext)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;
        console.log(email, password);
        if (validateCaptcha(captcha) == true) {
            loginUser(email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                toast.success("Successfully Logged in")
                navigate("/home")
            })
            .catch((err)=> {
                toast.error(err.message)
            })
        }

        else {
            alert('Captcha Does Not Match');
        }
    }
    return (
        <div className='login-container flex justify-center items-center'>
            <div className='login-sub-container border m-10 md:m-20 shadow-2xl grid grid-cols-1 md:grid-cols-2'>
                <div className='hidden md:block p-4'>
                    <img src={img1} alt="" />
                </div>
                <div className="card flex justify-center w-full md:px-10 shrink-0">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control justify-center items-center">
                            <label className="label">
                                <span className="label-text text-2xl font-bold">Log In</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate></LoadCanvasTemplate>
                            </label>
                            <input type="text" name='captcha' placeholder="type the text above" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline bg-[rgba(209,159,84,0.7)] text-white">Sign In</button>
                            <Link to={"/register"} className='text-center my-2 text-[rgba(209,159,84)]'>New here? Create a New Account</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;