
const container = document.querySelector('#modal_container');
const login = document.querySelector('#login_btn');
const signUpButton = document.querySelector('#signup_btn');

const closeModal = document.querySelector('#modal_close');


const username = document.querySelector('#username');
const password = document.querySelector('#password');
const error = document.querySelector('#error');

signUpButton.addEventListener('click', () => {
    container.style.display = 'flex';
})

closeModal.addEventListener('click', () => {
    container.style.display = 'none';
});

login.addEventListener('click', () => {
    // window.location.href = "quiz-app.html";
    if(username.value == 'Akash99' && password.value == '1234'){
        window.location.href = "quiz-app.html";
    }
    else{
        error.innerHTML = "Username or Password is invalid";
    }
});

