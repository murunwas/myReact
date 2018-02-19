import firebase from "@firebase/app";
import "@firebase/firestore";
const config = {
  apiKey: "AIzaSyB2KVaN4t_uH4uS6QGR0xIW6d8FGeErjIs",
  authDomain: "react-eb92a.firebaseapp.com",
  databaseURL: "https://react-eb92a.firebaseio.com",
  projectId: "react-eb92a",
  storageBucket: "react-eb92a.appspot.com",
  messagingSenderId: "206185548522"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
