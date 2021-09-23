import { Avatar } from "@material-ui/core";
import React from "react";
import "./headerOption.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function HeaderOption({ Icon, title, avatar, onclick }) {
	const user = useSelector(selectUser);

	return (
		<div onClick={onclick} className="headerOption">
			{Icon && <Icon className="headerOption_icon" />}
			{avatar && (
				<Avatar
					className="headerOption_icon"
					src={user ? user.photoURL : ""}
				></Avatar>
			)}
			<h3 className="headerOption_title">{title}</h3>
		</div>
	);
}

export default HeaderOption;
