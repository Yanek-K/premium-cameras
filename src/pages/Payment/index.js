import React from "react";
import PaymentDetails from "./../../components/PaymentDetails";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { publishableKey } from "./../../Stripe/config";

const stripePromise = loadStripe(publishableKey);

const Payment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <PaymentDetails />
      </Elements>
    </div>
  );
};

export default Payment;
