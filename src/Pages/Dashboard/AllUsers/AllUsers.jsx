import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaTrashAlt, FaUser, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`http://localhost:5000/users`);
        return res.json();
    })


    const handleUserRole = id => {
        console.log(id);
        fetch(`http://localhost:5000/user/admin/${id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }


    const handleDeleteUser = userId => {
        console.log(userId);
    }



    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>BISTRO BOSS | All Users</title>
            </Helmet>
            {users.length}




            <div className="overflow-y-auto w-full border-4 border-cyan-900 rounded-md">
                <table className="table w-full">
                    {/* head */}
                    <thead className="">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th className="">Email</th>
                            <th className="">Role</th>
                            <th className="text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {users.map((user, i) => (
                            <tr key={user._id} className="hover ">
                                <td>{i + 1}</td>
                                <td>
                                    <div className="font-bold">{user.name}</div>
                                </td>
                                <td className="">${user.email}</td>
                                <td className="">{!user.role ? <button onClick={() => handleUserRole(user._id)} className='btn btn-lg btn-outline'><FaUser className='text-cyan-700'></FaUser></button> : 
                                <button className='btn btn-lg btn-outline'>
                                    <FaUserShield className='text-cyan-900'></FaUserShield>
                                    </button>}</td>
                                <td className="flex justify-end">
                                    <button
                                        onClick={() => handleDeleteUser(user._id)}
                                        className="btn btn-red-600 btn-lg"
                                    >
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>




        </>
    );
};

export default AllUsers;