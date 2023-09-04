document.getElementById("orderButton").addEventListener("click", function(){
  document.getElementById("orderContents").style.display="block";
  document.getElementById("checkProducts").style.display="none";
  document.getElementById("shoppingAddress").style.display="none";
  document.getElementById("modiFy").style.display="none";
})

document.getElementById("checkButton").addEventListener("click", function(){
  document.getElementById("orderContents").style.display="none";
  document.getElementById("checkProducts").style.display="block";
  document.getElementById("shoppingAddress").style.display="none";
  document.getElementById("modiFy").style.display="none";
})

document.getElementById("addressButton").addEventListener("click", function(){
  document.getElementById("orderContents").style.display="none";
  document.getElementById("checkProducts").style.display="none";
  document.getElementById("shoppingAddress").style.display="block";
  document.getElementById("modiFy").style.display="none";
})

document.getElementById("modifyButton").addEventListener("click", function(){
  document.getElementById("orderContents").style.display="none";
  document.getElementById("checkProducts").style.display="none";
  document.getElementById("shoppingAddress").style.display="none";
  document.getElementById("modiFy").style.display="block";
})

document.getElementById("review").addEventListener("click", function(){
  window.location.href="../후기작성page/후기작성되있는page.html";
})

document.getElementById("exit").addEventListener("click", function(){
  window.location.href="withdrawal.html";
})
document.getElementById("pay").addEventListener("click", function(){
  window.location.href="pay.html";
} )  



document.addEventListener("DOMContentLoaded", function(){
  const updateButton= document.getElementById("modify1");
  updateButton.addEventListener("click", function(){
    const mid=document.getElementById("userId").value;
    const mpw=document.getElementById("originalPassword").value;
    const mpwf=document.getElementById("newPassword").value;
    const mname=document.getElementById("name").value;
    const memail=document.getElementById("email").value;
    const mphone=document.getElementById("mobileNumber").value;
    const notice_Red1=document.querySelector("#red1");

    if(mid==="" || mpw===""|| mpwf===""|| mname===""||memail===""||
    mphone===""){
      notice_Red1.innerText="회원정보를 전부 입력해주세요";
    }else SubmitEvent
  })
})