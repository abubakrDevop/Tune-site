const firebaseConfig = {
    apiKey: "AIzaSyAXb0rF5xBesioR-mMhBpXKjxSZPuXUCiI",
    authDomain: "music---tune.firebaseapp.com",
    projectId: "music---tune",
    storageBucket: "music---tune.appspot.com",
    messagingSenderId: "220196846547",
    appId: "1:220196846547:web:5d4059518dffcbd85f4d26",
    measurementId: "G-917TMV6PQV"
};

const signUp = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`

const signIn = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`