
let reco = "13";
const comentCounts = document.querySelector(".comentCounts");

const recommendBtn = document.querySelector(".recommend");
const recommendsHeart1 = document.querySelector(".recommend div:nth-child(2)");
const recommendsHeart2 = document.querySelector(".recommend div:nth-child(3)");
const recommendsCount = document.querySelector(".g p:last-child");
//댓글 작성 누르면 백엔드한테 정보 보내주고 백엔드는 정보 디비에 넣은다음 나한테 보내주면
//내가 그 정보 가져와서 올려주고 id값이 일치하면 댓글 수정삭제할 수 있게 하는거 맞나?
const comment = document.querySelector(".jochudat p:last-child");


///추천기능
recommendsCount.innerText = reco; //추천수
recommendBtn.addEventListener('click',()=>{
    if(recommendsHeart2.classList.contains("icon")){
        recommendsHeart2.classList.remove("icon");
        recommendsHeart1.classList.add("icon");
        reco++;
    }

    else{
        recommendsHeart2.classList.add("icon");
        recommendsHeart1.classList.remove("icon");
        reco--;
    }
    
    recommendsCount.innerText = reco;
    
});



////////////////////////////////////////
//////댓글등록////////////////////////////
////////////////////////////////////////
const comentContent = document.querySelector(".comentContent");
const comentBtn = document.querySelector(".comentBtn");

comentBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(comentContent.innerText);
    comentContent.innerText=null;
})



