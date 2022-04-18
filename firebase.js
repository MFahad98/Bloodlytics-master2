// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUUAlq54VL5ssDtCRD9X2QHTC6jFSd-jU",
  authDomain: "bloodlytics.firebaseapp.com",
  projectId: "bloodlytics",
  storageBucket: "bloodlytics.appspot.com",
  messagingSenderId: "193343984798",
  appId: "1:193343984798:web:07e484c52d74766241978f"
};

// Initialize Firebase
let app;
if (firebase.app.length === 0) {
    app = initializeApp(firebaseConfig);
}
else{
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };