
const corabList = document.querySelector(".corab-list");
const corabcost = document.querySelector("#firstcorab");
const corabTime = document.querySelector("#secondcorab");
const corabkeyword = document.querySelector("#real");
const corabcontent = document.querySelector("#real2");
const plus = document.querySelector(".plusBtn");
let timeSum = 0;
let costSum = 0;

plus.addEventListener('click', makeCorab);

function makeCorab() {
    localStorage.getItem('token');
    
    const data = {keyword:corabkeyword.value,expCost:corabcost.value, expHour:corabTime.value,content:corabcontent.innerText }
    axios.post("api/v1/posts/{postId}/postmaps/{userId}",data,{headers:{"Authorization": token}})
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })

    
    timeSum+=Math.floor(corabcost.value);
    costSum +=Math.floor(corabTime.value);
  const corab = document.createElement("li");
  corab.dataset.num = Date.now();

  corab.innerHTML = ` <div>
                    <div>
                        <div class="corab1">
                            예상비용*
                        </div>
                        <div class="corab-cost" id="fir">${corabcost.value}</div>
                    </div>
                    <div>
                        <div class="corab3">
                            예상시간*
                        </div>
                        <div class="corab-time" placeholder="숫자로 입력"  id="se">${corabTime.value}</div>
                    </div>
                </div>
                <div>
                    <div class="corab corab-location" id="cc" ><p>${corabkeyword.value}</p></div>
                    <div class="corab corab-content" id="aa" name="content">${corabcontent.innerText}</div> 
                </div>
                <button class="trashBtn">
                <i class="fa-solid fa-arrow-up"></i>
                <i class="fa-solid fa-arrow-down"></i>
                </button>`;
                
                corabcost.value='';
                corabTime.value='';
                corabkeyword.value='';
                corabcontent.innerText='';
  const innerDeleteButton = document.createElement('i');
  innerDeleteButton.innerHTML=`<i class="fa-regular fa-trash-can"></i>`;
  innerDeleteButton.classList.add('trashBtn');


  corab.appendChild(innerDeleteButton);
  
  corabList.appendChild(corab);

  innerDeleteButton.addEventListener('click', deleteCorab);
 
}
function deleteCorab(e) {
    const selectCorab = e.target.closest('li');
    selectCorab.remove();
    // selectCorab.dataset.num
    // axios.delete('api/v1/posts/postmaps/{postMapId}/{userId}')
  }


  




//     let jwt_token = 'dsfsfff';
//     //localStorage.getItem('jwt-token');
//     corabList.push({keyword:corabLocation[r],expCost:TCs[r],expHour:TTs[r], content:corabContent[r]});
//         axios.post("api/v1/posts/{postId}/postmaps/{userId}",corabList[r],{headers:jwt_token})
//             .then(res=>{
//                 console.log(res);
//             })
//             .catch(err=>{
//                 console.log(err);
//             })

//     r++;
// })