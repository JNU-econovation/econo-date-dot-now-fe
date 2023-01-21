



const totalTitle = document.querySelector(".boardTitle");
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
const formData = new FormData();
let id=1;
const now = new Date();	
let costInfo=[];
//const map= document.querySelectorAll(map);

/////////////////발행////////////////////////////////////////////

submitButton.addEventListener('click',(e)=>{
     const TCs=document.querySelectorAll(".corab-cost");
        const TTs=document.querySelectorAll(".corab-time");
        const corabContent = document.querySelectorAll("div.corab");
        const corabLocation = document.querySelectorAll("input.corab");
        const now = new Date();	// 현재 날짜 및 시간

        console.log(corabContent[0].innerText);

        const totalTitle = document.querySelector(".boardTitle");
        const addCustomer = () => {
            const url ="http//w";
            
            formData.append("title", totalTitle.value);
            formData.append("content",editor.getHTML());
            //
            let hasharr=[]
            hashTagArr.forEach(element => {
                hasharr.push(element.text);
            });
            formData.append("hashtag",JSON.stringify(hasharr));
            
            formData.append("id", Date.now());
            formData.append("createdAt", now);
//  ///////////////
            for(let i=0;i<TCs.length;i++){
                formData.append("postMapLists",JSON.stringify({ content : corabContent[i].innerText, keyword : corabLocation[i].value,
                    expCost : TCs[i].value, expTime:TTs[i].value}));
            }
            formData.append("postMapList",formData.getAll("postMapLists"));
            formData.delete("postMapLists");




            for(let i=0;i<addressInformation.length;i++){
                formData.append("mapLists",JSON.stringify({ keyword : addressInformation[i].keyword, lat : addressInformation[i].lat,
                    lng : addressInformation[i].lng}));
            }
            formData.append("mapList",formData.getAll("mapLists"));
            formData.delete("mapLists");

            
            const blob = new Blob([JSON.stringify(fileDOM.files[0])], {
                type: 'application/json',
            });

            
            formData.append("imageUrl", blob);
            const config = {
              headers: {
                "content-type": "multipart/form-data",
              },
            };
            return axios.post(url, formData, config);
            
          };
          addCustomer();
})
    
  