import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../provider/AuthProvider";

const useCart = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { data: cart=[], refetch } = useQuery({
        queryKey: ['allCart'],
        queryFn: async () => {
            const result = await axiosSecure.get(`all-carts?email=${user?.email}`)
            return result.data
        }
    })
    return (
        { cart, refetch }
    )
};

export default useCart;