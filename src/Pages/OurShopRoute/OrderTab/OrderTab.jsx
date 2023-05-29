import { useContext } from 'react';
import MenuCard from '../../../Shared/MenuCard/MenuCard';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const OrderTab = ({items}) => {
    // const {user} = useContext(AuthContext);
    // console.log(user);
    return (
        <div className="grid grid-cols-3 space-y-3 gap-4">
        {items.map((menu) => (
            <MenuCard key={menu._id} menu={menu} ></MenuCard>
        ))}
    </div>
    );
};

export default OrderTab;