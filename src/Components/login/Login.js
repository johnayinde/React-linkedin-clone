import React, { useState } from "react";
import linkedinLogo from "../../linkedin-logo.png";
import "./login.css";
import {
	getAuth,
	updateProfile,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [profilePic, setprofilePic] = useState("");

	const dispatch = useDispatch();

	const auth = getAuth();
	const register = () => {
		// createUserWithEmailAndPassword(auth, email, password)
		// 	.then((userAuth) => {
		// 		const user = userAuth.user;

		// 		updateProfile(user, {
		// 			displayName: name,
		// 			photoURL: profilePic,
		//}).then(() => {
		dispatch(
			login({
				email: email,
				// uid: uid,
				displayName: name,
				photoURL: profilePic,
			})
		);
		// 	});
		// })
		// .catch((e) => alert(e.message));
	};

	const loginToApp = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						photoURL: userAuth.user.photoURL,
					})
				);
			})
			.catch((e) => alert(e));
	};

	return (
		<div className="login">
			<img src={linkedinLogo} alt="" />
			<form action="">
				<input
					value={name}
					type="text"
					onChange={(e) => setName(e.target.value)}
					placeholder="Full name (required if registering)"
				/>
				<input
					value={profilePic}
					onChange={(e) => setprofilePic(e.target.value)}
					type="text"
					placeholder="Profile Pic URL (optional"
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<button type="submit" onClick={loginToApp}>
					Sign In
				</button>
			</form>
			<p>
				Not a member?{" "}
				<span className="login_register" onClick={register}>
					Register Now
				</span>
			</p>
		</div>
	);
}

export default Login;
