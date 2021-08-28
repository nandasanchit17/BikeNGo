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
  const email = username;
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      window.alert("We have mailed you a link to reset your password!");
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      window.alert(errorMessage);
    });
  }
function getInputVal (id) {
  return document.getElementById (id).value;
}
