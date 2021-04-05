import firebase from "firebase/app";
import 'firebase/auth'

// https://firebase.google.com/docs/web/setup?authuser=0
 
// See firebase setup in above google firebase documentation url
const config = {
  apiKey: process.env.GATSBY_REACT_APP_APIKEY,
  authDomain: process.env.GATSBY_REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.GATSBY_REACT_APP_DATABASEURL,
  projectId: process.env.GATSBY_REACT_APP_PROJECTID,
  storageBucket: process.env.GATSBY_REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.GATSBY_REACT_APP_MESSANGINGSENDERID,
  appId: process.env.GATSBY_REACT_APP_APPID,
  measurementId: process.env.GATSBY_REACT_APP_MEASUREMENTID
};

// export const auth = app.auth();
// export default app;


let instance;

export default function getFirebase() {
  if (typeof window !== 'undefined') {
    if (instance) return instance;
    instance = firebase.initializeApp(config);
    return instance;
  }

  return null;
}