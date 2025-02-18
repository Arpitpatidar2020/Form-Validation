let username = document.getElementById('username');
let password = document.getElementById('password');

function validateForm() {
    let flag = true;

    // Username validation
    if (username.value === "") {
        document.getElementById('userError').innerHTML = "User Name is empty";
        flag = false;
    } else if (username.value.length < 3) {
        document.getElementById('userError').innerHTML = "User Name requires min of 3 char";
        flag = false;
    } else {
        document.getElementById('userError').innerHTML = "";
    }

    // Password validation
    if (password.value === "") {
        document.getElementById('passError').innerHTML = "Password is empty";
        flag = false;
    } else {
        document.getElementById('passError').innerHTML = "";
    }

    return flag;
}
