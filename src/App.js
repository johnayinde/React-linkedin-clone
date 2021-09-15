import React from "react";
import "./App.css";
import Feed from "./Components/feed/Feed";
import Header from "./Components/header/Header";
import Sidebar from "./Components/sidebar/Sidebar";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* {Header} */}
				<Header />
				{/* {app body} */}
				<div className="app_body">
					{/* {sidebar} */}
					<Sidebar />
					{/* {feed} */}
					<Feed />
				</div>
				{/* {widget} */}
			</header>
		</div>
	);
}

export default App;
