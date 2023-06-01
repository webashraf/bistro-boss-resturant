import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';



const useCart = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);

    const token = localStorage.getItem('token');
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                 headers: {
                    authorization: `Bearer ${token}` 
                } 
                });
            return res.json();
        }
    })

    return [cart, refetch]

};

export default useCart;