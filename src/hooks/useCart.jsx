import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';



const useCart = () => {
    const {user} = useContext(AuthContext);
    console.log(user);

    const { isLoading, data : cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
            return res.json();
        }
      })

      return [cart, isLoading]

};

export default useCart;