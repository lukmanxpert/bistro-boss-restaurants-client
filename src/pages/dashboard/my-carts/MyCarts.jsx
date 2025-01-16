import React from 'react';
import useCart from '../../../hooks/useCart';
import SectionTitle from '../../../components/shared/SectionTitle';
import { RiDeleteBinLine } from 'react-icons/ri';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MyCarts = () => {
    const { cart, refetch } = useCart()
    const axiosSecure = useAxiosSecure()
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/delete-cart/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    }).catch((err) => {
                        console.log(err);
                    })

            }
        });
    }
    return (
        <div>
            <SectionTitle title="Wanna Add More?" subTitle="---My Cart---"></SectionTitle>
            <div className='w-10/12 mx-auto bg-white'>
                <div className=''>
                    <div className='flex justify-between items-center p-4 font-cinzel'>
                        <h1 className='text-2xl uppercase font-bold' >total orders: <span>{cart.length}</span></h1>
                        <h1 className='text-2xl uppercase font-bold' >total price: $<span>{cart.reduce((price, element) => price + element.productPrice, 0)}</span></h1>
                        <button className='btn text-2xl bg-[#D1A054] hover:bg-orange-500'>Pay</button>
                    </div>
                    <div>
                        {
                            cart ? <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr className='uppercase'>
                                            <th></th>
                                            <th>Item Image</th>
                                            <th>Item Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map((item, index) => <tr key={item._id}>
                                                <th>
                                                    {index + 1}
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    src={item?.productImage}
                                                                    alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h1>{item?.productName}</h1>
                                                </td>
                                                <td>
                                                    <h1>${item?.productPrice}</h1>
                                                </td>
                                                <th>
                                                    <button onClick={() => handleDelete(item._id)} className="btn bg-red-500 hover:bg-red-700"><RiDeleteBinLine className='text-xl'></RiDeleteBinLine></button>
                                                </th>
                                            </tr>)
                                        }

                                    </tbody>
                                </table>
                            </div>
                                : <div className='min-h-52 flex justify-center items-center'>No items added!</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCarts;