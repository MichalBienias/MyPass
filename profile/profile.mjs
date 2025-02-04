import { db, auth } from '../firebaseConfig.js';
import { signOut } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js';
import { getDocs, collection } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js';

// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Extract the uid from the URL
const uid = getQueryParam('uid');
const userCollection =  collection(db, "users");

// Fetch and display user data
try {
    getDocs(userCollection)
    .then((snapshot) => {
        // Use forEach to iterate over documents
        snapshot.forEach((doc) => {
            if (doc.data().userID == uid){
                document.getElementById("name").innerText = doc.data().name || "N/A";
                document.getElementById("email").innerText = doc.data().email || "N/A";
                document.getElementById("phone").innerText = doc.data().phone || "N/A";
            }
        });
    })
    .catch((error) => {
        console.error('Error getting documents:', error);
    });
    
    
} catch (error) {
    console.error("Error fetching user data:", error);
}

const logoutButton = document.getElementById("logout");

logoutButton.addEventListener("click", function () {
    signOut(auth)
        .then(() => {
            console.log("User logged out successfully.");
            window.location.href = "../home/index.html";  // Redirect to login or homepage
        })
        .catch((error) => {
            console.error("Error logging out:", error);
        });
});