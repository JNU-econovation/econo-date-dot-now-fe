const corabUl = document.querySelector(".corabBox");
const plusBtn = document.querySelector(".plusBtn i");
let final1=document.querySelector("#final1");
let final2=document.querySelector("#final2");
const trashBtn=document.querySelector("#dd");
const submitBtn=document.querySelector(".subMit");
const firstcorab=document.querySelector("#firstcorab");
const secondcorab=document.querySelector("#secondcorab");
const submitButton=document.querySelector(".submitBtn");

const form = document.querySelector(".reg-box form");
let id=1;
const costInfo = [];



    
    
    
    
  




function deleteCorab(e){
    //e.preventDefault();
    const deleteLi =e.target.closest('li')
    deleteLi.remove();
}

function makeCorab(){
    
    const corabbox = document.createElement("li");
    
    corabbox.innerHTML = 
        `<div>
        <div>
            <div class="corab1">
                예상비용*
            </div>
            <input  placeholder="숫자로 입력" class="corab2" name="content" contenteditable="true">

            </input>

        </div>
        <div>
            <div class="corab3">
                예상시간*
            </div>
            <input  placeholder="숫자로 입력" class="corab4" name="content" contenteditable="true">

            </input>

        </div>
    </div>
    <div>
        <input class="corab" contenteditable="true" placeholder="위치 혹은 장소 이름을 입력해 주세요." >

        </input>
        <div class="corab" name="content" contenteditable="true">

        </div>

    </div>
    
    <button class="trashBtn">
        <i class="fa-solid fa-arrow-up"></i>
        <i class="fa-solid fa-arrow-down"></i>
        
    </button>`;
    const button =document.createElement("i");
    button.innerHTML=`<i class="fa-regular fa-trash-can"></i>`;
    button.classList.add("trashBtn");
    const plButton =document.createElement("i");
    plButton.innerHTML=`<i class="fa-solid fa-circle-plus"></i>`;
    plButton.classList.add("noneBtn");
    corabUl.appendChild(corabbox);
    corabbox.appendChild(button);
    corabbox.appendChild(plButton);
    
    button.addEventListener('click',deleteCorab);
    plButton.addEventListener('click',makeCorab);
    
    
        // 플러스 버튼 누르고 최종비용 작성하면 그 최종비용이 계산돼서 innerHTMl로 들어감
        // 들어간 후 그 배열의 i는 1씩 커짐. +누를때마다 그 박스의 값이 계산돼서 넣어짐.
        
    
}
const finalBtn = document.querySelector(".finalBtn");
plusBtn.addEventListener("click",makeCorab);


finalBtn.addEventListener("click",(e)=>{
    const TCs=document.querySelectorAll(".corab2");
    const TTs=document.querySelectorAll(".corab4");
    let TCsPlus=Math.floor(firstcorab.value);
    let TTsPlus=Math.floor(secondcorab.value);
    for(let i=0;i<TCs.length;i++){
        TCsPlus+=Math.floor(TCs[i].value);
        TTsPlus+=Math.floor(TTs[i].value);
    }
    final1.innerText=TCsPlus;
    final2.innerText=TTsPlus;


});



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    costInfo.push({total_cost : firstcorab.value,total_time:secondcorab.value});
    const TCs=document.querySelectorAll(".corab2");
    const TTs=document.querySelectorAll(".corab4");

    for(let i=0;i<TCs.length;i++){
        costInfo.push({total_cost : TCs[i].value, total_time:TTs[i].value});
    }

    
    console.log(costInfo);
    console.log(addressInformation);
    console.log(hashTagArr);
});

