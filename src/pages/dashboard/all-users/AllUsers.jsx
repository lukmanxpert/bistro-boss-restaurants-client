import React from 'react';
import SectionTitle from '../../../components/shared/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaUsers } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosSecure.get("/users")
            return result.data;
        }
    })
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data);
                        refetch()
                    }).catch(err => {
                        console.log(err);
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    console.log(users);
    return (
        <div>
            <SectionTitle title={"Manage All Users"} subTitle={"---How Many??---"}></SectionTitle>
            <div className='w-10/12 mx-auto bg-white min-h-screen p-4'>
                <h1 className='font-cinzel text-3xl font-bold'>Total Users : <span>{users?.length}</span></h1>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    users && users.map((user, index) => <tr>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <p>{user.name}</p>
                                            </div>
                                        </td>
                                        <td><p>{user.email}</p></td>
                                        <td><button className='btn bg-[#D1A054] hover:bg-yellow-500 rounded-lg'><FaUsers className='text-xl text-white'></FaUsers></button></td>
                                        <th>
                                            <button onClick={() => handleDelete(user._id)} className="btn bg-red-500 hover:bg-red-700"><RiDeleteBinLine className='text-xl'></RiDeleteBinLine></button>
                                        </th>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;