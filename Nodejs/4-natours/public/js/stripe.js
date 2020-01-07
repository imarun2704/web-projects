/* eslint-disable */
import axios from "axios";
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_Xwr0kw6lCU7kgx9XdUPHoz9y00WmCr64PX');


export const bookTour = async tourId => {


    try{
    // 1. get checkout session from API
    const session = await axios(`http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    //2. create checkout form   + chanre credit card
    await stripe.redirectToCheckout({
     
        sessionId: session.data.session.id
    });


    }catch(err) {
        console.log(err);
        showAlert('error', err);
    }
    



};




