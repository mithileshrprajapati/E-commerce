import React from "react";
import FormInput from "../../component/form-input/form-input.component";
import "./sign-in.style.scss";
import CustomButton from "../../component/custom-button/custom-button.component";
import {
	signInWithGoogle,
	auth,
} from "../../component/firebase/firebase.utils";
class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}
	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.log(error);
		}
	};
	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className="sign-in  ">
				<h2 className="title">I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						label="Email"
						type="email"
						value={this.state.email}
						required
						onChange={this.handleChange}
					></FormInput>
					<FormInput
						name="password"
						type="password"
						label="Password"
						value={this.state.password}
						required
						onChange={this.handleChange}
					></FormInput>
					<div className="buttons">
						<CustomButton type="Submit">Sign In</CustomButton>
						<CustomButton
							type="button"
							onClick={signInWithGoogle}
							isGoogleSignIn
						>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
export default SignIn;
