const   slide= document.querySelectorAll(".sliders li"),
    slides=document.querySelector(".sliders"),
    slideLetter=document.querySelector("slideLetter"),
    slider2Img=document.querySelector(".sliders2 li img"),
    slider2Img2=document.querySelector("#section22"),
    slider2Img3=document.querySelector("#section23"),
    slider2Img4=document.querySelector("#section24"),
    slider2Img5=document.querySelector("#section25"),
    slideWidth=340,
    slideMargin=20,
    prevBtn= document.querySelector("#leftI"), 
    nextBtn= document.querySelector("#rightI");
    

let currentIdx =0,
    slideCount=slide.length;

    makeClone();
    
    function setInitialPos(){
        let initialTranslateValue=-(slideWidth+slideMargin+1)*slideCount;
        slides.style.transform= `translateX(${initialTranslateValue}px)`;
        //
    }
function makeClone(){
    for(var i=0; i<slideCount; i++){
        let cloneSlide = slide[i].cloneNode(true);
        //a.cloneNode()는 a 클론, true 있으면 자식까지 클론
        cloneSlide.classList.add('clone');
        //a.appendChild(b) 는 a 의 뒤에 b 추가
        slides.appendChild(cloneSlide);
    }
    for(let i= slideCount-1; i>=0;i--){
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        //a.prepend(b) 는 a 의 앞에 b 추가
        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPos();
    setTimeout(function(){
        slides.classList.add('animated');
    },100);
    
}
function updateWidth(){
    let currentSlides =document.querySelectorAll(".sliders li");
    let newSlideCount = currentSlides.length;
    let newWidth = (slideWidth+slideMargin+1)*newSlideCount-slideMargin+'px';
    slides.style.width = newWidth;
}



slider2Img.addEventListener('click',function(){
    window.location = 'https://blog.naver.com/kky1373';
});
slider2Img2.addEventListener('click',function(){
    window.location = 'https://fontawesome.com/icons/arrow-right?s=thin&f=classic';
});
slider2Img3.addEventListener('click',function(){
    window.location = 'https://fontawesome.com/icons/arrow-right?s=thin&f=classic';
});
slider2Img4.addEventListener('click',function(){
    window.location = 'https://fontawesome.com/icons/arrow-right?s=thin&f=classic';
});
slider2Img5.addEventListener('click',function(){
    window.location = 'https://fontawesome.com/icons/arrow-right?s=thin&f=classic';
});
//추천 게시글 링크 불러오기


nextBtn.addEventListener('click',function(){
    moveSlide(currentIdx+1);
});
prevBtn.addEventListener('click',function(){
    moveSlide(currentIdx-1);
});

function moveSlide(num){
    slides.style.left = -num*(slideWidth+slideMargin+1)+'px';
    currentIdx=num;
    console.log(currentIdx,slideCount);
    if(currentIdx==slideCount || currentIdx==-slideCount){
        setTimeout(function(){
        slides.classList.remove('animated');
        slides.style.left='0px';
        currentIdx = 0;
        },500);
        setTimeout(function(){
            slides.classList.add('animated');
            slides.style.left='0px';
            currentIdx = 0;
        },600);
        
    };

}
////////////////////

const hwBtn=document.querySelector("#hWBtn");

hwBtn.addEventListener('click',()=>{
    window.location = 'http://127.0.0.1:5500/research/research.html';
})