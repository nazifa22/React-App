import firebase from 'firebase';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDLz5GUHWWxHo_6KPUslVCYyDq5Soa2TUY",
    authDomain: "movies-307e8.firebaseapp.com",
    databaseURL: "https://movies-307e8.firebaseio.com",
    projectId: "movies-307e8",
    storageBucket: "movies-307e8.appspot.com",
    messagingSenderId: "982094960459",
    appId: "1:982094960459:web:480a1de0e970fdb368face",
    measurementId: "G-E825QGLLNZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default firebase;