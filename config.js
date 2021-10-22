import firebase from 'firebase'
require("@firebase/firestore")
const firebaseConfig = {
  apiKey: "AIzaSyCLn18OMqu4nk9Tj8jVqANOv1OYvcN_DtU",
  authDomain: "project-71-complaintforum.firebaseapp.com",
  projectId: "project-71-complaintforum",
  storageBucket: "project-71-complaintforum.appspot.com",
  messagingSenderId: "855345291193",
  appId: "1:855345291193:web:67d3411926eea838fa2068"
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()