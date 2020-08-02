import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/Header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./component/firebase/firebase.utils";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: "",
		};
	}
	unsubscribeFromAuth = null;
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
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
					<Route exact path="/shop" component={ShopPage}></Route>
					<Route exact path="/signin" component={SignInAndSignUp}></Route>
				</Switch>
			</div>
		);
	}
}

export default App;
