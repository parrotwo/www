// Initialize Firebase
var config = {
    apiKey: "AIzaSyCMrImyo1Bgo68iSljIZwwZ8XQFTjWTpNQ",
    authDomain: "parrotwotk.firebaseapp.com",
    databaseURL: "https://parrotwotk.firebaseio.com",
    projectId: "parrotwotk",
    storageBucket: "parrotwotk.appspot.com",
    messagingSenderId: "205193799109"
};

firebase.initializeApp(config);

const db = firebase.database();
