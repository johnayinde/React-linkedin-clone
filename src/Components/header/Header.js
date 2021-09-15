import React from "react";
import "./header.css";
import linkedinLogo from "../../linkedin-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import {
	SupervisorAccount,
	Home,
	BusinessCenter,
	Chat,
	Notifications,
} from "@material-ui/icons";

function Header() {
	return (
		<div className="header">
			<div className="header_left">
				<img src={linkedinLogo} alt="" />

				<div className="header_search">
					<SearchIcon />
					<input type="text" />
				</div>
			</div>

			<div className="header_right">
				<HeaderOption title="Home" Icon={Home} />
				<HeaderOption title="My Network" Icon={SupervisorAccount} />
				<HeaderOption title="Job" Icon={BusinessCenter} />
				<HeaderOption title="Messaging" Icon={Chat} />
				<HeaderOption title="Notifications" Icon={Notifications} />
				<HeaderOption avatar={linkedinLogo} title="me" />
			</div>
		</div>
	);
}

export default Header;
