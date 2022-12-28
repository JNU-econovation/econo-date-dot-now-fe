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

    if(signInUserInfo.email == check){
        war1();
    }
    else{
        emailWarn.innerText="";
        }

    if(signInUserInfo.psword == check){
        war2();
    }
    else{
        pswordWarn.innerText="";
        }

    if(signInUserInfo.rePsword == check){
        war3();
    }
    else{
        repswordWarn.innerText="";
        if(signInUserInfo.rePsword != signInUserInfo.psword ){
            discode();
        }
        else{
            discord.innerText="";
            }
        }

    if(signInUserInfo.userName == check){
        war4();
    }
    else{
        nameWarn.innerText="";
        }

    
    if(signInUserInfo.veriNumber == check){
        war5();
    }
    else{
        certiWarn.innerText="";
        }    


            /*
            fetch("//url//", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body : JSON.stringify(signInUserInfo),
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
        
        console.log(signInUserInfo);}
    

    


    

    signInBtn.addEventListener("click",signIn);