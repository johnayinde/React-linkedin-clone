import { Avatar } from "@material-ui/core";
import {
	ChatOutlined,
	SendOutlined,
	ShareOutlined,
	ThumbsUpDownOutlined,
} from "@material-ui/icons";
import React, { forwardRef } from "react";
import InputOption from "../feed/InputOption";
import "./post.css";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
	return (
		<div ref={ref} className="post">
			<div className="post_header">
				<Avatar src={photoUrl}>{name[0]}</Avatar>
				<div className="post_info">
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>
			<div className="post_body">
				<p>{message}</p>
			</div>
			<div className="post_buttons">
				<InputOption Icon={ThumbsUpDownOutlined} text="Like" color="gray" />
				<InputOption Icon={ChatOutlined} text="Comment" color="gray" />
				<InputOption Icon={ShareOutlined} text="Share" color="gray" />
				<InputOption Icon={SendOutlined} text="Send" color="gray" />
			</div>
		</div>
	);
});

export default Post;
