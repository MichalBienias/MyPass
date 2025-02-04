import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js';
import { auth } from '../firebaseConfig.js';

const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {                     // On Click, get data and check //
    event.preventDefault()

    const email = document.getElementById("email")
    const password = document.getElementById("password")

    signInWithEmailAndPassword(auth, email.value, password.value)       // Run imported method to log in user and check if credentials pass//
        .then((userCredential) => {
            const currentUser = userCredential.user;                    // Signed In and Current User const is modified //
            console.log(currentUser);
            window.location.href = `profile.html?uid=${currentUser.uid}`;      // Open Profile.html and load Current User data //
        })
        .catch((error) => {
            const errorCode = error.code;                               // Display Any Errors //
            const errorMessage = error.message;
        });

})