import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentForm = ({ price, cart }) => {
    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth();
    const [procesing, setProcesing] = useState(false)
    console.log(cart);

    useEffect(() => {
        // console.log(price);
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price })
                .then(res => setClientSecret(res.data.clientSecret))        
        }
    }, [price, axiosSecure])

    // console.log(clientSecret);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        console.log(card);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError('error', error);
        }
        else {
            console.log('paymentMethod', paymentMethod);
        }
        setProcesing(true);
        const { paymentIntent, error: confirmCardError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'Anonymous',
                        email: user?.email || 'Anonymous'
                    },
                },
            },
        );
        if (confirmCardError) {
            setError(confirmCardError)
        }
        console.log(paymentIntent);
        if (paymentIntent.status === "succeeded") {
            setProcesing(false);
            const payment = {
                email: user?.email,
                transictionId: paymentIntent.id,
                date: new Date(),
                orderStatus: 'pending',
                price: price,
                qty: cart.length,
                cartsItems: cart.map(item=> item._id),
                menuItems: cart.map(item=> item.itemId),
                itemsName: cart.map(item=> item.name)
            }
            console.log('payment', payment);
            console.log(paymentIntent.id);
            axiosSecure.post('/payment', payment)
            .then(res => res.data)
        }
    }

    
    return (
        <div className="w-3/5 mx-auto">
            <h1 className="text-4xl mb-6">Payment Histroy</h1>
            <form className=" space-y-4" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-block" type="submit" disabled={!stripe || !clientSecret || procesing}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default PaymentForm;