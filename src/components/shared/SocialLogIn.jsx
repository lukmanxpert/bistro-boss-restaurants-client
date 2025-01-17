import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogIn = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { googleSignIn, setUser } = useContext(AuthContext)
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user)
                axiosPublic.post("/users", {
                    name: result?.user?.displayName,
                    email: result?.user?.email
                })
                    .then(res => {
                        console.log(res);
                    }).catch(error => {
                        console.log(error);
                    })
                navigate("/")
            }).catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='flex justify-center items-center gap-8'>
            <button className='text-2xl border-2 border-slate-900 p-2 rounded-full hover:text-white hover:bg-black'><FaFacebook></FaFacebook></button>
            <button onClick={handleGoogleLogin} className='text-2xl border-2 border-slate-900 p-2 rounded-full hover:text-white hover:bg-black'><FaGoogle></FaGoogle></button>
            <button className='text-2xl border-2 border-slate-900 p-2 rounded-full hover:text-white hover:bg-black'><FaGithub></FaGithub></button>
        </div>
    );
};

export default SocialLogIn;