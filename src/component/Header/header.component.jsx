import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../asset/logo.svg";
import { auth } from "../../component/firebase/firebase.utils";
import { connect } from "react-redux";
const Header = ({ currentUser }) => (
	<div className="Header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/contact">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className="option" to="/signin">
					SIGN IN
				</Link>
			)}
		</div>
	</div>
);
const mapStatetoProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStatetoProps)(Header);
