import { auth, db } from '../firebaseConfig.js'
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js';
import { setDoc, doc } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js';

const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
    event.preventDefault()

    // Inputs from HTML
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const phone = document.getElementById("phone").value

    createUserWithEmailAndPassword(auth, email, password )
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            // Add User to DB
            setDoc(doc(db, "users", user.uid), {
                name: name,
                email: email,
                phone: phone,
                password: password,
                userID: user.uid
            })
            .then(() => {
                // Open Profile HTML
                window.location.href = `profile.html?uid=${user.uid}`;
            })
        })
        .catch((error) => {
            console.log(error.code)
            console.log(error)
        });
    
})

