// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3_0za0iiEScyvwdyYgW9lRUqYUKFivU8",
  authDomain: "project-43d.firebaseapp.com",
  projectId: "project-43d",
  storageBucket: "project-43d.appspot.com",
  messagingSenderId: "680669100631",
  appId: "1:680669100631:web:dc9a3566c22c2cc30a4112"
};

// Initialize Firebase
initializeApp(firebaseConfig);

console.log("this should run");

const analytics = getAnalytics(app);

const messaging = getMessaging();
getToken(messaging, { vapidKey: 'BF5sPAJ4voiR26i7lirCDXegixc3BhIk8IHQX6UWKbAfepeR_qUfErNDYODJavRZ2czgHBYQl8nj5Cx781Rx3Vg'}).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken);
  } else {
    console.log('no registration token available');
  }
}).catch((err) => {
  console.log(err);
});
messaging()

