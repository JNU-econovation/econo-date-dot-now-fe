
const emailInput = document.querySelector("#email"),
    pswordInput = document.querySelector("#password"),
    loginBtn = document.querySelector(".login-button"),
    errorMessage = document.querySelector(".error-message"),
    form = document.querySelector(".login-form");

function errorEmail(){
    errorMessage.innerText="이메일을 입력해 주세요"
}

function errorPassword(){
    errorMessage.innerText="비밀번호를 입력해 주세요"
}

function login() {

    if (emailInput.value === "") {
        errorEmail();
    } else if (pswordInput.value === "") {
        errorPassword();
    } else {
        errorMessage.innerText="";
        console.log(emailInput.value, pswordInput.value);

        axios.post("", {email: emailInput.value, password: pswordInput.value})
        location.href="../boardPage"
    }
}

function handleFormEnter(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        login();
    }
}

function handleButtonClick() {
    login();
}


loginBtn.addEventListener("click", handleButtonClick);
form.addEventListener("submit", handleFormEnter);



