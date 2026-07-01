import { app } from "./firebase.js";

import {
    getAuth,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
    getFirestore,
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const auth = getAuth(app);
const db = getFirestore(app);

window.createAccount = async function () {

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;

    if(firstName === "" || email === "" || password === "" || age === ""){

        alert("Please fill in all required fields.");
        return;

    }

    try{

        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;

        await setDoc(doc(db,"users",user.uid),{

            firstName:firstName,
            lastName:lastName,
            email:email,
            age:Number(age),
            gender:gender,
            level:1,
            xp:0,
            gold:0,
            createdAt:new Date().toISOString()

        });

        alert("Character Created!");

        location.href="landing.html";

    }

    catch(error){

        alert(error.message);

    }

};