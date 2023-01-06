const posts = document.querySelector(".post");
const pageButtons = document.querySelector(".pageButtons");

const numOfContent = 112;
const showContent = 9;
const showButton = 10;
let maxContent= 9;
let maxButton = 10;
const maxPage = Math.ceil(numOfContent / maxContent);
let page = 1;


function makeContents(location,postOption,title,postContents,profilePhoto,profileName,userLook){
    const content = document.createElement("li");
    content.classList.add("box");
    content.innerHTML = 
    `
    <img src="https://placeimg.com/390/250" alt="">
    
    <div class="blackBox">
        <i class="fa-solid fa-location-dot"></i>
        <p>${location}</p></div>

    <div id="title" >
        <span>${postOption}</span>
        <span>${title}</span>
    </div>
    <div id="postContents" >${postContents}</div>
    <div class="userAndLook" >
        <div id="user">
            <img src=${profilePhoto} alt="">
            <span>${profileName}</span>
        </div>
        
        <div id="look">
            <i class="fa-regular fa-eye"></i>
            <span>${userLook}</span>
        </div>
    </div>`
        
    ;
    posts.appendChild(content);
}



    



//밑에 페이지 태그
const makeButton = (id) => {
    const button = document.createElement("pageButtons");
    button.classList.add("button");
    button.dataset.num = id;
    button.innerText = id;
    button.addEventListener("click", (e) => {
        //Array.prototype.forEach.call(pageButtons.children, (button) => {
        [].forEach.call(pageButtons.children, (button) => {
        if (button.dataset.num) button.classList.remove("active");
        });
        e.target.classList.add("active");
        renderContent(parseInt(e.target.dataset.num));
    });
    return button;
    };
//위에button -> buttons 로 바꾸고 buttons.forEach(button넣기) 로 
///////////////////////////////////////////////////

const goPrevPage = () => {
    page -= maxButton;
    render(page);
  };
  
  const goNextPage = () => {
    page += maxButton;
    render(page);
  };
  
  const prev = document.createElement("button");
  prev.classList.add("button", "prev");
  prev.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
  prev.addEventListener("click", goPrevPage);
  
  const next = document.createElement("button");
  next.classList.add("button", "next");
  next.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
  next.addEventListener("click", goNextPage);






///////////////////////////////////////////////////////////


const renderContent = (page) => {
    // 목록 리스트 초기화
    while (posts.hasChildNodes()) {
        posts.removeChild(posts.lastChild);
      }
    
    // 글의 최대 개수를 넘지 않는 선에서, 화면에 최대 10개의 글 생성
    for (let id = (page - 1) * maxContent + 1; id <= page * maxContent && id <= numOfContent; id++) {
        makeContents("동명동","맛집탐방",`${id}감성카페랑 제목`,"안녕하세요 포스트 내용이 들어갈 자리 입니다.","https://placeimg.com/25/25","에코노","100" );


    }
  };
  
  const renderButton = (page) => {
    // 버튼 리스트 초기화
    while (pageButtons.hasChildNodes()) {
        pageButtons.removeChild(pageButtons.lastChild);
      }
    
    // 화면에 최대 5개의 페이지 버튼 생성
    for (let id = page; id < page + maxButton && id <= maxPage; id++) {
        pageButtons.appendChild(makeButton(id));
    }
    // 첫 버튼 활성화(class="active")
    pageButtons.children[0].classList.add("active");
  
    pageButtons.prepend(prev);
    pageButtons.append(next);
  
    // 이전, 다음 페이지 버튼이 필요한지 체크
    if (page - maxButton < 1) pageButtons.removeChild(prev);
    if (page + maxButton > maxPage) pageButtons.removeChild(next);
  };
  
  const render = (page) => {
    renderContent(page);
    renderButton(page);
  };

  render(page);


////////////////////////////////////////////////////////


const postsClicks = document.querySelectorAll(".box img:nth-child(2n + 1)");
function transPost(link, event){
    event.preventDefault();
    window.location = link;
}
postsClicks.forEach(postClick => postClick.addEventListener("click", (event) => {transPost('https://nohack.tistory.com/125', event)}));

/* uri 형식
`/post/${postId}`
*/