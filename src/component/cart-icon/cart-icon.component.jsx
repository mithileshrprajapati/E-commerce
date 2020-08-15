import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../component/Redux/cart/cart.action";
import { ReactComponent as ShopingIcon } from "../../asset/shopping-bag.svg";
import "./cart-icon.style.scss";
import { selectCartItemsCount } from "../../component/Redux/cart/cart.selector.js";
const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShopingIcon className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);
const mapDispatchtoProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchtoProps)(CartIcon);
