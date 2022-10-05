  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  
  import { 
    getDatabase, 
    set, 
    ref, 
    update } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
  
    import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyALDM-rWH_p2mMN7UwTIpUW6bBvhpEpO0Y",
    authDomain: "istra-22613.firebaseapp.com",
    databaseURL: "https://istra-22613-default-rtdb.firebaseio.com",
    projectId: "istra-22613", 
    storageBucket: "istra-22613.appspot.com",
    messagingSenderId: "256977020635",
    appId: "1:256977020635:web:87916d84d8ad0fb4564efe"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

  // New user

  registerSubmit.addEventListener ("click",(e) =>{
    e.preventDefault();

      var username = document.getElementById ("registerUsername").value;
      var email = document.getElementById ("registerEmail").value;
      var password = document.getElementById ("registerPassword").value;

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        
        set(ref(database, "users/" + user.uid),{
          username: username,
          email:email
        })
        alert("user created!")
        console.log(userCredential.user);

      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          alert(errorMessage)
          console.log(errorMessage);
      })
    });

    // Login user

    logIn.addEventListener ("click", (e) => {
    e.preventDefault();

      var email = document.getElementById ("loginEmail").value;
      var password = document.getElementById ("loginPassword").value;

      signInWithEmailAndPassword (auth, email, password)
      .then ((userCredential) => {
        const user = userCredential.user;


        const dt = new Date();
        update(ref(database, "users/" + user.uid),{
          last_login: dt,
          
        })
        alert("user loged in!");

        console.log(userCredential.user);

      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage)

        console.log(errorMessage);
      });
    });



    const user = auth.currentUser
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid; 
      } else {
      }
    });

    logout.addEventListener("click", (e) => {
      signOut(auth).then(() => {

        alert("user loged out!");

      }).catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage)

        console.log(errorMessage);

      });
    })




 