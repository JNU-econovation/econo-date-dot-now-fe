const fileDOM = document.querySelector('#ex_file2');

const preview = document.querySelector('.image-box');
const form = document.querySelector("form");
let i=1;
const addressPlus=document.querySelector('#addressPlus');

fileDOM.addEventListener('change', () => {
  const reader = new FileReader();
  reader.onload = ({ target }) => {
    preview.src = target.result;
  };
  reader.readAsDataURL(fileDOM.files[0]);
  
});

form.addEventListener('submit',(e)=>{
  e.preventDefault();
})








