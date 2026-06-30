import { app } from "./firebase.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

window.login = function(){

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    signInWithEmailAndPassword(
        auth,
        email,
        password
    )

    .then(() => {

        alert("Welcome Back!");

        location.href = "characterSlots.html";

    })

    .catch((error) => {

        alert(error.message);

    });

}

window.createAccount = function(){

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    createUserWithEmailAndPassword(
        auth,
        email,
        password
    )

    .then(() => {

        alert("Account Created!");

    })

    .catch((error) => {

        alert(error.message);

    });

}

window.forgotPassword = function(){

    const email =
    prompt("Enter your email");

    if(!email) return;

    sendPasswordResetEmail(auth,email)

    .then(()=>{

        alert(
        "Password reset email sent!"
        );

    })

    .catch((error)=>{

        alert(error.message);

    });

}