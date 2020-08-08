import React from "react";
import SignIn from "../../component/sign-in/sign-in.componenet";
import SignUp from "../../component/sign-up/sign-up.component";
import "./sign-in-and-sign-up.scss";
const SignInSignUp = () => (
	<div className="sign-in-and-sign-up">
		<SignIn />
		<SignUp />
	</div>
);
export default SignInSignUp;
