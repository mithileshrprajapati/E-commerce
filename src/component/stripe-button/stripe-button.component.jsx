import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51HIHAmCMTR9lvrEJKOg8TCwBoFt2Cn3nBQTm2nalsTCEUzANsZX09WMkpf95Us7oYphqqtGK4faJU27TRISlUSK800H3j0Td2y";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful");
	};

	return (
		<StripeCheckout
			label="PAY NOW"
			name="E-Commerce"
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="PAY NOW"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
