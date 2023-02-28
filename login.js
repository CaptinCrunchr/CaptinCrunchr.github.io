
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");

username1= "Zar";
password1= "pinkkitties69";

// signupButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const username = signupForm.username.value;
//     const password = signupForm.password.value;
    
//     const myObj = {name: "bob", pass: "no"};
//     const myJSON = JSON.stringify(myObj);
//     localStorage.setItem("credentials", myJSON);


//     if (username != null  && password != null) {
//         alert("You have successfully signed up.");
//         location.href="https://captincrunchr.github.io/accountcreate.html";
//     } else {
//         loginErrorMsg.style.opacity = 1;
//     }
// })

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === username1 && password === password1) {
        alert("You have successfully logged in.");
        location.href="https://captincrunchr.github.io/Main.html";;
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})