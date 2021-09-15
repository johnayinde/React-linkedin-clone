import { Avatar } from "@material-ui/core";
import React from "react";
import "./headerOption.css";

function HeaderOption({ Icon, title, avatar }) {
	return (
		<div className="headerOption">
			{Icon && <Icon className="headerOption_icon" />}
			{avatar && <Avatar className="headerOption_icon" src={avatar} />}
			<h3 className="headerOption_title">{title}</h3>
		</div>
	);
}

export default HeaderOption;
