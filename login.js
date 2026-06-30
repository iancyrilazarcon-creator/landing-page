import { app } from "./firebase.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const auth = getAuth(app);

window.login = function(){

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const button=

    document.querySelector(".mainBtn");

    button.innerHTML="Logging in...";

    button.disabled=true;

    signInWithEmailAndPassword(
        auth,
        email,
        password
    )

    .then(() => {

    alert("Welcome Back!");

        button.innerHTML="Success!";

        location.href = "characterSlots.html";

    })

    .catch((error)=>{

    button.innerHTML="BEGIN JOURNEY";
    button.disabled=false;

    if(error.code==="auth/wrong-password"){

        alert("Incorrect password.");

    }

    else if(error.code==="auth/user-not-found"){

        alert("No account found.");

    }

    else if(error.code==="auth/invalid-email"){

        alert("Invalid email.");

    }

    else{

        alert(error.message);

    }

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

    if(error.code==="auth/wrong-password"){

        alert("Incorrect password.");

    }

    else if(error.code==="auth/user-not-found"){

        alert("No account found.");

    }

    else if(error.code==="auth/invalid-email"){

        alert("Invalid email.");

    }

    else{

        alert(error.message);

    }

});   // closes catch

};     // closes createAccount

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

window.togglePassword=function(){

    const password=

    document.getElementById("password");

    if(password.type==="password"){

    password.type="text";

}

else{

    password.type="password";

}

}