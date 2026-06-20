import { app } from "./firebase.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
const auth = getAuth(app);

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