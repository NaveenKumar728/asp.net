import {
  auth,
  createUserWithEmailAndPassword,
  database,
  signInWithEmailAndPassword,
  set,
  ref,
  update,
} from './../database/firebase.js';
const register = document.getElementById('register');

//Register
register.addEventListener('submit', (event) => {
  event.preventDefault();

  validateRegister();
});

//Validation error
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const error = inputControl.querySelector('.error');
  error.textContent = message;
  inputControl.style.border = '1px solid red';
  inputControl.style.borderRadius = '30px';
};

// Validation success
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const error = inputControl.querySelector('.error');
  error.textContent = '';
  inputControl.style.border = '1px solid green';
  inputControl.style.borderRadius = '30px'
};

// Input validation
const validateRegister = () => {
  const name = document.getElementById('fullNameReg').value;
  const email = document.getElementById('emailReg').value;
  const password = document.getElementById('passwordReg').value;
  const success = document.querySelector('.success')
  const re =
    /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (name == '') {
    setError(fullNameReg, 'Name required');
  } else {
    setSuccess(fullNameReg);
  }

  if (email == '') {
    setError(emailReg, 'Email required');
  } else if (!re.test(email)) {
    setError(emailReg, 'Invalid email');
  } else {
    setSuccess(emailReg);
  }

  if (password == '') {
    setError(passwordReg, 'Password required');
  } else if (password.length < 6) {
    setError(passwordReg, 'Password must be 6 letters');
  } else {
    setSuccess(passwordReg);
  }

  if (name != '' && email != '' && password != '') {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        set(ref(database, 'users/' + user.uid),{
          username: name,
          email: email
        })
        
        success.textContent = 'User Created'
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
};

//Sign in
const signIn = document.getElementById('signIn')

signIn.addEventListener('submit', (e) => {
  e.preventDefault()

  validateSignIn()
})

const validateSignIn = () => {
  const email = document.getElementById('emailSignin').value;
  const password = document.getElementById('passwordSignin').value;
  const alert = document.querySelector('.invalid')
  const re =
  /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if(email == '') {
    setError(emailSignin, 'Email required')
  }else if(!re.test(email)){
    setError(emailSignin, 'Email is invalid')
  }else {
    setSuccess(emailSignin)
  }

  if (password == '') {
    setError(passwordSignin, 'Password required');
  } else if (password.length < 6) {
    setError(passwordSignin, 'Password must be 6 letters');
  } else {
    setSuccess(passwordSignin);
  }
  
  if (email != '' && password != '') {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const date = new Date
    update(ref(database, 'users/' + user.uid),{
      last_login : date
    })
    window.location.href="./../components/prime.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert.textContent = 'Invalid Email or Password'
  });
  }
}
