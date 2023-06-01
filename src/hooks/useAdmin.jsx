import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const {data: users = [], refetch} = useQuery({
       queryKey: ["isAdmin", user?.email], 
       queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}}`);
            return res.json();
        }
    })
    return [users, refetch]
};

export default useAdmin;