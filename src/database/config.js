import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC0wVVJe8GvZ5v7EE9YSDaBlPO7ELJgNQE",
    authDomain: "photowall-d9dc0.firebaseapp.com",
    databaseURL: "https://photowall-d9dc0-default-rtdb.firebaseio.com",
    projectId: "photowall-d9dc0",
    storageBucket: "photowall-d9dc0.appspot.com",
    messagingSenderId: "735437490521",
    appId: "1:735437490521:web:5e544a251f68cf5e75e448",
    measurementId: "G-WHJJ44STKQ"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export {database}
  export default fire