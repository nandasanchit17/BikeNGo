var firebaseConfig = {
  apiKey: 'AIzaSyAju71HkJoD6660FikrzPDoR-f_vFHUu6I',
  authDomain: 'bikengo-b86b3.firebaseapp.com',
  databaseURL: 'https://bikengo-b86b3-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'bikengo-b86b3',
  storageBucket: 'bikengo-b86b3.appspot.com',
  messagingSenderId: '220942046313',
  appId: '1:220942046313:web:7149ad3373196b2355fef8',
  measurementId: 'G-69E9CLHVHV',
};
firebase.initializeApp (firebaseConfig);

document.getElementById('login').addEventListener('submit', submitForm);

function submitForm(e){
  
  e.preventDefault();

  var username = getInputVal('username');
  var password = getInputVal('password');
  var email = username;
  var password = password;

  // [START auth_signin_password]
  firebase.auth ().signInWithEmailAndPassword (email, password).then (userCredential => {
      // Signed in
      var user = userCredential.user;
      // ...
      document.querySelector ('.screen1').style.display = 'none';
      document.querySelector ('.after-login').style.display = 'block';
      document.querySelector ('.footer-bar-1 .navbar-hide').style.display = 'block';
      document.querySelector ('.footer-bar-1 .navbar-hide1').style.display = 'block';
      document.querySelector ('.footer-bar-1 .navbar-hide2').style.display = 'block';

    })
    .catch (error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      document.querySelector ('.alert').style.display = 'block';

    });
  // [END auth_signin_password]
}
function getInputVal (id) {
  return document.getElementById (id).value;
}
