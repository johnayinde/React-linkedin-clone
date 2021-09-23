import {
	CalendarViewDay,
	Create,
	EventNote,
	Image,
	Subscriptions,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import "./feed.css";
import InputOption from "./InputOption";
import firebaseApp from "../../firebase/firebase";
import {
	getFirestore,
	collection,
	addDoc,
	onSnapshot,
} from "firebase/firestore";

import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
	const user = useSelector(selectUser);
	const [text, setText] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const db = getFirestore(firebaseApp);
		const watch = onSnapshot(collection(db, "posts"), (snapshots) => {
			setPosts(
				// set the payload to setPosts state
				snapshots.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
		return () => {
			watch();
		};
	}, []);

	const sendPost = (event) => {
		event.preventDefault();
		const db = getFirestore(firebaseApp);

		addDoc(collection(db, "posts"), {
			name: user.displayName,
			email: user.email,
			message: text,
			description: user.email,
			photoUrl: user.photoURL || "",
			// timestamp: FieldValue.serverTimestamp(),
		});
		setText("");
	};

	return (
		<div className="feed">
			<div className="feed_inputContainer">
				<div className="feed_input">
					<Create />
					<form action="">
						<input
							type="text"
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
						<button onClick={sendPost} type="submit">
							Send
						</button>
					</form>
				</div>

				<div className="feed_inputOption">
					<InputOption Icon={Image} text="Photo" color="#70B5F9" />
					<InputOption Icon={Subscriptions} text="Video" color="#E7A33E" />
					<InputOption Icon={EventNote} text="Event" color="#C0CBCD" />
					<InputOption
						Icon={CalendarViewDay}
						text="Write article"
						color="#7FC15E"
					/>
				</div>
			</div>
			<FlipMove>
				{/* {Posts} */}
				{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
					<Post
						key={id}
						name={name}
						message={message}
						description={description}
						photoUrl={photoUrl}
					/>
				))}
			</FlipMove>
		</div>
	);
}

export default Feed;
