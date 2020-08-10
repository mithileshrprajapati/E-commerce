import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../component/Redux/cart/cart.action";
import { ReactComponent as ShopingIcon } from "../../asset/shopping-bag.svg";
import "./cart-icon.style.scss";
const CartIcon = ({ toggleCartHidden }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShopingIcon className="shopping-icon" />
		<span className="item-count">0</span>
	</div>
);
const mapDispatchtoProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchtoProps)(CartIcon);
