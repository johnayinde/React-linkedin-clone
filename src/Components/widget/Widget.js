import { Info, FiberManualRecord } from "@material-ui/icons";
import React from "react";
import "./widget.css";

function Widget() {
	const newsArticle = (heading, subtitle) => {
		return (
			<div className="widgets_article">
				<div className="widget_articleLeft">
					<FiberManualRecord />
				</div>
				<div className="widget_articleRight">
					<h4>{heading}</h4>
					<p>{subtitle}</p>
				</div>
			</div>
		);
	};
	return (
		<div className="widgets">
			<div className="widgets_header">
				<h2>LinkedIn News</h2>
				<Info />
			</div>
			{newsArticle("First heading heading", "First subtitle")}
			{newsArticle("First heading heading", "First subtitle")}
			{newsArticle("First heading heading", "First subtitle")}
			{newsArticle("First heading heading", "First subtitle")}
		</div>
	);
}

export default Widget;
