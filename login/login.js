const searchid= document.querySelector(".search_idw");
const searchpw= document.querySelector(".search_pww");
const joinbutton= document.querySelector(".join_button2");
const loginbutton= document.querySelector(".login_button2");
const id= document.querySelector("input[name='id']");
const pw=document.querySelector("input[name='password']");
const notice_Red1= document.querySelector("#red1");

  searchid.addEventListener("click", (e)=>{
    window.location.href="search-idw.html";
  })

  searchpw.addEventListener("click", (e)=>{
    window.location.href="search-pww.html";
  })

  joinbutton.addEventListener("click", (e)=>{
    window.location.href="../join/join.html";
  })

  loginbutton.addEventListener("click", (e)=>{
    if(id.value ==="" || pw.value === ""){
      notice_Red1.innerText=("아이디와 비밀번호를 입력해주세요");
    }

  })