import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/Header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
	auth,
	createUserProfileDocument,
} from "./component/firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./component/Redux/user/user.action";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component.jsx";
import { selectCurrentUser } from "./component/Redux/user/user.selector";

class App extends React.Component {
	unsubscribeFromAuth = null;
	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((sanpshot) => {
					setCurrentUser({
						id: sanpshot.id,
						...sanpshot.data(),
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage}></Route>
					<Route path="/shop" component={ShopPage}></Route>
					<Route exact path="/checkout" component={CheckoutPage}></Route>
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
						}
					></Route>
				</Switch>
			</div>
		);
	}
}
const mapStatetoProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchtoProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
