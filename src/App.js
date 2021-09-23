import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Feed from "./Components/feed/Feed";
import Header from "./Components/header/Header";
import Login from "./Components/login/Login";
import Sidebar from "./Components/sidebar/Sidebar";
import { login, logout, selectUser } from "./features/userSlice";
import { getAuth } from "firebase/auth";
import Widget from "./Components/widget/Widget";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const auth = getAuth();
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// user is logged In
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoURL: userAuth.photoURL,
					})
				);
			} else {
				// user is logged Out

				dispatch(logout());
			}
		});
	}, [dispatch]);

	return (
		<div className="App">
			<header className="App-header">
				<Header />

				{!user ? (
					<Login />
				) : (
					<div className="app_body">
						<Sidebar />
						<Feed />
						<Widget />
					</div>
				)}
			</header>
		</div>
	);
}

export default App;
