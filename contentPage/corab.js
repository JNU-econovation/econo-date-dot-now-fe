


const corabUl = document.querySelector(".corabBox");

const plusBtn = document.querySelector(".plusBtn i");
let final1=document.querySelector("#final1");
let final2=document.querySelector("#final2");
const trashBtn=document.querySelector("#dd");
const submitBtn=document.querySelector(".subMit");
const firstcorab=document.querySelector("#firstcorab");
const secondcorab=document.querySelector("#secondcorab");
const cc=document.querySelector("#cc");
const aa=document.querySelector("#aa");
const submitButton=document.querySelector(".submitBtn");
const category= document.querySelector(".questionWhere");

let id=1;
const costInfo = [];


function deleteCorab(e){
    //e.preventDefault();
    const deleteLi =e.target.closest('li')
    deleteLi.remove();
}


function makeCorab(){
    
    const corabbox = document.createElement("li");
    corabbox.dataset.num=Date.now();
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
        <input class="corab" id="location" contenteditable="true" placeholder="위치 혹은 장소를 입력해 주세요." >

        </input>
        <div class="corab" id="corabContent" name="content" contenteditable="true">

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

/////////////////해시태그////////////
///////////////////////////////
const hashTag = document.querySelector(".hashTag");
const hashTagList = document.querySelector(".hashTagList");
let hashTagArr =[];


function deleteHashTag(event){
    event.preventDefault();
    const deleteH =event.target.closest('li');
    deleteH.remove();
    for(i=0;i<hashTagArr.length;i++){
        if(parseInt(hashTagArr[i].id)===parseInt(deleteH.dataset.num)){
            hashTagArr.splice(i,1);
        }
    };
    //hashTagArr = hashTagArr.filter((hTA)=>hTA.id)!==parseInt(deleteH.dataset.num);  
    
    
}

hashTag.addEventListener('keyup', function(event) {
    if (event.keyCode === 32)
    {
        event.preventDefault();
        makeHashtags();
    }
    else if (event.keyCode === 13){
        event.preventDefault();
        makeHashtags();
    }
});
function makeHashtags(){
    
    const hash = document.createElement("li");
    hash.dataset.num=Date.now();
    
    
    hash.innerHTML = `#${hashTag.value}`;
    hashTagList.appendChild(hash);
    
    hashTagArr.push({text:`#${hashTag.value}`, id:hash.dataset.num,});
    hashTag.value=null;
    const deleteHash =document.createElement("i");
    deleteHash.innerHTML=`<i class="fa-solid fa-square-xmark"></i>`
    hash.appendChild(deleteHash);
    deleteHash.addEventListener('click',deleteHashTag);
    
    
}
//////////////////////////////////////////////


////////////toast ui////////////////
const Editor=toastui.Editor;
const editor = new toastui.Editor({
    el: document.querySelector('#editor'),
    previewStyle: 'vertical',
    
    initialEditType:'wysiwyg',
    hideModeSwitch: true,
    
        toolbarItems: [
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ]
    
});

/////////////////발행////////////////////////////////////////////

submitButton.addEventListener('click',(e)=>{
    const now = new Date();	// 현재 날짜 및 시간
   

    
    const totalTitle = document.querySelector(".boardTitle");

    const TCs=document.querySelectorAll(".corab2");
        const TTs=document.querySelectorAll(".corab4");
        const corabContent = document.querySelectorAll("#corabContent");
        const corabLocation = document.querySelectorAll("#location");
//form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if (totalTitle.value == "") {
        alert('제목을 입력해주세요.');
        totalTitle.focus();
      } else if (hashTagArr.length <= 0) {
        alert('해시태그를 입력해주세요. ');
        hashTag.focus();
      } else{
        
        
        costInfo.push({content : aa.innerText, keyword : cc.value,
            expCost : firstcorab.value,expTime:secondcorab.value});
        
    
        for(let i=0;i<TCs.length;i++){
            costInfo.push({ content : corabContent[i].innerText, keyword : corabLocation[i].value,
                expCost : TCs[i].value, expTime:TTs[i].value});
        }
    
       
        console.log(costInfo);
        console.log(addressInformation);
        console.log(hashTagArr);
        
        console.log(now);
        console.log(editor.getHTML());
        console.log(fileDOM.files[0]);
        console.log(fileDOM);


/*
        data= {
            title : totalTitle.value,
            content : editor.getHTML(),
            hashtag : hashTagArr,
            category : category.value, //정해야됨
            postMapList : costInfo,
            mapList : addressInformation,
            
            id: Date.now(),
            imageUrl: fileDOM.value,
            createdAt: now,  // 시분초도 같이 보내야 하는지 물어보기
    };

        /////////////////////////////ajax////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

axios.post("http//w",data)
    .then((response) => {
    // 응답 처리 -> contentLook 페이지로 이동
  })
    .catch((error) => {
    // 예외 처리
  })

*/

  
  const addCustomer = () => {
  const url ="http//w";
  
  const formData = new FormData();
  formData.append("content",editor.getHTML());
  formData.append("title", totalTitle);
  
  for(i=0;i<hashTagArr.length;i++){
    formData.append("hashtag["+i+"]",hashTagArr[i]);
  };
  formData.append("category" , category.value);
  for(i=0;i<costInfo.length;i++){
    formData.append("postMapList["+i+"]",costInfo[i]);
  }
  for(i=0;i<addressInformation.length;i++){
    formData.append("mapList["+i+"]",addressInformation[i]);
  }
  formData.append("mapList" , addressInformation);
  formData.append("id", Date.now());
  formData.append("createdAt", now);
  formData.append("imageUrl", fileDOM.files[0]);
  

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  return axios.post(url, formData, config);
  
};
addCustomer();




        
      }
   
}
);


/*

    $.ajax({
        url: "", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
        data: {
            title : totalTitle,
            content : editor.getHTML(),
            hashtag : hashTagArr,
            category : "맛집탐방", //정해야됨
            postMapList : costInfo,
            mapList : addressInformation,
            
            id: Date.now(),
            imageUrl: fileDOM.value,
            createdAt: now,  // 시분초도 같이 보내야 하는지 물어보기
    },                // HTTP 요청과 함께 서버로 보낼 데이터
        method: "POST",                           // HTTP 요청 방식(GET, POST)
        dataType: "json"                         // 서버에서 보내줄 데이터의 타입
    })
    
        // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
        .done(function(json) {
        })
    
        // HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
        .fail(function(xhr, status, errorThrown) {
        })
    
        // HTTP 요청이 성공하거나 실패하는 것에 상관없이 언제나 always() 메소드가 실행됨.
        .always(function(xhr, status) {
        });




*/