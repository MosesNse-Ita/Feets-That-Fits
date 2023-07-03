// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUmYtAUsfOZG3XbCwGUBeEC7go5eWRdFQ",
  authDomain: "feets-authentication.firebaseapp.com",
  projectId: "feets-authentication",
  storageBucket: "feets-authentication.appspot.com",
  messagingSenderId: "589241135130",
  appId: "1:589241135130:web:6070c28a0b18ac399761a3"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

auth.onAuthStateChanged(function (user){
  if (user){
      var email = user.email;
      var user = document.getElementById("user");
      var text = document.createTextNode(email);
      user.appendChild(text);
      console.log(user);

      //is signed in
  } else {
      alert("user not authenticated, kindly login or signup");
      window.location = "index.html";
  }
});

//logout function

let signOutButton = document.getElementById("signout");
signOutButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("logout clicked");
  auth.signOut();
  alert("Signed out");
  window.location = "./index.html";
})