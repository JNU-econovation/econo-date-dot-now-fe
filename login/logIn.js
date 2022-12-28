
"use strict";

const email = document.querySelector("#email1"), 
    psword = document.querySelector("#passwordbox"),
    loginBtn = document.querySelector(".logInButton"),
    eM = document.querySelector(".errorMessage");

let check="";
loginBtn.addEventListener("click",login);

email.addEventListener("keyup",enterkey);
psword.addEventListener("keyup",enterkey);


function enterkey(event) {
	if (event.keyCode === 13) {
        login1();
    }
}


 //엔터를 하려면 preventDefault()를 못 읽나 ?


function errorMessage1(){
    eM.innerText="이메일을 입력해 주세요"
    
}
function errorMessage2(){
    eM.innerText="비밀번호를 입력해 주세요"
}

function login(event){
    event.preventDefault();
    const logInUserInfo = {
        email : email.value,
        psword : psword.value
    };

    if(logInUserInfo.email==check && logInUserInfo.psword==check||logInUserInfo.email==check && logInUserInfo.psword!=check){
        errorMessage1();
    }else if(logInUserInfo.email!=check && logInUserInfo.psword==check){
        errorMessage2();
    }else{
        eM.innerText="";
        /* 나중에 하기!!
        fetch("//url//", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body : JSON.stringify(logInUserInfo),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success){ //유효성 검사. 로그인 성공의 key값이 success라면 
                    location.href = " "; // 로그인 성공 시 이동 링크(홈화면링크)
                }else {
                    //로그인 안됐을때. 빨간 글씨로 경고 문자 띄우기. (이메일 또는 비번 잘못입력했습니다)
                }         
            })
            .catch((err)=> {
                console.error(new Error("로그인 에러 발생"));
            }); // 에러났을 때 ...
        */
    }
    console.log(logInUserInfo);



}



function login1(event){
    
    const logInUserInfo = {
        email : email.value,
        psword : psword.value
    };

    if(logInUserInfo.email==check && logInUserInfo.psword==check||logInUserInfo.email==check && logInUserInfo.psword!=check){
        errorMessage1();
    }else if(logInUserInfo.email!=check && logInUserInfo.psword==check){
        errorMessage2();
    }else{
        eM.innerText="";
        /* 나중에 하기!!
        fetch("//url//", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body : JSON.stringify(logInUserInfo),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success){ //유효성 검사. 로그인 성공의 key값이 success라면 
                    location.href = " "; // 로그인 성공 시 이동 링크(홈화면링크)
                }else {
                    //로그인 안됐을때. 빨간 글씨로 경고 문자 띄우기. (이메일 또는 비번 잘못입력했습니다)
                }         
            })
            .catch((err)=> {
                console.error(new Error("로그인 에러 발생"));
            }); // 에러났을 때 ...
        */
    }
    console.log(logInUserInfo);



}




