import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";

const Hats = () => (
	<div>
		<h1>Hats Page</h1>
	</div>
);
function App() {
	return (
		<div className="App">
			<Route exact path="/" component={Homepage}></Route>
			<Route exact path="/shop/hats" component={Hats}></Route>
		</div>
	);
}

export default App;
