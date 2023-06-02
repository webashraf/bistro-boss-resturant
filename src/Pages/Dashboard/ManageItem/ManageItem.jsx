import React from 'react';
import useMenu from '../../../hooks/useMenu';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageItem = () => {
    const [menus, refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure()


    const handleDelete = id => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
            axiosSecure.delete(`/item/${id}`)
            .then(res => {
                (res.data.deletedCount > 0) && refetch();
                console.log('deleted response', res.data);
            })
            }
          })

    }



    return (
        <div className='w-full'>
            <h1>Manage Item</h1>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menus.map(menu => <tr key={menu._id}>

                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-full h-12">
                                            <img src={menu.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {menu.name}
                                </td>
                                <td>${menu.price}</td>
                                <th>
                                    Edit
                                </th>                                
                                <th>
                                    <button onClick={() => handleDelete(menu._id)} className='btn btn-sm'>Delete</button>
                                    
                                </th>
                            </tr>)

                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageItem;