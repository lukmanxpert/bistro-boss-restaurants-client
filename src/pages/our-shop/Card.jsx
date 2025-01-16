import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";

const Card = ({ menu }) => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const handleBuyNow = (menu) => {
        if (!user) {
            return Swal.fire({
                title: "You are not logged in!",
                // text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Log In"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: pathname })
                }
            });
        }
        const axiosSecure = useAxiosSecure()
        const cartData = {
            productId: menu._id,
            productEmail: user.email,
            productName: menu.name,
            productImage: menu.image,
            productPrice: menu.price
        }
        axiosSecure.post("/carts", cartData)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                console.log(data.data)
            })
            .catch(err => console.log(err))
    }
    // console.log(menu);
    return (
        <div className="card rounded-none bg-base-100 shadow-xl">
            <figure>
                <img className='w-full relative'
                    src={menu.image} />
                <span className='absolute top-0 right-5 text-white font-bold bg-[#1f2937] py-2 px-4 my-2 rounded-md'>${menu.price}</span>
            </figure>
            <div className="text-center">
                <h2 className="text-2xl font-bold my-2">{menu.name}</h2>
                <p>{menu.recipe}</p>
                <div className="">
                    <button onClick={() => handleBuyNow(menu)} className="btn btn-outline my-2">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;