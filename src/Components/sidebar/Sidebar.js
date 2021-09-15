import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebar.css";
import linkedinLogo from "../../linkedin-logo.png";

function Sidebar() {
	const sidebarItem = (topic) => {
		return (
			<div className="sidebar_recentItem">
				<div className="sidebar_hashtag">#</div>
				<p>{topic}</p>
			</div>
		);
	};
	return (
		<div className="sidebar">
			<div className="sidebar_top">
				<img src={linkedinLogo} alt="" />
				<Avatar className="sidebar_avatar" />
				<h2>Ayinde John</h2>
				<h4>myemailaddress@gmail.com</h4>
			</div>

			<div className="sidebar_stats">
				<div className="sidebar_stat">
					<p>who viewed you</p>
					<p className="sidebar_statNumber">2,233</p>
				</div>

				<div className="sidebar_stat">
					<p>who viewed you</p>
					<p className="sidebar_statNumber">2,883</p>
				</div>
			</div>

			<div className="sidebar_bottom">
				<p>Recent</p>
				{sidebarItem("React JS")}
				{sidebarItem("Programming")}
				{sidebarItem("Software Engineering")}
				{sidebarItem("Software Developement")}
			</div>
		</div>
	);
}

export default Sidebar;
