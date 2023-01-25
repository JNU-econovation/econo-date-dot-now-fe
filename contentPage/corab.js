



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




submitButton.addEventListener('click',(e)=>{
     
        const now = new Date();	// 현재 날짜 및 시간

        console.log(corabContent[0].innerText);

        const totalTitle = document.querySelector(".boardTitle");
        const addCustomer = () => {
            const url ="api/v1/posts/{Long:userId}";
            
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
            return axios.post(url, formData, config).then(window.location = '/boardPage/');
            
          };
          addCustomer();
})
    
//history.pushState({data: '로그아웃'}, "", "/homepage/user");
