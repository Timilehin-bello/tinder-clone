import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvIdg876mTJFEkoJ_sFm-YOXo5_jZ_T7Q",
  authDomain: "tinder-clone-cn.firebaseapp.com",
  databaseURL: "https://tinder-clone-cn.firebaseio.com",
  projectId: "tinder-clone-cn",
  storageBucket: "tinder-clone-cn.appspot.com",
  messagingSenderId: "771033804220",
  appId: "1:771033804220:web:a56875dae3cbf64653cfb9",
  measurementId: "G-7HQLPVTMRG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
