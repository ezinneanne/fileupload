// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = { 
  apiKey: "apiKey",
  authDomain: "authDomain",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId"
};

// Initialize Firebase
initializeApp(firebaseConfig);

console.log("this should run");

const analytics = getAnalytics(app);

const messaging = getMessaging();
getToken(messaging, { vapidKey: 'vapidKey'}).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken);
  } else {
    console.log('no registration token available');
  }
}).catch((err) => {
  console.log(err);
});
messaging()

