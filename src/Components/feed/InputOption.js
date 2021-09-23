import React from "react";
import "./inputOption.css";

function InputOption({ Icon, text, color }) {
	return (
		<div className="inputOption">
			<Icon style={{ color: color }} />
			<h4>{text}</h4>
		</div>
	);
}

export default InputOption;
