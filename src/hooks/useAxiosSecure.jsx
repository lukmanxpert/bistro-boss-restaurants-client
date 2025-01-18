import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const axiosSecure = axios.create({
    baseURL: "http://localhost:9000/"
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useContext(AuthContext);
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error)
    })

    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
            await logOut()
            navigate("/login")
        }
        return Promise.reject(error)
    })

    return axiosSecure
};

export default useAxiosSecure;