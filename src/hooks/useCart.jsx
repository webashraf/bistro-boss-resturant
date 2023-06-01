import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';



const useCart = () => {
    const { user , loading} = useContext(AuthContext);
    // console.log(user);
  const [axiosSecure] = useAxiosSecure()
    // const token = localStorage.getItem('token');
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //          headers: {
        //             authorization: `Bearer ${token}` 
        //         } 
        //         });
        //     return res.json();
        // }
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`);
            console.log('axios cart data', res.data);
            return res.data;
        }
    })

    return [cart, refetch]

};

export default useCart;