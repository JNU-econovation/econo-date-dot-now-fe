
    
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
////////////////////////////////////////////


