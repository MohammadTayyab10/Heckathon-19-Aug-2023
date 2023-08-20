import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
// import { collection, addDoc} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firetore.js"; 
// // import {app} from "./firebase.mjs";



  
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDmWj0eSMmP_z29jUMrDRUAn5uNX8EjOc4",
    authDomain: "mini-hackathon-4edb0.firebaseapp.com",
    projectId: "mini-hackathon-4edb0",
    storageBucket: "mini-hackathon-4edb0.appspot.com",
    messagingSenderId: "952995049497",
    appId: "1:952995049497:web:1475d65ba4e36e52657a88",
    measurementId: "G-CB0W9GKR4D"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
  const auth = getAuth(app);
  // var btn1 =document.getElementById("btn").addEventListener('click',signup)
  
  // var  btn= document.getElementById("btn")
 async function signup()
  
  {
    console.log("jdhjkdab");
    var fname=document.getElementById("fname").value
    var lname=document.getElementById("lname").value
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    // var address=document.getElementById("address").value
    // var country=document.getElementById("country").value

    // console.log(email,password);
    
    try {
        const docRef = await addDoc(collection(db, "Users"), {
            
            fname: fname,
            lname: lname,
            email: email,
            password: password,

        });
        
        console.log("Users Collection ID: ", docRef.id);
    
    } catch (e) {
    
        console.error("Users Collection Error --> ", e);
    
    }

    createUserWithEmailAndPassword(auth,email, password)
    .then(async(userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user:",user)
      alert("User Created");
      window.location.href="login.html"
      
      // firestore ka code he 
      
      // try {
      //   const docRef = await addDoc(collection(db, "users"), {
      //   //  Email:email,
      //   //  Password:password
      //   name:"jnasdnsa"
      //   });
      //   console.log("Document written with ID: ", docRef.id);
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error",errorMessage);
      // ..
    });
  

}

// Firestore user getting









window.signup=signup;

  export {app,auth}

 