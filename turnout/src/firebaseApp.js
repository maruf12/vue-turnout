  import firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyA2_xtb45wEDC6xxRJdlduOJ4sxNVZXagM",
    authDomain: "turnout-625ea.firebaseapp.com",
    databaseURL: "https://turnout-625ea.firebaseio.com",
    projectId: "turnout-625ea",
    storageBucket: "turnout-625ea.appspot.com",
    messagingSenderId: "387901587168"
  };

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
