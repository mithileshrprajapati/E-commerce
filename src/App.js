import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/Header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
	auth,
	createUserProfileDocument,
} from "./component/firebase/firebase.utils";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { currentUser: null };
	}
	unsubscribeFromAuth = null;
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((sanpshot) => {
					this.setState({
						currentUser: {
							id: sanpshot.id,
							...sanpshot.data(),
						},
					});
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div className="App">
				<Header currentUser={this.state.currentUser} />
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
