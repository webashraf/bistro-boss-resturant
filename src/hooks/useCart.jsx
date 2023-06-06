import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

import useAxiosSecure from './useAxiosSecure';



const useCart = () => {

    const { user , loading} = useAuth();
  const [axiosSecure] = useAxiosSecure()
    // const token = localStorage.getItem('token');
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`https://bistro-boss-server-mocha.vercel.app/carts?email=${user?.email}`, {
        //          headers: {
        //             authorization: `Bearer ${token}` 
        //         } 
        //         });
        //     return res.json();
        // }
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`);
            return res.data;
        }
    })

    return [cart, refetch]

};

export default useCart;