const confirmbutton= document.querySelector(".confirm_button");
const id= document.querySelector("input[name='id']");
const Email= document.querySelector("input[name='email']");
const notice_Red1= document.querySelector("#red1");


confirmbutton.addEventListener("click", (e)=>{
  if(id.value ==="" || Email.value ===""){
    notice_Red1.innerText=("아이디와 이메일을 입력해주세요");
  }
}) 