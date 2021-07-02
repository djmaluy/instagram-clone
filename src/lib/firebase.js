import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAp3tSudPUKqtHh6eaAGeEB108GpT2XqWk",
  authDomain: "instagram-clone-792b8.firebaseapp.com",
  projectId: "instagram-clone-792b8",
  storageBucket: "instagram-clone-792b8.appspot.com",
  messagingSenderId: "323492067332",
  appId: "1:323492067332:web:7d80f596ee1c65921edd51",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log(firebase);

export { firebase, FieldValue };
