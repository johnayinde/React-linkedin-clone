// import * as firebase from "firebase";
// import { firebase } from "firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyAKZbUuTcvYrqiGHROcYA_ULBwBxuHKPwk",
	authDomain: "linkedin-clone-572c1.firebaseapp.com",
	projectId: "linkedin-clone-572c1",
	storageBucket: "linkedin-clone-572c1.appspot.com",
	messagingSenderId: "830015822428",
	appId: "1:830015822428:web:19ee828f0717e28db2e499",
};

const app = initializeApp(firebaseConfig);
export default app;
// firebase.initializeFirestore
