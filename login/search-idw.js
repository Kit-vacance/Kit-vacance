const confirmbutton= document.querySelector(".confirm_button");
const Name=document.querySelector("input[name='name']");
const Email= document.querySelector("input[name='email']");
const notice_Red1= document.querySelector("#red1");


confirmbutton.addEventListener("click", (e)=>{
  if(Name.value ==="" || Email.value ===""){
    notice_Red1.innerText=("이름과 이메일을 입력해주세요");
  }
}) 

