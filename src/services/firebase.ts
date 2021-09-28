import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC7gPqnzLcrgGz2liq31WENsvDa2pLTPgA",
    authDomain: "nlw-learning.firebaseapp.com",
    databaseURL: "https://nlw-learning-default-rtdb.firebaseio.com",
    projectId: "nlw-learning",
    storageBucket: "nlw-learning.appspot.com",
    messagingSenderId: "50494223057",
    appId: "1:50494223057:web:7e84303982042c70888bf0"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }
