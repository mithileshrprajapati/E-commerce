import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../Redux/cart/cart.selector.js";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../Redux/cart/cart.action.js";
const CartDropdown = ({ cartItems, history, dispatch }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<span className="empty-message">Your Cart is Empty</span>
			)}
		</div>
		<CustomButton
			onClick={() => {
				history.push("/checkout");
				dispatch(toggleCartHidden());
			}}
		>
			GO TO CHECKOUT
		</CustomButton>
	</div>
);
const mapStateToprops = createStructuredSelector({
	cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToprops)(CartDropdown));
