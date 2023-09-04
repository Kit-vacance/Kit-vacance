const joinButton= document.querySelector("button.join_button4");
const id= document.querySelector("input[name='memberId']");
const pw1= document.querySelector("input[name='passWord']");
const pwcf= document.querySelector("input[name='passwordConfirm']");
const Name= document.querySelector("input[name='Name']");
const Email= document.querySelector("input[name='email']");
const emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
const notice_Red1= document.querySelector("#red1");
const notice_Red2= document.querySelector("#red2");
const notice_Red3= document.querySelector("#red3");
const notice_Red4= document.querySelector("#red4");
const notice_Red5= document.querySelector("#red5");

  joinButton.addEventListener("click", (e)=>{

  if(id.value.length < 5 || id.value.length > 21){
    notice_Red1.innerText= "아이디는 6자 이상 20이하를 입력해주세요"
   return
  }else{notice_Red1.innerText="사용가능한 아이디입니다."}

  if(!/[A-Z]/.test(pw1.value)){
    notice_Red2.innerText= "최소한 하나의 대문자 포함해야 합니다."
    return
  }
  else if(!/[a-z]/.test(pw1.value)){
    notice_Red2.innerText= "최소한 하나의 소문자 포함해야 합니다."
  }
  else if(!/[!@#$%^&*(),.?":{}|<>]/.test(pw1.value)){
    notice_Red2.innerText= "최소한 하나의 특수문자를 포함해야 합니다."
  }else{notice_Red2.innerText="비밀번호가 정상적으로 입력되었습니다."}
  
  if(pwcf.value === pw1.value){
    notice_Red3.innerText="비밀번호가 일치합니다."
  }else{notice_Red3.innerText="비밀번호가 일치하지 않습니다."}

  if(Name.value.length <2){
    notice_Red4.innerText="이름은 최소 두 글자여야 합니다."
  }
  else if(/[^a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]/.test(Name.value)){
    notice_Red4.innerText="이름에는 특수문자나 숫자가 포함될 수 없습니다."
  }else{notice_Red4.innerText="이름이 정상적으로 입력되었습니다."}

})
 
