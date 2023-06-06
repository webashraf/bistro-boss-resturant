import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import useCart from '../../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_STRIPE);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((prev, current) => prev + current.price,0);
    const price = parseFloat(total.toFixed(2));
    console.log(cart);
    return (
        <div>
            {total}
            <Elements stripe={stripePromise}>
                <PaymentForm price={price} cart={cart}></PaymentForm>
            </Elements>
        </div>
    );
};

export default Payment;