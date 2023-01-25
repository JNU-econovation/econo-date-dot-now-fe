



const totalTitle = document.querySelector(".boardTitle");


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
const formData = new FormData();
let id=1;
const now = new Date();	
let costInfo=[];
//const map= document.querySelectorAll(map);

/////////////////발행////////////////////////////////////////////


let postmap=[];
let maplist=[];
submitButton.addEventListener('click',(e)=>{
    const TCs=document.querySelectorAll(".corab-cost");
    const TTs=document.querySelectorAll(".corab-time");
    const corabLocation=document.querySelectorAll("input.corab");
    const corabContent=document.querySelectorAll("div.corab");


        const now = new Date();	// 현재 날짜 및 시간

       
        const totalTitle = document.querySelector(".boardTitle");
        const addCustomer = () => {
            const url ="api/v1/posts/{Long:userId}";

            for(let i=0;i<TCs.length;i++){
                postmap.push({ content : corabContent[i].innerText, keyword : corabLocation[i].value,
                    expCost : TCs[i].value, expTime:TTs[i].value});
            }
            console.log(postmap);
            formData.append('postmapList',postmap);

            for(let i=0;i<addressInformation.length;i++){
                maplist.push({ keyword : addressInformation[i].keyword, lat : addressInformation[i].lat,
                    lng : addressInformation[i].lng});
            }
            console.log(maplist);
            formData.append('mapList',maplist);
            
            formData.append("title", totalTitle.value);
            formData.append("content",editor.getHTML());
            //
            let hasharr=[]
            hashTagArr.forEach(element => {
                hasharr.push(element.text);
            });
            formData.append("hashtag",hasharr);
            
            formData.append("id", Date.now());
            formData.append("createdAt", now);
//  ///////////////
           
            
            const blob = new Blob([JSON.stringify(fileDOM.files[0])], {
                type: 'application/json',
            });

            
            formData.append("imageUrl", blob);
            const config = {
              headers: {
                "content-type": "multipart/form-data",
                "Authorization": token,
              },
            };
            return axios.post(url, formData, config)
                .then(window.location = `/boardPage`);
            
          };
          addCustomer();
})
    
//history.pushState({data: '로그아웃'}, "", "/homepage/user");
