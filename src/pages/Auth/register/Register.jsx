import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../../assets/others/authentication1.png'
import { AuthContext } from '../../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
const Register = () => {
    const { setUser, signUpUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        signUpUser(email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                toast.success("Sign Up Success")
                navigate("/home")
            })
            .catch((err) => {
                console.log("ERROR", err);
            })
    }
    return (
        <div className='login-container flex justify-center items-center'>
            <div className='login-sub-container border m-10 md:m-20 shadow-2xl grid  grid-cols-1 md:grid md:grid-cols-2'>
                <div className='md:order-2 hidden md:block p-4'>
                    <img src={img1} alt="" />
                </div>
                <div className="md:order-1 card flex justify-center w-full md:px-10 shrink-0">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control justify-center items-center">
                            <label className="label">
                                <span className="label-text text-2xl font-bold">Sign Up</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline bg-[rgba(209,159,84,0.7)] text-white">Sign Up</button>
                            <Link to={"/login"} className='text-center my-2 text-[rgba(209,159,84)]'>Already registered? Go to log in</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Register;