import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAIxqkEMbir7rhE2qYf-mhlB4sF_lpxL34",
    authDomain: "button-c16b1.firebaseapp.com",
    databaseURL: "https://button-c16b1.firebaseio.com",
    projectId: "button-c16b1",
    storageBucket: "button-c16b1.appspot.com",
    messagingSenderId: "993103093960",
    appId: "1:993103093960:web:64ce24d1a28c12bbf0c5fd",
    measurementId: "G-NXXT9JDVD1"
}

firebase.initializeApp(config);

export default firebase