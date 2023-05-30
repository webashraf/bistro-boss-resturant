import { Helmet } from "react-helmet";
import useCart from "../../../hooks/useCart";

const Mycart = () => {
    const [cart] = useCart()
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>BISTRO BOSS | Cart</title>
            </Helmet>
            <h1>My Cart Page</h1>
            {cart?.length}
        </div>
    );
};

export default Mycart;