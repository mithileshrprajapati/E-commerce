import React from "react";
import "./cart-item.style.scss";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
	<div className="cart-item">
		<img src={imageUrl} alt="item"></img>
		<div className="item-details">
			<span className="name">{name}</span>
			<span className="price">
				{quantity} X ${price} = {quantity * price}
			</span>
		</div>
	</div>
);
export default CartItem;
