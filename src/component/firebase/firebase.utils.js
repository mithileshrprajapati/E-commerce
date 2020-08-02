import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const Config = {
	apiKey: "AIzaSyA4vZ2SHq8McyCTn1oc-RbVKj-TPMVKZXY",
	authDomain: "ecommerce-ad703.firebaseapp.com",
	databaseURL: "https://ecommerce-ad703.firebaseio.com",
	projectId: "ecommerce-ad703",
	storageBucket: "ecommerce-ad703.appspot.com",
	messagingSenderId: "244349570216",
	appId: "1:244349570216:web:ebdf031189d3e2babdc69d",
	measurementId: "G-7MJ33FLSQJ",
};
firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
