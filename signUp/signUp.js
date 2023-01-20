"use strict";
const email = document.querySelector("#email1"), 
    psword = document.querySelector("#passwordbox"),
    rePsword =document.querySelector("#repasswordbox"),
    userName = document.querySelector("#namebox"),
    birthYear = document.querySelector("#years"),
    birthMonth = document.querySelector("#month"),
    birthDay = document.querySelector("#days"),
    phoneNumber = document.querySelector("#PNInput"),
    getVerificationBtn = document.querySelector("#PNButton"),
    verification = document.querySelector("#getVerification"),
    signInBtn = document.querySelector("#signInButton"),
    emailWarn = document.querySelector("#emailwarn"),
    pswordWarn = document.querySelector("#pswordwarn"),
    repswordWarn = document.querySelector("#repswordwarn"),
    nameWarn = document.querySelector("#namewarn"),
    discord = document.querySelector("#discord"),
    certiWarn = document.querySelector("#certiwarn");


const check="";



function war1(){
    emailWarn.innerText="필수 정보입니다."
        
    };
function war2(){
    pswordWarn.innerText="필수 정보입니다."
        
    };
function war3(){
    repswordWarn.innerText="필수 정보입니다."
        
    };
function discode(){
    discord.innerText="비밀번호가 일치하지 않습니다."
            
    };
function war4(){
        nameWarn.innerText="필수 정보입니다."
        
    };
function war5(){
        certiWarn.innerText="필수 정보입니다."
        
    };

function signIn(event){
    event.preventDefault();
    if (email.value == check ) {
       war1();
    } else if (psword.value == check) {
        emailWarn.innerText="";
        war2();
    } else if(rePsword.value == check){
        war3();
        pswordWarn.innerText=""
    } else if(rePsword.value !== psword.value ){
        discode();
        repswordWarn.innerText="";
    }else if(userName.value == check){
        discord.innerText="";
        war4();
    }else if(verification.value == check){
        nameWarn.innerText="";
        war5();
    }else{
        certiWarn.innerText="";
        const signInUserInfo = {
            email : email.value,
            psword : psword.value,
            rePsword:rePsword.value,
            userName:userName.value,
            birthYear:birthYear.value,
            birthMonth:birthMonth.value,
            birthDay:birthDay.value,
            phoneNumber:phoneNumber.value,
            veriNumber:verification.value,
    
        };
        axios.post("", signInUserInfo);
        //location.href="../boardPage"//로그인화면으로 가기.
    }

}

    signInBtn.addEventListener("click",signIn);