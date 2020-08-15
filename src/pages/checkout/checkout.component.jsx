import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartTotal,
} from "../../component/Redux/cart/cart.selector.js";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";

import "./checkout.style.scss";

const CheckoutPage = ({ cartItems, total }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="checkout-block">
				<span>Product</span>
			</div>
			<div className="checkout-block">
				<span>Description</span>
			</div>
			<div className="checkout-block">
				<span>Quantity</span>
			</div>
			<div className="checkout-block">
				<span>Price</span>
			</div>
			<div className="checkout-block">
				<span>Remove</span>
			</div>
		</div>

		{cartItems.map((cartItem) => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<div className="total">
			<span>TOTAL: ${total}</span>
		</div>
	</div>
);
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);