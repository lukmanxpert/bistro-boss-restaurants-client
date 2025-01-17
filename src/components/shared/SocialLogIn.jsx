import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';

const SocialLogIn = () => {
    const { googleSignIn, setUser } = useContext(AuthContext)
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user)
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