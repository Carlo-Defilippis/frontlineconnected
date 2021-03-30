import firebase from "firebase";
 
// https://firebase.google.com/docs/web/setup?authuser=0
 
// See firebase setup in above google firebase documentation url
export const config = {
  apiKey: process.env.GATSBY_REACT_APP_APIKEY,
  authDomain: process.env.GATSBY_REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.GATSBY_REACT_APP_DATABASEURL,
  projectId: process.env.GATSBY_REACT_APP_PROJECTID,
  storageBucket: process.env.GATSBY_REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.GATSBY_REACT_APP_MESSANGINGSENDERID
};
 
firebase.initializeApp(config);
 
export default firebase;